# τροφή /trofi/
'그리스어'로 '음식'이라는 뜻이다. 경북대 주변 상권을 추천하는 제공하는 서비스의 중심인 '음식'을 강조하고자 서비스명을 정하게 되었다. 주변 상권과 지리에 관한 정보가 부족한 새내기와 코로나 학번이라 불리는 20학번, 코로나19로 인해 불안하지만 대외활동이 많아 외부 음식을 자주 먹고 스터디나 여러 과제등으로 카페를 찾을 일이 잦은 고학번들, 이들 모두에게 도움이 되는, 실내 사람 수 카운팅이 가능한 경북대 상권 추천 서비스를 고안했다.

| 학번 | 멤버 | 역할 |
| ---- | ---- | --- |
| 21 | 유지예 | 팀장 |
| 21 | 유지훈 | 팀원 |
| 21 | 이현서 | 팀원 |
| 21 | 제유나 | 팀원 |

## 서론
코로나 19로 인해 우리의 생활은 많은 것이 바뀌었다. 일상에서의 마스크 착용은 물론 코로나 전이었다면 단순한 기침은 단순한 감기 증세지만 이제는 보건소로 달려가 코로나 19 검사를 맡아야하는, 영화속에서나 보던 세상에서, 우리는 현재 2년째 살고있다. 이런 상황 속에서 고등학교 3학년 수험생활을 보낸 우리들은 코로나 19 이전의 대학생활을 모른 채 21학번, 20살의 대학생이 되었다. 우리는 대학에서 1학기를 지내며 많은 것들에 있어서 코로나 19 이전과 다르다는 선배님들의 말씀, 그리고 우리 스스로 느낀 불편함들을 알고 있고 이번 해커톤 주제인 '코로나 19로 변화된 대학생활을 개선할 수 있는 창의적이고 혁신적인 소프트웨어 자유 개발', 에 관한 여러가지 아이디어를 새내기의 관점에서 다양하게 풀어낼 수 있었다.

## 개발 동기
가장 크게 느꼈던 부분은 '정보'의 부족이다. 강의, 동아리, 대외활동 어느 일을 하든 타인을 쉽게 만나기 힘든 현 상황에서 당연하게 기본적으로 얻었어야 할 정보를 얻기 힘들었다. 그 중에서도 가장 큰 부분은 경북대 주변 상권이다. 코로나 19로 인해 바깥활동이 어려워져 주변 상권의 음식점들을 한창 즐길 때의 새내기나 코로나 학번이라 불리는 20학번, 그리고 학교에서 많은 과제와 활동을 해야 할 고학번, 그리고 상권의 자영업자들까지 모두가 어려움을 느끼고 있다. 특히나 주요 소비자인 대학생의 경우 많은 사람들이 몰리는 음식점이나 카페들에 관해 회피성을 보이고 있다. 많은 이들이 모이는 곳에선 코로나 19 확진 가능성이 높으며 이로 인해 받을 피해는 오로지 자신의 몫이기 때문이다. 우리는 이러한 점에 착안했다. 

## 서비스 설명
이 서비스는 카카오지도 API와 React.js 및 Node.js, Express.js와 MongoDB를 활용한 웹 서비스이다. 북문, 쪽문, 동문, 서문, 테크노문 이렇게 유동인구수가 많은 5개의 문을 중심으로 음식점과 카페를 구분하였다. 음식점은 일식, 중식, 양식, 한식, 그리고 이에 속하지 않는 종류의 음식 기타. 그 외 카페 카테고리 및 인구순과 별점순으로 카테고리를 나누었다. 
1. 모바일 웹페이지를 열고 5가지의 문 중 1가지 문을 클릭한다. 클릭한 후에 그 문에 배정된 음식점들이 카테고리 구분 없이 왼쪽에 쭉 뜬다.
2. 자기가 원하는 카테고리를 클릭하면 그 카테고리에 배정된 음식점이나 카페들만 뜨게 된다. 예를 들어 북문을 클릭한 후 일식을 클릭했다면 북문에 있는 일식 음식점들만 쭉 뜨게된다. 카페를 클릭할 경우 북문의 카페가 쭉 뜨게 된다. 지리를 잘 모르는 저학년의 경우엔 지도를 보며 자신이 어느 문 근처에 있는 지 잘 알 수 있기 때문에 이를 보고 가까이에 위치한 문의 근처 상권들을 한눈에 알 수 있다.
3. 그 음식점 중 하나를 클릭하였을 때 실시간으로 그 실내 속에 사람이 몇명있는지 뜨게된다. 이 때 사람을 카운팅하는 방법은 웹캠을 사용한다. 이는 밑에 서 자세히 설명하기로 한다. 웹캠을 통해 들어오고 나가는 사람의 수를 enter,exit로 체크하며 이 때 사람 수를 실시간으로 카운팅하고 이는 모바일 웹서비스로 정보가 넘어와 반영된다. 우리는 이 점이 현 코로나 19상황에서 거리두기가 필요한 대학생들에게 가장 큰 도움이 될 수 있다고 확신한다. 사람이 적은 곳을 직접 돌지 않아도 근처에서 어느 곳이 가장 적은지 인구순으로 바로 알 수 있어 이는 거리두기가 필요한 코로나19라는 특수한 상황 속에서 확진자 감소와 감염 위험성을 크게 낮추어주며 학생들의 불안감 또한 낮추어줄 수 있다. 그 외에 시험기간 등 유동인구 수 및 특정 장소에 사람이 많이 몰리는 경우에도 굳이 여러 곳을 들릴 필요가 없어 동선과 시간의효율적인 면에서도 큰 도움이 된다.
4. 그 외에 음식점 클릭 시 뜨는 정보의 종류엔 별점이 있다. 이는 그곳을 방문한 소비자들이 0.0점 ~ 5.0점까지 평가할 수 있는데 이를 통해 별점순으로 분류된 카테고리를 클릭하였을 경우 가장 평이 좋은, '추천'하는 상권이 어느 곳인지를 바로 알 수 있어 정보가 부족한 새내기들이나 지리 정보를 잘 알지 못하는 이들에게 방향성을 확실하게 제시해 줄 수 있다.    
5. 실시간 인구 수 카운팅 정보, 별점 외에 그 가게의 메뉴가 같이 뜨게된다. 이는 그 가게를 '처음 방문하는 자들'의 경우에 메뉴 결정 및 가격 대조를 통해 개인 맞춤형으로, 자신의 목적에 맞게 상권을 선택할 수 있다는 점에 있어서 일반적인 추천 서비스랑 비교해 경쟁력이 있다.

## 기대효과
실시간 카운팅 서비스느 정보가 부족한 저학년, 바깥활동이 잦아 불안함을 가진 고학년 모두에게 도움이 될 수 있다. 코로나 19로 인해 감염이 우려되어 사람들이 많은 곳을 가기 힘든 요즘 시대에 첫번째, 실시간으로 실내의 사람수를 카운팅하여 어느 곳에 어느 정도의 사람이 있는지 바로 알 수 있다는 점은 확진자 감소 및 많은 사람들으 고루고루 여러 곳에 분포시킬 수 있다는 점에서 큰 도움이 된다. '웹캠'이라는 점은 어느 누구나가 쉽게 구매해 설치할 수 있다는 점이 장점이 되며 무엇보다 코로나19로 인해 수입이 줄어든 자영업자들에게 있어서 주요 소비자들인 대학생들이 어느 한곳에 몰리지 않고 사람수를 보고 여러 곳에 분포한다는 점은 수익적으로도 이득이 된다.
별점과 카테고리, 가까운 위치의 문에 따라 음식점을 추천해주는 서비스는 주변 상권에 대한 정보가 없어 정확하게 위치와 어느 정도의 맛과 평가를 받고 있는 지 어려운 이들에게 정확한 정보를 알려줌으로써 장소 결정에 관한 어려움을 한번에 해결할 수 있다. 다른 서비스들과 다르게 자신의 위치를 알고 이에 따라 소비자가 직접 선택할 수 있어 맞춤형 서비스이기에 큰 경쟁력이 된다.

## 사용된 코드
- 웹캠_라즈베리파이_실시간 카운팅 서비스
[Counting-in-Real-Time]: [https://github.com/saimj7/People-Counting-in-Real-Time]
위 깃허브에 들어가보면 실시간 카메라에서 가로선으로 사람이 지나가는 것을 확인 하여 전체적으로 입장한 사람의 수를 측정해준다.
사람의 수를 측정한뒤 파이썬을 사용하여 텍스트파일로 저장하고 자바스크립트를 이용해 웹으로 현재 가게안 사람이 몇명이 들어가 있는지를 가르쳐준다.

## YouTube 시연영상
라즈베리파이를 이용한 웹캠 서비스를 만들었지만 실제 가게와 협약을 진행하지 않아 본 해커톤에서는 영상으로 대체하였다.

