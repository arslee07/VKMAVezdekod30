import React from "react";
import ReactDOM from "react-dom";
import {
  AdaptivityProvider,
  ConfigProvider,
  useAdaptivity,
  AppRoot,
  SplitLayout,
  SplitCol,
  ViewWidth,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell, Avatar, Caption, Link, Snackbar, CellButton
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import {Icon16Done} from "@vkontakte/icons";

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      snackbar: null
    };

    this.openBaseWithAction = this.openBaseWithAction.bind(this);
  }

  openBaseWithAction() {
    if (this.state.snackbar) return;
    this.setState({
      snackbar:
          <Snackbar
              onClose={() => this.setState({snackbar: null})}
              before={<Avatar size={24} style={{background: 'var(--accent)'}}><Icon16Done fill="#fff" width={14}
                                                                                          height={14}/></Avatar>}
          >
            Урааа, спасибо!!! 🙂
          </Snackbar>
    });
  }

  render() {
    return (
        <AppRoot>
          <SplitLayout header={<PanelHeader separator={false}/>}>
            <View activePanel="main">
              <Panel id="main">
                <PanelHeader>VKMAVezdekod30</PanelHeader>
                <Group mode="plain" header={<Header mode="secondary">// TODO: придумать название</Header>}>
                  <Link href={'https://vk.com/true_arslee'}>
                    <SimpleCell before={<Avatar size={48}
                                                src={'https://sun5-3.userapi.com/s/v1/ig2/eHnf7cyhT8xL7JpvNjTGb0lu7y28glvnM6ZihPR_eGMq0U0MsH_W1FDDW0yZd9Voyt5xM_xDCBTuyyAeErBO-iod.jpg?size=200x0&quality=96&crop=28,16,467,467&ava=1'}/>}
                                badge={<Caption level={'1'}>💻</Caption>}
                                description="Кодит всякую всячину">Арсений Лиунша</SimpleCell>
                  </Link>
                  <Link href={'https://vk.com/Igorechek06'}>
                    <SimpleCell before={<Avatar size={48}
                                                src={'https://sun5-3.userapi.com/s/v1/ig2/E83zzDNNRe7AhYJY9Wd0Bn6MSSDVSnc9rj9Gon6mUFutdIAeGeqgKgeAMJfghDNYgBcRGj7_LkcIrNRAaVx9HekD.jpg?size=200x0&quality=96&crop=132,232,1148,1148&ava=1'}/>}
                                badge={<Caption level={'1'}>📝</Caption>}
                                description="Ничуть не хуже юзера сверху">Игорь Толмачёв</SimpleCell>
                  </Link>
                  <Link href={'https://vk.com/krutosvip'}>
                    <SimpleCell before={<Avatar size={48}
                                                src={'https://sun5-3.userapi.com/s/v1/ig2/toMH8CpmbHQaf-q5qr0-k8Ot3DVibgumt7jaVjcPm8Yd8t4bddxfY2PrjZXqHQl8sV5yx47-FRB6yLGVQQduMjlB.jpg?size=200x0&quality=96&crop=0,0,416,416&ava=1'}/>}
                                badge={<Caption level={'1'}>⚙️</Caption>}
                                description="Лучший питонист Самары">Даниил Лотков</SimpleCell>
                  </Link>
                  <Link href={'https://vk.com/id528197210'}>
                    <SimpleCell before={<Avatar size={48}
                                                src={'https://sun5-3.userapi.com/s/v1/if1/wHhe0IkksrXxckm7WMXmObeDrpCxXK7oJBWytzB8-p2wrETUvBYkVbXxZ-g3K0v-THAh86fU.jpg?size=200x0&quality=96&crop=644,84,1271,1271&ava=1'}/>}
                                badge={<Caption level={'1'}>🎨</Caption>}
                                description="Артемий Лебедев завидует!">Валерия Юрова</SimpleCell>
                  </Link>
                </Group>
                <Group>
                  <CellButton onClick={this.openBaseWithAction}>Начислить 20 баллов</CellButton>
                </Group>
                {this.state.snackbar}
              </Panel>
            </View>
          </SplitLayout>
        </AppRoot>
    );
  }
};

ReactDOM.render(
    <ConfigProvider>
      <AdaptivityProvider>
        <Example/>
      </AdaptivityProvider>
    </ConfigProvider>,
    document.getElementById("root")
);