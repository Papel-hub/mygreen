"use client";

import { useEffect, useState } from "react";

import { RequestModel } from "@/types/request";

import dynamic from "next/dynamic";

const MapContainer = dynamic(
    () => import("react-leaflet").then(m => m.MapContainer),
    { ssr: false }
);

const TileLayer = dynamic(
    () => import("react-leaflet").then(m => m.TileLayer),
    { ssr: false }
);

const Marker = dynamic(
    () => import("react-leaflet").then(m => m.Marker),
    { ssr: false }
);

const Polyline = dynamic(
    () => import("react-leaflet").then(m => m.Polyline),
    { ssr: false }
);

interface Props {

    request: RequestModel;

}

export default function RouteMap({

    request

}: Props) {

    const [route, setRoute] = useState<[number, number][]>([]);

    useEffect(() => {

        loadRoute();

    }, [request]);

    async function loadRoute() {

        try {

            const url =
                `https://router.project-osrm.org/route/v1/driving/` +
                `${request.pickup.lng},${request.pickup.lat};` +
                `${request.delivery.lng},${request.delivery.lat}` +
                `?overview=full&geometries=geojson`;

            const res = await fetch(url);

            const json = await res.json();

            if (!json.routes?.length) return;

            const coordinates =
                json.routes[0].geometry.coordinates.map(
                    (item: number[]) => [item[1], item[0]]
                );

            setRoute(coordinates);

        } catch (err) {

            console.log(err);

        }

    }

    return (

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">

            <h2 className="font-bold text-base mb-4 text-gray-900">

                Route Map

            </h2>

            <div className="rounded-xl overflow-hidden">

                <MapContainer

                    center={[

                        request.pickup.lat,

                        request.pickup.lng

                    ]}

                    zoom={12}

                    scrollWheelZoom={false}

                    style={{

                        width: "100%",

                        height: "300px"

                    }}

                >

                    <TileLayer

                        attribution='© OpenStreetMap'

                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

                    />

                    <Marker

                        position={[

                            request.pickup.lat,

                            request.pickup.lng

                        ]}

                    />

                    <Marker

                        position={[

                            request.delivery.lat,

                            request.delivery.lng

                        ]}

                    />

                    {route.length > 0 && (

                        <Polyline

                            positions={route}

                            pathOptions={{

                                color: "#169B62",

                                weight: 5

                            }}

                        />

                    )}

                </MapContainer>

            </div>

        </div>

    );

}