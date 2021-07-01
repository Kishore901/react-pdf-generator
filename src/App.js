import './App.css';
import Invoice from './components/Invoice';
import invoiceData from './data/invoiceData';
import { PDFViewer } from '@react-pdf/renderer';

function App() {
  return (
    <div className="App">
      <PDFViewer height="600" width="1000" className="pdfContainer">
        <Invoice data={invoiceData} />
      </PDFViewer>
    </div>
  );
}

export default App;
