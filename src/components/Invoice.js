import React from 'react';
import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import Header from './Header';
import SubHeader from './SubHeader';
import ParticularsTable from './ParticularsTable';
import ComplaintTable from './ComplaintTable';
import TotalTable from './TotalTable';
import Terms from './Terms';
import Footer from './Footer.js';

const style = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: 'column',
  },
});

const Invoice = ({ data }) => {
  console.log(data);
  return (
    <Document>
      <Page size="A4" style={style.page}>
        <Header />
        <SubHeader data={data} />
        <ParticularsTable data={data} />
        <ComplaintTable data={data} />
        <TotalTable />
        <Terms />
        <Footer />
      </Page>
    </Document>
  );
};

export default Invoice;
