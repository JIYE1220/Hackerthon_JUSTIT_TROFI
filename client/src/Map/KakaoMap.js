import React, {
	useEffect,
	useState,
	useReducer
} from "react";

export default function Map(props) {
	const {
		handleClick,
		getElement, getElementLocation } = props;

	useEffect(() => {
		mapscript();
	}, []);


	const mapscript = () => {
		let container = document.getElementById("map");
		let options = {
			center: new window.kakao.maps.LatLng(getElementLocation().lat, getElementLocation().lng),
			level: getElementLocation().scale,
		};

		//map
		const map = new window.kakao.maps.Map(container, options);
		getElement().forEach((el) => {
			// 마커를 생성합니다
			var marker = new window.kakao.maps.Marker({
				map: map,
				position: new window.kakao.maps.LatLng(el.lat, el.lng),
				clickable: true // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
			});

			// 마커에 표시할 인포윈도우를 생성합니다
			var infowindow = new window.kakao.maps.InfoWindow({
				content: el.title
			});

			infowindow.open(map, marker);

			// 마커에 click 이벤트를 등록합니다
			window.kakao.maps.event.addListener(marker, 'click', handleClick(el.title));
		});
	}

	// setInterval(mapscript, 60);

  return <div id="map" style={{ width: "100%", height: window.innerHeight - 65}}></div>;
}