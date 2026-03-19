const logPrefix = /^\[\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}\]\s\[Output\]\s:\s/;

function useRegex(input) {
    return logPrefix.test(input);
}

$(document).ready(function() {
    function e() {
        $(".generated").remove(), $(".clear").remove();
        
        // Get lines from textarea
        var lines = $("textarea").val().replace(/<script>|<\/script>/g, "").split("\n");

        for (var t = 0; t < lines.length; t++) {
            // If it matches the regex, remove the prefix; otherwise, keep the original line
            let processedLine = useRegex(lines[t]) ? lines[t].replace(logPrefix, "") : lines[t];

            $(".output").append(
                '<div class="generated" id="chatlogOutput">' + processedLine + '</div><div class="clear"></div>'
            );
        }
        
        $(".generated").each(function() {
            var lines = $(this).text().split('\n');
            var formattedLines = [];

            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];

                function replaceColorCodes(str) {
                    str = str.replace(/\{([A-Fa-f0-9]{6})\}/g, function(match, p1) {
                        return '<span style="color: #' + p1 + ';">';
                    }).replace(/\{([A-Fa-f0-9]{6})\}/g, '</span>');

                    // 2. Add this line to handle text between asterisks:
                    // This finds *text*, and wraps it in <span class="me">text</span>
                    if (!str.trim().startsWith('*')) {
                        str = str.replace(/\*(.*?)\*/g, '<span class="me">*$1*</span>');
                    }

                    return str;
                }

                line = replaceColorCodes(line);
                formattedLines.push(line);
            }

            
            var formattedText = formattedLines.join('<br>');

            navigator.userAgent.indexOf("Chrome") != -1 && $(this).append(" ⠀");

            if (formattedText.toLowerCase().startsWith('***')) {
                $(this).addClass("me");
            } 
            else if (formattedText.toLowerCase().startsWith('*')) {
                $(this).addClass("do");
            }

            formattedText.toLowerCase().indexOf(">>") == 0 && $(this).addClass("ame");
            formattedText.toLowerCase().indexOf(" mondja:") >= 0 && $(this).addClass("white");
            formattedText.toLowerCase().indexOf(" suttogja:") >= 0 && $(this).addClass("grey");
            formattedText.toLowerCase().indexOf(" suttogva:") >= 0 && $(this).addClass("grey");
            formattedText.toLowerCase().indexOf(" (telefon):") >= 0 && $(this).addClass("whisper");
            formattedText.toLowerCase().indexOf(" mondja a megafonba:") >= 0 && $(this).addClass("whisper");
            formattedText.toLowerCase().indexOf(")) megaphone:") >= 0 && $(this).addClass("whisper");
            formattedText.toLowerCase().indexOf(" mondja rádióba:") >= 0 && $(this).addClass("radio");

            $(this).html(formattedText); 

            $(this).textContent += "‎  ";
            formattedText || $(this).remove();
            $(".generated:first").css("margin-top", "30px");
            $(".generated:first").css("padding-top", "10px");
            $(".generated:last").css("padding-bottom", "10px");
            $(".generated:last").css("margin-bottom", "30px");
            $(".generated").css(
                "background-color",
                "transparent"
            );
        });

    }
    charName = $("#name").val().toLowerCase();
    var t = $.jStorage.get("lastCharName");
    t || $.jStorage.set("lastCharName", ""),
        $("#name").val($.jStorage.get("lastCharName")),
        $("#name").bind("input propertychange", function() {
            (charName = $("#name").val().toLowerCase()),
            $.jStorage.set("lastCharName", charName),
                e();
        });
    var r = $.jStorage.get("lastFontSize"),
        o = $.jStorage.get("lastLineHeight");
        r || o ? ($(".output").css({
                "font-size": $.jStorage.get("lastFontSize") + "px",
                "line-height": ($.jStorage.get("lastFontSize") - 10) + "px",
            }),
            $("#font-label").text(
                "font size (" + $.jStorage.get("lastFontSize") + "px):"
            )) :
        ($.jStorage.set("lastFontSize", "12"),
        $.jStorage.set("lastLineHeight", ($.jStorage.get("lastFontSize") - 10))),
        $(".output").css({
            "font-size": "12px",
            "line-height": "2px",
        })
        
        $("input[name='font-label']").bind("input propertychange", function() {
            var newSize = parseInt($(this).val());
            if (newSize >= 10 && newSize <= 64) {
                $(".output").css({
                    "font-size": newSize + "px",
                    "line-height": (newSize - 10) + "px",
                });
                $("#font-label").text("font size (" + newSize + "px):");
                $.jStorage.set("lastFontSize", newSize);
                $.jStorage.set("lastLineHeight", newSize);
            } else {}
        });


    $("textarea").bind("input propertychange", function() {
            e();
        }),
        $("#color-picker").spectrum({
            color: "#000",
            showInput: !0,
            preferredFormat: "hex",
            change: function() {
                $.jStorage.set("lastColor", $("#color-picker").spectrum("get").toHex()),
                    $(".generated").css(
                        "background-color",
                        "transparent"
                    );
            },
        }),
        $("#color-picker").spectrum("set", $.jStorage.get("lastColor"));
});
