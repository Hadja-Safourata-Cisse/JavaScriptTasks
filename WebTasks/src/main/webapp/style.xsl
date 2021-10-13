<?xml version="1.0" encoding="utf-8" ?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">

<html>

<header>
<link rel="stylesheet" href="stylesheet.css"/>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> 
<script src="ereignis.js"></script>
</header>
<body>

<table  id="mytable" onclick="color(this)">


<thead>

<tr >
<xsl:for-each select="/Wrs/Header/Columns/C">
<!--<th><xsl:call-template name="uppercase">
<xsl:with-param name="s" select="@caption"/>
</xsl:call-template></th>-->
<th><xsl:value-of select="translate(@caption,'abcdefghijklmnopqrstuvwxyz','ABCDEFGHIJKLMNOPQRSTUVWXYZ')"/></th>
</xsl:for-each>
</tr>

</thead>

<tbody>

<!--<xsl:call-template name="Body"/>-->
<xsl:for-each select="/Wrs/Data/R">
<tr>
<xsl:if test="position() &lt; 11">
<xsl:for-each select="C">
<!--<td><xsl:value-of select="."/></td>-->
<!--<td><xsl:call-template name="lowercase">
<xsl:with-param name="s" select="."/>
</xsl:call-template></td>-->
<td><xsl:value-of select="translate(.,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz')"/></td>
</xsl:for-each>
</xsl:if>
</tr>
</xsl:for-each>

</tbody>

</table>

</body>

</html>

</xsl:template>


<xsl:template name="uppercase">
<xsl:param name="s"/>
<xsl:value-of select="translate($s,'abcdefghijklmnopqrstuvwxyz','ABCDEFGHIJKLMNOPQRSTUVWXYZ')"/>;
</xsl:template>

<xsl:template name="lowercase">
<xsl:param name="s"/>
<xsl:value-of select="translate($s,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz')"/>;


</xsl:template>


</xsl:stylesheet>