
import * as React from 'react';

// IMPORTANT: This page has been extremely simplified to help diagnose an "Internal Server Error".
// It does not include metadata generation, static param generation, or dynamic content display.

const ExtremelyMinimalApplyJobPage = (props: any) => {
  // We won't try to use props.params.jobId here to be absolutely safe for diagnosis
  
  // Minimal static content:
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
      <header style={{ borderBottom: '1px solid #eee', paddingBottom: '20px', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '2em', color: '#007bff' }}>Job Application</h1>
      </header>
      <main>
        <p style={{ fontSize: '1.1em', marginBottom: '15px' }}>
          Thank you for your interest in a career at Grittrix AI Solutions.
        </p>
        <p style={{ fontSize: '1.1em', marginBottom: '15px' }}>
          The application form and details for this specific job (ID: {props?.params?.jobId || 'Not specified'}) are currently being updated to ensure the best experience.
        </p>
        <p style={{ fontSize: '1.1em', marginBottom: '15px' }}>
          In the meantime, you can explore our open positions on our <a href="/careers" style={{ color: '#007bff', textDecoration: 'none' }}>careers page</a>.
        </p>
        <p style={{ fontSize: '1.1em', marginBottom: '15px' }}>
          If you have an urgent inquiry regarding a specific role, please feel free to email us at <a href="mailto:careers@grittrix.com" style={{ color: '#007bff', textDecoration: 'none' }}>careers@grittrix.com</a> and mention the Job ID if you know it.
        </p>
      </main>
      <footer style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #eee', fontSize: '0.9em', color: '#777' }}>
        <p>&copy; {new Date().getFullYear()} Grittrix AI Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ExtremelyMinimalApplyJobPage;
