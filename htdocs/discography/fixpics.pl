#!/usr/bin/perl
#
use strict;

foreach my $file (@ARGV) {
	open (FILE,$file) or die "no open $!";
	my @filea = <FILE>;
	close(FILE) or die "no close $!";

	open (FILE,">$file") or die "no open w $!";

	foreach my $line (@filea) {
		chomp($line);
		$line =~ s/[\cM\r]//g;
		$line =~ s/pics\//static\/images\//g;
		print FILE "$line\n";
	}
}
