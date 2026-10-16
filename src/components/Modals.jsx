import React, { useState, useEffect } from 'react';

export default function Modals({
  isEnquiryOpen,
  isProductsOpen,
  initialSeedInterest = 'cotton',
  productDetail = null,
  onClose
}) {
  // Enquiry form state
  const [formData, setFormData] = useState({
    fullName: '',
    contactPhone: '',
    cropInterest: initialSeedInterest,
    messageText: ''
  });
  const [enquirySuccess, setEnquirySuccess] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      cropInterest: initialSeedInterest || 'cotton'
    }));
  }, [initialSeedInterest]);

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    setEnquirySuccess(true);
    setTimeout(() => {
      setEnquirySuccess(false);
      setFormData({
        fullName: '',
        contactPhone: '',
        cropInterest: 'cotton',
        messageText: ''
      });
      onClose();
    }, 2200);
  };

  // Dynamic Product details
  let drawerTitle = 'Featured Hybrid Portfolio';
  let drawerSubtitle = 'Scientifically engineered for climate resilience and maximum yield potential.';

  if (productDetail === 'platinum' || productDetail === 'cotton') {
    drawerTitle = 'Veda Seeds Platinum BG II Cotton Hybrid';
    drawerSubtitle = 'PKCH 6836 BG II • Bollgard II® Technology. High boll retention, superior fiber length, and built-in bollworm protection.';
  } else if (productDetail === 'dr_chandra' || productDetail === 'maize') {
    drawerTitle = 'Veda Seeds Dr. Chandra Gold BG II Cotton Hybrid';
    drawerSubtitle = 'PKCH 2043 BG II • Sucking pest tolerance, heavy boll bearing, and premium farmer profitability.';
  } else if (productDetail === 'dharma_gold' || productDetail === 'sorghum') {
    drawerTitle = 'Veda Seeds Dharma Gold BG II Cotton Hybrid';
    drawerSubtitle = 'Premier hybrid variety for diverse soils, uniform boll bursting, and superior ginning outturn.';
  }

  return (
    <>
      {/* Business Enquiry Modal */}
      <div className={`modal-backdrop ${isEnquiryOpen ? 'open' : ''}`} id="enquiryModal" onClick={onClose}>
        <div className="modal-card" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close Modal">&times;</button>
          <div className="modal-header">
            <span className="modal-tag">CONNECT WITH VEDA SEEDS</span>
            <h2 className="modal-title">Business Enquiry</h2>
            <p className="modal-subtitle">Partner with India’s leading seed science innovators.</p>
          </div>
          <form className="enquiry-form" id="enquiryForm" onSubmit={handleEnquirySubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="e.g. Ramesh Patel"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactPhone">Phone Number</label>
                <input
                  type="tel"
                  id="contactPhone"
                  placeholder="+91 98765 43210"
                  value={formData.contactPhone}
                  onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="cropInterest">Seed Interest</label>
              <select
                id="cropInterest"
                value={formData.cropInterest}
                onChange={(e) => setFormData({ ...formData, cropInterest: e.target.value })}
              >
                <option value="cotton">Hybrid Cotton Seeds (Bt Cotton)</option>
                <option value="maize">High-Yield Hybrid Maize</option>
                <option value="sorghum">Drought-Tolerant Sorghum</option>
                <option value="paddy">Advanced Hybrid Paddy</option>
                <option value="dealer">Dealership & Distribution</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="messageText">Your Region & Message</label>
              <textarea
                id="messageText"
                rows="3"
                placeholder="Tell us about your region, farm size, or dealership inquiry..."
                value={formData.messageText}
                onChange={(e) => setFormData({ ...formData, messageText: e.target.value })}
              ></textarea>
            </div>
            <button type="submit" className="btn-primary form-submit-btn">
              <span>Send Enquiry</span>
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <div className="form-success-msg" id="formSuccessMsg" style={{ display: enquirySuccess ? 'block' : 'none' }}>
              Thank you! Our agricultural expert will contact you shortly.
            </div>
          </form>
        </div>
      </div>

      {/* Product Drawer / Detail Modal */}
      <div className={`modal-backdrop ${isProductsOpen ? 'open' : ''}`} id="productsModal" onClick={onClose}>
        <div className="modal-card product-drawer-card" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close Modal">&times;</button>
          <div className="modal-header">
            <span className="modal-tag">VEDA HIGH-PERFORMANCE SEEDS</span>
            <h2 className="modal-title" id="drawerTitle">{drawerTitle}</h2>
            <p className="modal-subtitle" id="drawerSubtitle">{drawerSubtitle}</p>
          </div>
          <div className="products-drawer-grid">
            <div className="drawer-product-card">
              <span className="p-badge">Bt Hybrid</span>
              <h4>Veda Platinum BG II</h4>
              <p>PKCH 6836 BG II • Bollworm resistant, long staple cotton fibers, 28-32 quintals/acre yield potential.</p>
            </div>
            <div className="drawer-product-card">
              <span className="p-badge gold">Gold Plus</span>
              <h4>Veda Dr. Chandra Gold BG II</h4>
              <p>PKCH 2043 BG II • Superior sucking pest tolerance, heavy boll retention, and strong drought stamina.</p>
            </div>
            <div className="drawer-product-card">
              <span className="p-badge">Premier Hybrid</span>
              <h4>Veda Dharma Gold BG II</h4>
              <p>Uniform boll bursting, high ginning percentage, and premium market lint valuation across soils.</p>
            </div>
            <div className="drawer-product-card">
              <span className="p-badge">High Aroma</span>
              <h4>Veda Ratna Hybrid Rice</h4>
              <p>Super-fine aromatic grain, bacterial blight resistance, higher panicle weight and premium market pricing.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
