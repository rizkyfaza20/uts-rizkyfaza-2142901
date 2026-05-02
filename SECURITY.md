# 🔐 Security Guidelines

## ⚠️ Important Security Notice

This project contains sensitive API keys and credentials. **Never commit the actual `firebase.js` file to Git!**

---

## 🔑 Sensitive Files (Auto-ignored by Git)

The following files contain sensitive data and are automatically excluded from Git:

```
✅ src/config/firebase.js          - Firebase & Weather API keys
✅ google-services.json             - Google services config
✅ GoogleService-Info.plist         - iOS Google services
✅ firebase.json                    - Firebase CLI config
✅ .env*                            - Environment variables
✅ *apikey*, *secret*, *password*  - Any file with sensitive keywords
```

---

## 🛡️ Best Practices

### 1. Use Template File
We provide `src/config/firebase.template.js` as a safe template that CAN be committed.

### 2. How to Setup Locally

```bash
# 1. Copy the template
cp src/config/firebase.template.js src/config/firebase.js

# 2. Edit firebase.js and add your real credentials
nano src/config/firebase.js

# 3. firebase.js is now auto-ignored by git
# You can verify with:
git status
```

### 3. Never Share These:
- ❌ Firebase API keys
- ❌ Weather API keys  
- ❌ Service account JSON files
- ❌ Database credentials
- ❌ Authentication tokens

---

## 🔒 If You Accidentally Committed Sensitive Data

### Step 1: Remove from Git History
```bash
# Remove file from git history
git filter-branch --force --index-filter \
'git rm --cached --ignore-unmatch src/config/firebase.js' \
--prune-empty --tag-name-filter cat -- --all

# Or use BFG Repo-Cleaner for large repos
```

### Step 2: Rotate Your Keys
1. Go to Firebase Console → Project Settings
2. Generate new API keys
3. Update `src/config/firebase.js` with new keys
4. Delete old keys

### Step 3: Force Push (if already pushed)
```bash
git push origin --force --all
```

⚠️ **Warning:** Force push affects collaborators. Coordinate with your team!

---

## ✅ Security Checklist

Before pushing to GitHub, verify:

- [ ] `src/config/firebase.js` is in `.gitignore`
- [ ] No API keys in commit history
- [ ] Only `firebase.template.js` is committed
- [ ] `google-services.json` is not committed
- [ ] No passwords in code comments
- [ ] No `.env` files committed

---

## 🚨 Report Security Issues

If you discover a security vulnerability:
1. Don't create a public issue
2. Contact the maintainer privately
3. Allow time for patching before disclosure

---

## 📚 Additional Resources

- [GitHub Docs: Removing sensitive data](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)
- [Firebase Security Rules](https://firebase.google.com/docs/rules)
- [OWASP Mobile Security](https://owasp.org/www-project-mobile-security/)

---

**Remember:** When in doubt, DON'T commit it! 🔒