<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link https://fr.wordpress.org/support/article/editing-wp-config-php/ Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'koukaki' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'root' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'X{rLMh8*DxRqM#R<Z>wV_+?$*]nTaqDVi*a g@wP97DtbVWBfYU>y~-$Ud&;Ts&t' );
define( 'SECURE_AUTH_KEY',  'M;IoH%&Qu87Uqi-^Lmf- P@#;UD:~>2.EmN09317&XF,,4m;G%rA#cDBR{ ETg`T' );
define( 'LOGGED_IN_KEY',    'dRi+?cWcG9+.]21X=cRxYn%Tay>H):tEcEH7WM[eWW6mTP=aC;Pw]&AN-!1=gK5g' );
define( 'NONCE_KEY',        ',{g2!pVK%hQ=XShK8RE)myqF$^x1?+J%Mc5ddExa:b5hw`5V]JMM&[Z42dGa^==t' );
define( 'AUTH_SALT',        '.uC-g|xdpO3@UFB_dlX+^Y;AUl`HNegGR<yIA/TFq0{wdWs;nsW``qz2RFL;k=<x' );
define( 'SECURE_AUTH_SALT', '=V-$@g5E8i{1VhXmuXs}9@+xqj%?KGKqxdN#y.a.1b4}P<r&r+.wl6&wNmBrmYn@' );
define( 'LOGGED_IN_SALT',   'Dz`P@ChZQ~]nCz!vro,8QjM.S5lS,#&IY 2tK4i&]WW.%c0Z0<A5 VM&wB/*&Z/V' );
define( 'NONCE_SALT',       '%lFDDT$}3)++L%:&.g41UpLm>c@W>(ZOYT4AmK/s%YLSd$8o=f&#_]*TtB@*3}d+' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs et développeuses : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs et développeuses d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur la documentation.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
