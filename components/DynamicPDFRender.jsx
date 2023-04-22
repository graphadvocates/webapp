import { Page, Text, View, Document, PDFViewer } from '@react-pdf/renderer';
// import dynamic from 'next/dynamic';

// const DynamicPDFViewer = dynamic(() => import('react-pdf'), {
//   ssr: false,
// });

function MyDocument({ name, role, region, background }) {
  return (
    <Document>
      <Page>
        <View>
          <Text>Name: {name}</Text>
          <Text>Role: {role}</Text>
          <Text>Region: {region}</Text>
          <Text>Background: {background}</Text>
        </View>
      </Page>
    </Document>
  );
}

export default function DynamicPDFRender(props) {
  return (
    <PDFViewer
      document={
        <MyDocument
          name={props.name}
          role={props.role}
          region={props.region}
          background={props.background}
        />
      }
      fileName="mypdf.pdf"
    >
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFViewer>
  );
}
