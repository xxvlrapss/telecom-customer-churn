# 📞 Telecom Customer Churn Prediction  

![Python](https://img.shields.io/badge/Python-3.9-blue?logo=python)  
![Pandas](https://img.shields.io/badge/Pandas-Data%20Analysis-purple?logo=pandas)  
![Seaborn](https://img.shields.io/badge/Seaborn-Visualization-green?logo=plotly)  
![Matplotlib](https://img.shields.io/badge/Matplotlib-Visualization-orange)  
![Scikit-Learn](https://img.shields.io/badge/ScikitLearn-ML-yellow?logo=scikitlearn)  
![Tableau](https://img.shields.io/badge/Tableau-Dashboard-blue?logo=tableau)  

---

## ✨ Project Summary  
- **English**: This project focuses on predicting **customer churn** in the telecom industry using a synthetic dataset. It includes demographic information, subscription details, service usage, and billing/payment data.  
- **Indonesia**: Proyek ini berfokus pada **prediksi churn pelanggan** di industri telekomunikasi menggunakan dataset sintetis. Dataset mencakup informasi demografi, kontrak, penggunaan layanan, serta pembayaran.  

---

## 📖 Context  
- **English**: The main goal is to predict whether a customer will churn (Yes/No) and identify the key factors driving churn.  
- **Indonesia**: Tujuan utama adalah memprediksi apakah pelanggan akan churn (Ya/Tidak) serta mengidentifikasi faktor utama penyebab churn.  

---

## 🔎 Insights from Data  

- **English**:  
  - Customers with **month-to-month contracts** and **electronic check payments** show higher churn risk.  
  - Customers with **longer tenure** are less likely to churn (loyalty effect).  
  - **Fiber optic internet users** churn more compared to DSL or no internet.  
  - **Value-added services** (TechSupport, OnlineSecurity, DeviceProtection) correlate with lower churn probability.  

- **Indonesia**:  
  - Pelanggan dengan **kontrak bulanan** dan **metode pembayaran electronic check** memiliki risiko churn lebih tinggi.  
  - Pelanggan dengan **tenure lebih lama** cenderung lebih loyal dan kecil kemungkinan churn.  
  - **Pengguna fiber optic** lebih banyak churn dibanding DSL atau tanpa internet.  
  - **Layanan tambahan** (TechSupport, OnlineSecurity, DeviceProtection) menurunkan risiko churn.  

---

## 📊 Modeling Results  

- **English**: Logistic Regression and Random Forest were used as baseline models. Initially, performance was poor due to preprocessing issues. After cleaning (removing IDs, encoding categorical features, handling missing values, scaling numerics), models became usable and ready for further tuning.  
- **Indonesia**: Logistic Regression dan Random Forest digunakan sebagai model baseline. Awalnya performa rendah karena preprocessing yang kurang tepat. Setelah dilakukan cleaning (hapus ID, encoding kategori, tangani missing values, scaling numerik), model lebih baik dan siap dituning lebih lanjut.  

---

## ✅ Recommendations  

- **English**:  
  - **Business**:  
    - Offer discounts/loyalty rewards to month-to-month customers to encourage contract upgrades.  
    - Bundle/promote security & support services (TechSupport, OnlineSecurity).  
    - Investigate dissatisfaction with fiber optic services.  
  - **Modeling**:  
    - Apply **hyperparameter tuning** (GridSearch/RandomizedSearch) for Random Forest & XGBoost/LightGBM.  
    - Use **SMOTE/class weights** for imbalance handling.  
    - Apply **explainable AI (SHAP, LIME)** to interpret feature impact.  

- **Indonesia**:  
  - **Bisnis**:  
    - Tawarkan diskon atau program loyalitas untuk pelanggan kontrak bulanan agar upgrade ke kontrak tahunan.  
    - Promosikan/bundling layanan tambahan (TechSupport, OnlineSecurity).  
    - Investigasi lebih lanjut masalah kepuasan pengguna fiber optic.  
  - **Modeling**:  
    - Terapkan **hyperparameter tuning** pada Random Forest & XGBoost/LightGBM.  
    - Gunakan **SMOTE/class weight** untuk menangani imbalance data churn.  
    - Gunakan **Explainable AI (SHAP, LIME)** untuk interpretasi pengaruh fitur.  

---

## 📌 Final Note  
- **English**: While baseline models did not perform well initially, this project emphasizes the importance of **data cleaning, feature engineering, and preprocessing**. With proper tuning, tree-based models (Random Forest, XGBoost) are expected to achieve **AUC > 0.80**.  
- **Indonesia**: Walaupun baseline model awalnya lemah, proyek ini menekankan pentingnya **data cleaning, feature engineering, dan preprocessing**. Dengan tuning tepat, model berbasis tree (Random Forest, XGBoost) diperkirakan mampu mencapai **AUC > 0.80**.  

---

## 📊 Visualizations  

- **Interactive Dashboard (Tableau)**:  
  👉 [Telecom Churn Dashboard](https://public.tableau.com/app/profile/dimas.prayoga7117/viz/visualisasi_churn_telecom_customer/Dashboard1)  
