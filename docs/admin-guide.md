# Admin Guide

## 1. Overview

The admin role is responsible for managing users, overseeing data quality, and configuring the system for the course/project. This guide assumes you already understand the basic user flows from the **User Guide**.

---

## 2. Access and Roles

### 2.1 Admin Accounts

- Admin accounts are created by:
  - [Describe: seeding in the database, environment variable, or a specific login].
- Admins have access to:
  - User management.
  - Global settings / configuration.
  - Viewing all items and reports.

### 2.2 Switching Between User and Admin Views

- After logging in as an admin, use:
  - A dedicated **Admin** link in the navigation, or
  - A toggle / dropdown in the header.
- The admin area is clearly labeled so you don’t confuse it with normal user pages.

---

## 3. Managing Users

### 3.1 Viewing Users

- Go to **Admin → Users**.
- The table shows:
  - Name, email, role (user/admin), status (active/inactive).

### 3.2 Creating Users (if supported)

- Click **New User**.
- Enter basic details (name, email, temporary password if needed).
- Assign a **Role** (`user` or `admin`).
- Click **Save**.

### 3.3 Updating / Disabling Users

- To edit: click the **Edit** icon next to a user.
- To disable: set status to **Inactive** or click **Disable**.
- Inactive users:
  - Cannot log in.
  - Their existing data remains in the system for reporting.

---

## 4. Managing Data / Content

### 4.1 Reviewing Items

- Go to **Admin → [Items/Requests/etc.]**.
- You can:
  - Filter by owner, status, or date.
  - Open individual records for details.

### 4.2 Correcting or Deleting Data

- Use **Edit** to fix obvious data entry errors.
- Use **Delete** only when:
  - The data was created by mistake, or
  - It violates project policies.
- Deletions are [permanent / soft‑deleted]; describe the behavior used in your app.

---

## 5. Configuration and Settings

(Adjust this to what your project actually supports.)

- Go to **Admin → Settings**.
- You can configure:
  - System-wide defaults (e.g., default status, notification thresholds).
  - Feature flags (enable/disable certain modules).
- After changing settings, click **Save**. Some changes may require a page refresh.

---

## 6. Monitoring and Reports

- Go to **Admin → Reports**.
- Common reports:
  - Activity over time.
  - Items by status.
  - Items per user.
- Use export (if implemented) to download CSV or PDF.

---

## 7. Operating Procedures

### 7.1 Daily Checks

- Review new items and critical statuses.
- Check for failed tasks or errors in the admin dashboard.

### 7.2 Before Each Release / Demo

- Verify there are no demo‑blocking bugs in open issues.
- Confirm demo accounts and seed data are present and working.
- Walk through the demo script in a non‑admin account.

---

## 8. Troubleshooting

**Problem:** Users cannot log in.  
**Admin action:**  
- Confirm their account exists and is active.  
- Reset their password or create a new test account.

**Problem:** Data looks wrong or missing.  
**Admin action:**  
- Check filters (status/date/user).  
- Review recent deployments or migrations.  
- Restore from backup if your project supports it.

**Problem:** The app fails to load.  
**Admin action:**  
- Check server logs / hosting dashboard (if applicable).  
- Notify the instructor or technical owner.
