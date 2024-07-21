export default function App() {
  return (
    <button
      onClick={async () => {
        const response = await fetch(
          "http://www.boomlings.com/database/downloadGJLevel22.php",
          {
            mode: "no-cors",
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Origin: "http://example.com",
              "User-Agent": "",
            },
            body: JSON.stringify({
              levelID: -1,
              secret: "Wmfd2893gb7",
            }),
          }
        );
        const text = await response.text();
        console.log(response);
        console.log(`Text: ${text}`);
      }}
    >
      DO IT
    </button>
  );
}
