"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const clientId = "a2f6facc-57fd-4bb8-983a-d1b6a5078ee9";
const redirectUri = "https://my-next-app-one-neon.vercel.app/auth/callback";
const scope = "https://graph.microsoft.com/Mail.Read";

const OutlookConnect = () => {
  const [accessToken, setAccessToken] = useState('');

  const connectOutlook = () => {
    const authUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&scope=${encodeURIComponent(scope)}&response_mode=fragment`;
    window.location.href = authUrl;
  };

  const disconnectOutlook = () => {
    setAccessToken(null);
    alert("Disconnected Outlook!");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash.includes("access_token")) {
        const params = new URLSearchParams(hash.substring(1));
        const token = params.get("access_token");
        if (token) {
          setAccessToken(token);
          axios
            .post("http://10.5.81.83:8001/api/v1/vouchers/outlook/parse-emails?access_token=", null, {
              params: { access_token: token },
              headers: {
                "Content-Type": "application/json",
              },
            })
            .then((response) => {
              console.log("Emails:", response.data);
              alert("Emails parsed successfully!");
            })
            .catch((error) => {
              console.error("Error parsing emails:", error);
              alert("Failed to parse emails.");
            });
        }
      }
    }
  }, []);

  return (
    <div className="">
      {accessToken ? (
        <button
          className="bg-red-600 text-white p-2 rounded flex items-center"
          onClick={disconnectOutlook}
        >
          Disconnect Outlook
        </button>
      ) : (
        <button
          className="bg-blue-600 text-white p-2 rounded flex items-center"
          onClick={connectOutlook}
        >
          Connect Outlook
        </button>
      )}
    </div>
  );
};

export default OutlookConnect;
