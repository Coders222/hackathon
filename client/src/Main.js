import { useState } from 'react';
import styled from 'styled-components';
import theme from './styles/theme';
import './Main.css';
import gitLogo from './images/gitLogo.png';
import axios from 'axios';
import { toast} from 'react-toastify';
import { SymblProvider, Transcripts,Topics } from '@symblai/react-elements';

function Main (){
    const symblConfig = {
        appId: '6856564b39714c4e4e7755774f79306f38694245583267326f69666450535565',
        appSecret: '31614534637363354f364567392d7a4455687331464341575f35634377727a696b476f634331755634784e4547306f3675336378624c6a53695267526d39506e',
    };
    const colors = theme.colors;
    const conId= 5276491777048576;

    const Container = styled.div`
        background-color: ${colors.lightBeige};
        height: 1080px;
        border-top:1px ${colors.lightBeige} solid;
        display:flex;
    `;
    const TransBox = styled.div`
        background-color: ${colors.tan};
        height: 610px;
        width:500px
        border-radius: 15px;
        margin-right:5vw;;
        margin-left: auto;
    `;
    const KeyBox = styled.div`
        background-color: ${colors.tan};
        width = 400px;
        height 300px;
        border-radius: 15px;
        margin-right: auto;
    `;
    const KeyContainer = styled.div`
        width:300px;
        
    `;
    const TransContainer = styled.div`
        height:515px;
        width:500px
    `;
    const Dropbox = styled.div`
        margin:10px;
        margin-left:auto;
        margin-top:auto;
        margin-bottom:auto;
        height: 500px;
        width: 500px;
        top: 100px;
        left: 25px;
        background-color: #FFFFFF; 
    `

    const Footer = styled.div`
        height: 75px;
        background-color: ${colors.mocha};
        text-align: center;
        position: relative;
        bottom: 0px;
        border-bottom:5px ${colors.mocha} solid;
    `
    const Logo = styled.div `
        float:left;
        background-image: url(${props => props.img});
        width:60px;
        height: 60px;
        margin-left: 10px;
        margin-top:10px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    `;
    const UploadFile = styled.div `
        display:flex;
        flex-direction: column;
        width: 100%;
        justify-content:center;
    `;
    const UploadButton = styled.button`
    `;
    const [files, setFiles] = useState([]);
    const onInputChange = (e) => {
        setFiles(e.target.files)
    };
    const onSubmit = (e) =>{
        e.preventDefault();

        const data = new FormData();
        console.log(files);
        for(let i = 0; i < files.length; i++) {
            console.log(files[i]);
            data.append('file', files[i]);
        }
        console.log(data.getAll('file'));
        axios.post('//localhost:8888/upload', data)
            .then((response) => {
                toast.success('Upload Success');
                
            })
            .catch((e) => {
                toast.error('Upload Error')
            })
    }

    return (
        <body>
            <Container>
                <SymblProvider config={symblConfig}>
                <Dropbox>
                    <h1 font-size= "10px">
                        Upload Your File
                    </h1>
                    <form method="post" onSubmit={onSubmit}>
                        <UploadFile>
                            <input type="file" onChange = {onInputChange} accept="video/*"/>
                        </UploadFile>
                        <UploadButton>Submit</UploadButton>
                    </form>
                </Dropbox>
                <TransBox>
                <h1>Transcript</h1>
                <TransContainer>
                <Transcripts
                    showAvatar= {false}
                    conversationId={conId}
                    highlightPhrases={['action_phrase']}
                    transcriptsWrapperClassName="testWrapperClass"
                    transcriptRowClassName="testClassRow"
                    transcriptRowHeaderClassName=""
                    transcriptClassName=""

                    avatarClassName="avatarClass"
                    />

                </TransContainer>
                </TransBox>
                <KeyBox>
                <h1>Key Words</h1>
                <KeyContainer>
                <Topics
                    conversationId={conId}
                    confidenceThreshold={0.1}
                    orderBy={'score'}
                    />
                </KeyContainer>
                </KeyBox>
                
                </SymblProvider>
            </Container>
            
            <Footer>
                <Logo img = {gitLogo} >

                </Logo>
            </Footer>
        </body>
    );
}
export default Main;