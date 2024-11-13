import { transform } from "@/helper/transform";
import { useState } from "react";
import { useMapEvents, Marker } from "react-leaflet";

const ExactIconPlacing = () => {
  const [position, setPosition] = useState(null);

  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      console.log(transform(e.latlng));
    },
  });

  const icon = L.icon({
    iconUrl:
      "data:image/svg+xml;base64,PHN2Zw0KICB3aWR0aD0iNzgiDQogIGhlaWdodD0iODgiDQogIHZpZXdCb3g9IjAgMCA3OCA4OCINCiAgZmlsbD0ibm9uZSINCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIg0KPg0KICA8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kXzVfNDUpIj4NCiAgICA8cGF0aA0KICAgICAgZmlsbC1ydWxlPSJldmVub2RkIg0KICAgICAgY2xpcC1ydWxlPSJldmVub2RkIg0KICAgICAgZD0iTTUxLjgxNTQgNjQuNjExQzUyLjE1MTQgNjQuMjc1IDUyLjU0NjEgNjQuMDAzOCA1Mi45NzM0IDYzLjc5NkM2My42NDQ3IDU4LjYwODEgNzEgNDcuNjYzIDcxIDM1QzcxIDE3LjMyNjkgNTYuNjczMSAzIDM5IDNDMjEuMzI2OSAzIDcgMTcuMzI2OSA3IDM1QzcgNDcuODUwNSAxNC41NzQ3IDU4LjkzMTkgMjUuNTAyOCA2NC4wMjI3QzI1Ljk1NTIgNjQuMjMzNCAyNi4zNzI2IDY0LjUxNDcgMjYuNzI1NCA2NC44Njc1TDM4LjQzNSA3Ni41NzcyQzM4LjgyNTYgNzYuOTY3NyAzOS40NTg3IDc2Ljk2NzcgMzkuODQ5MiA3Ni41NzcyTDUxLjgxNTQgNjQuNjExWiINCiAgICAgIGZpbGw9IndoaXRlIg0KICAgIC8+DQogIDwvZz4NCiAgPGNpcmNsZSBjeD0iMzkiIGN5PSIzNSIgcj0iMjgiIGZpbGw9IiMxMEE4OEEiIC8+DQogIDxwYXRoDQogICAgZmlsbC1ydWxlPSJldmVub2RkIg0KICAgIGNsaXAtcnVsZT0iZXZlbm9kZCINCiAgICBkPSJNMzkgMTRDMzMuNDc3MiAxNCAyOSAxOC40NzcyIDI5IDI0SDQ5QzQ5IDE4LjQ3NzIgNDQuNTIyOCAxNCAzOSAxNFpNMzkgMzRDNDMuOTcwNiAzNCA0OCAyOS45NzA2IDQ4IDI1SDMwQzMwIDI5Ljk3MDYgMzQuMDI5NCAzNCAzOSAzNFpNNDkgNDRWNjNIMjlWNDRIMjhWNjFIMjJWNDRDMjIgMzkuMDI5NCAyNi4wMjk0IDM1IDMxIDM1SDQ3QzUxLjk3MDYgMzUgNTYgMzkuMDI5NCA1NiA0NFY2MUg1MFY0NEg0OVoiDQogICAgZmlsbD0id2hpdGUiDQogIC8+DQogIDxjaXJjbGUgY3g9IjM5IiBjeT0iMzUiIHI9IjI3LjUiIHN0cm9rZT0iIzEwQTg4QSIgLz4NCiAgPGRlZnM+DQogICAgPGZpbHRlcg0KICAgICAgaWQ9ImZpbHRlcjBfZF81XzQ1Ig0KICAgICAgeD0iMC42Ig0KICAgICAgeT0iMC42Ig0KICAgICAgd2lkdGg9Ijc2LjgiDQogICAgICBoZWlnaHQ9Ijg2LjY3MDEiDQogICAgICBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiDQogICAgICBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiDQogICAgPg0KICAgICAgPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIC8+DQogICAgICA8ZmVDb2xvck1hdHJpeA0KICAgICAgICBpbj0iU291cmNlQWxwaGEiDQogICAgICAgIHR5cGU9Im1hdHJpeCINCiAgICAgICAgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCINCiAgICAgICAgcmVzdWx0PSJoYXJkQWxwaGEiDQogICAgICAvPg0KICAgICAgPGZlT2Zmc2V0IGR5PSI0IiAvPg0KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMy4yIiAvPg0KICAgICAgPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0ib3V0IiAvPg0KICAgICAgPGZlQ29sb3JNYXRyaXgNCiAgICAgICAgdHlwZT0ibWF0cml4Ig0KICAgICAgICB2YWx1ZXM9IjAgMCAwIDAgMC4xNzY0NzEgMCAwIDAgMCAwLjIzNTI5NCAwIDAgMCAwIDAuMjU0OTAyIDAgMCAwIDEgMCINCiAgICAgIC8+DQogICAgICA8ZmVCbGVuZA0KICAgICAgICBtb2RlPSJub3JtYWwiDQogICAgICAgIGluMj0iQmFja2dyb3VuZEltYWdlRml4Ig0KICAgICAgICByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvd181XzQ1Ig0KICAgICAgLz4NCiAgICAgIDxmZUJsZW5kDQogICAgICAgIG1vZGU9Im5vcm1hbCINCiAgICAgICAgaW49IlNvdXJjZUdyYXBoaWMiDQogICAgICAgIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93XzVfNDUiDQogICAgICAgIHJlc3VsdD0ic2hhcGUiDQogICAgICAvPg0KICAgIDwvZmlsdGVyPg0KICA8L2RlZnM+DQo8L3N2Zz4NCg==",
    iconSize: 32,
    iconAnchor: [16, 32],
  });

  return position === null ? null : (
    <Marker icon={icon} position={position} interactive={false} />
  );
};

export default ExactIconPlacing;
