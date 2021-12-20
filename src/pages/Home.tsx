import { IonButton, IonContent, IonHeader, IonPage, IonPopover, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />

        <IonButton id="trigger-button" style={{ marginBottom: '1500px' }}>Click to open popover</IonButton>
        <IonPopover trigger="trigger-button">
          <IonContent>Popover Content</IonContent>
        </IonPopover>
      </IonContent>
    </IonPage>
  );
};

export default Home;
