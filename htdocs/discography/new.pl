#!/usr/bin/perl
#
use strict;

foreach my $file (@ARGV) {
	open (FILE,$file) or die "no open $!";
	my @filea = <FILE>;
	close(FILE) or die "no close $!";

	open (FILE,">$file") or die "no open w $!";

	print FILE <<"INFILE";
<?le
	_setg title=Discography -:;
	_inc file=../inc/header.html:;
?>
INFILE

	my $cnt = 0;
	foreach my $line (@filea) {
		chomp($line);
		$line =~ s/[\cM\r]//g;
		if ($cnt < 127) {
			print "noper\n";
			$cnt++;
		} else {
			print FILE "$line\n";
		}
	}
	print FILE '<?le _inc file=../inc/footer.html:; ?>';
}
