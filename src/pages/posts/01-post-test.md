---
layout: ../../layouts/LayoutPost.astro
title: Post Test
description: Pork belly spare ribs short loin strip steak, shoulder pig flank sirloin kevin chislic alcatra.
date: 2008-02-14T20:30:00Z
tags: ["featured", "coffee", "test"]
draft: false
---

Pork belly spare ribs short loin strip steak, shoulder pig flank sirloin kevin chislic alcatra. Porchetta spare ribs meatball turkey alcatra pastrami boudin kevin doner hamburger leberkas tri-tip ground round. Tenderloin pork chop filet mignon ground round boudin frankfurter beef ribs shank corned beef doner kevin cupim kielbasa short ribs. Prosciutto kevin cupim chicken filet mignon porchetta, flank sirloin. Beef ribs beef sirloin drumstick capicola salami meatloaf swine tenderloin. Pork chop doner cupim shankle kielbasa, short ribs ribeye.

```javascript
diff -Naur sources-orig/officespace/interest.go sources-fixed/officespace/interest.go
--- sources-orig/officespace/interest.go        2018-08-10 16:39:11.000000000 -0400
+++ sources-fixed/officespace/interest.go       2018-08-10 16:39:40.000000000 -0400
@@ -11,15 +11,13 @@
   InterestRate float64
 }

+// compute the rounded interest for a transaction
 func computeInterest(acct *Account, t Transaction) float64 {

   interest := t.Amount * t.InterestRate
   roundedInterest := math.Floor(interest*100) / 100.0
   remainingInterest := interest - roundedInterest

-  // a little extra..
-  remainingInterest *= 1000
-
   // Save the remaining interest into an account we control:
   acct.Balance = acct.Balance + remainingInterest
```
