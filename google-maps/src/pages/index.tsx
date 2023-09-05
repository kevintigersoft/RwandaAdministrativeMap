import React, { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import AppLayout from "../components/layout";
import MapComponent from "../components/maps";

const Index: NextPage = () => {
  const mapOptions: google.maps.MapOptions = {
    center: { lat: -1.9403, lng: 29.8739 }, // Coordinates for Rwanda
    zoom: 10, // Initial zoom level
    mapTypeControl: true, // Show the map type control
    streetViewControl: true, // Show the street view control
  };

  return (
    <>
      <Head>
        <title>google-maps</title>
        <meta name="description" content="Generated by Create Next Stack." />
      </Head>
      <AppLayout>
        <MapComponent
          center={{ lat: -1.9403, lng: 29.8739 }}
          zoom={15}
          options={mapOptions}
        />
      </AppLayout>
    </>
  );
};

export default Index;
