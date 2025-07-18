"use client";
import React, { useState, useEffect } from "react";

const clientId = "a2f6facc-57fd-4bb8-983a-d1b6a5078ee9"; // Replace with your real App ID
const redirectUri = "http://10.5.81.83:3000/auth/callback";
const scope = "https://graph.microsoft.com/Mail.Read";

const OutlookConnect = () => {
  const [accessToken, setAccessToken] = useState(null);

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
        setAccessToken(token);

        // Send token to FastAPI backend
        fetch(`http://localhost:8001/api/v1/vouchers/outlook/parse-emails?access_token=${token}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Emails:", data);
            alert("Emails parsed successfully!");
          })
          .catch((err) => {
            console.error("Error parsing emails:", err);
          });
      }
    }
  }, []);

  return (
    <div className="p-4">
      {accessToken ? (
        <button
          className="bg-red-600 text-white p-2 rounded"
          onClick={disconnectOutlook}
        >
          Disconnect Outlook
        </button>
      ) : (
        <button
          className="bg-blue-600 text-white p-2 rounded"
          onClick={connectOutlook}
        >
          Connect Outlook
        </button>
      )}
    </div>
  );
};

export default OutlookConnect;
