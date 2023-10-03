import React from "react";
import Navbar from "../Navbar";
import { Image, Divider, Container, Button, Header, Segment, Grid } from 'semantic-ui-react';
import './home.css';
import { Link } from "react-router-dom";

function HOME() {
  return (
    <div>
      <Navbar />

      <Segment style={{ padding: '8em 0em', paddingBottom: '19em', background: 'rgb(32, 32, 32)', textAlign: 'center' }} vertical>
        <Grid.Row container stackable verticalAlign='middle' style={{ color: 'white' }}>
          <p style={{ fontSize: '65px' }}>
            쾌적한 나만의 공간을 위해
          </p>
          <p style={{ fontSize: '30px', marginTop: '1em' }}>
            공기정화 식물 추천 서비스
          </p>

          <Link to="/Service" style={{ marginTop: '2em' }}>
            <Button primary size='huge'>
              시작하기
            </Button>
          </Link>
        </Grid.Row>
      </Segment>

      <Segment style={{ padding: '8em 0em', paddingBottom: '19em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' className="hder2" style={{ fontSize: '2em', marginBottom: '-1em' }}>
                알고리즘을 이용하세요
              </Header>
              <p style={{ fontSize: '1.33em', marginBottom: '3em' }} >
                '싱물'은 당신의 기호와 필요에 따라 가장 적합한 식물을 추천해줍니다. 이는 단순히 식물을 고르는 것 이상으로, 공간을 아름답게 꾸미고 건강한 환경을 조성하는 일에 도움을 줄 것입니다.
              </p>
              <Header as='h3' className="hder2" style={{ fontSize: '2em', marginBottom: '-1em' }}>
                나만의 식물 성장일기를 작성해보세요
              </Header>
              <p style={{ fontSize: '1.33em' }} >
                식물 성장일기를 작성하는 것은 흥미로운 여정입니다. 그 속에서 당신은 식물들의 성장과 발전을 관찰하고 기록하며, 자연의 아름다움과 식물들이 어떻게 성장하는지에 대한 깊은 통찰을 얻게 됩니다.
              </p>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image bordered rounded size='large' src='/images/wireframe/image.png' disabled />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <Link to='/Diary'>
                <Button size='huge' >다이어리 바로가기</Button>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable >
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header className="hder2" as='h3' style={{ fontSize: '2em' }}>
                "싱물이란?"
              </Header>
              <p style={{ fontSize: '1.33em' }}>싱싱한 식물의 약자입니다.</p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header className="hder2" as='h3' style={{ fontSize: '2em' }}>
                "반려 식물"
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                어쩌면 당신의 삶의 작은 변화를 만날 수 있을 거예요.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          <Header className="hder2" as='h3' style={{ fontSize: '2em' }}>
            What's for?
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            최근 대기오염이 심각하게 발생하면서 인간 건강과 생활환경에 영향을 미치는 문제가 대두되고 있습니다. 
            이에 따라 실내 공기 청정에 대한 관심이 높아지고 있으며, 공기청정기나 환기 등의 방법도 활용되고 있습니다. 
            그러나 이러한 방법은 전력 소모나 화학 물질 배출 등 부작용을 일으킬 수 있습니다. 
          </p>

          <Divider
            as='h4'
            className='hder2'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <a href='/'>AND</a>
          </Divider>

          <p style={{ fontSize: '1.33em' }}>
            이러한 문제점을 해결하기 위해 자연적이면서 친환경적인 방법으로 실내 공기를 정화하는 공기 정화 식물에 대한 관심이 높아지고 있습니다. 
            이에 따라 저희 프로젝트는 대기 질 데이터와 식물 데이터를 분석하여 사용자에게 가장 적합한 공기 정화 식물을 추천하는 시스템을 제공하여,
            친환경적이면서도 효율적인 방법으로 실내 공기를 정화할 수 있도록 도움을 주고자 합니다.
          </p>
        </Container>
      </Segment>

      <footer className="footer">
        <p className="footer-by">
          made by{" "}
          OpenSource
        </p>
      </footer>
    </div>
  );
}

export default HOME;
