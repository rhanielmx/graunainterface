import Script from "next/script";

export default function DialogFlowChat() {
    return(
        <div>
            <Script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></Script>
            <df-messenger
            intent="WELCOME"
            chat-title="Projeto Graúna"
            agent-id="a8fb1d70-d2b2-4b1a-9fa7-7257fcb5f47a"
            language-code="pt-br"
            ></df-messenger>
        </div>
    )
}