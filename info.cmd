@echo off
echo ========================================
echo    JOYBOR - Frontend ma'lumotlari
echo ========================================
echo.
echo Texnologiyalar:
echo   - Next.js 16.2.7
echo   - React 19.2.4
echo   - TypeScript
echo   - Tailwind CSS v4
echo   - Lucide React (ikonkalar)
echo.
echo Loyiha tuzilishi:
echo.
echo app/
echo   layout.tsx          - Asosiy layout (navbar bilan)
echo   page.tsx            - Bosh sahifa (card ko'rinishi)
echo   globals.css         - Global stillar
echo   map/page.tsx        - Xarita sahifasi
echo   sellers/page.tsx    - Sotuvchilar ro'yxati
echo   sellers/[id]/page.tsx - Sotuvchi elonlari
echo   add/page.tsx        - Elon qo'shish (auth talab qilinadi)
echo   messages/page.tsx   - Habarlar (auth talab qilinadi)
echo   profile/page.tsx    - Profil sahifasi (auth talab qilinadi)
echo.
echo components/
echo   Navbar.tsx          - Pastki navigatsiya paneli
echo   PropertyCard.tsx    - Mulk kartochkasi
echo   FilterBar.tsx       - Filtratsiya paneli
echo   PropertyModal.tsx   - Mulk haqida batafsil modal
echo   MapView.tsx         - Xarita ko'rinishi
echo.
echo lib/
echo   types.ts            - TypeScript turlari
echo   store.ts            - localStorage orqali ma'lumotlar
echo.
echo info.cmd             - Ushbu fayl
echo.
echo Sahifalar:
echo   /            - Bosh sahifa (kartochkalar, filter)
echo   /map         - Xarita (Google Maps, "Menga yaqin" tugmasi)
echo   /sellers     - Top sotuvchilar
echo   /sellers/:id - Sotuvchining elonlari
echo   /add         - Elon qo'shish (kirish talab qilinadi)
echo   /messages    - Habarlar (kirish talab qilinadi)
echo   /profile     - Profil va elonlari (kirish talab qilinadi)
echo.
echo Ishga tushirish:
echo   npm run dev     - Development server
echo   npm run build   - Production build
echo   npm run start   - Production server
echo.
echo Eslatma: Ma'lumotlar localStorage'da saqlanadi.
echo Backend ulanganda store.ts'ni API chaqiruvlariga almashtirish kerak.
echo.
echo ========================================
