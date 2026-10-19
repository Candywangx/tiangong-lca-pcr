---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.heatset-web-offset-saddle-stitched-magazines
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 热固轮转胶版印刷骑马订纸质杂志

## 1. 范围与适用性

本 PCR 覆盖购入涂布纸卷，经常规湿式热固轮转胶印、天然气热风溶剂蒸发与 VOC 热治理、冷却、折页/集帖、钢丝骑马订及裁切制成的纸质杂志。单独印刷的涂布纸质封面采用同一热固路线，自封面则采用已声明内页纸料。免处理热敏铝版为本方法明确选择的印版路线，电力为用户侧 1-35 kV 电网供电。一体式与独立烘干/氧化装置须分别提供计量与捕集图。[eu-sts-bref-2020; pgm-magazines; kodak-sonora-2026; contiweb-ecoset]

PGM 产品原件证明该制造路线真实存在。设备及印版资料为独立示例：本 PCR 不声称 PGM 安装 Contiweb/Kodak、特定燃烧器或采用特定配方。单厂数量、历史虚拟工厂份额、法规 VOC 阈值或宣传节能量均不作默认。

排除仅吸收干燥的冷固报纸、单张非热固/EVA 胶订书籍、凹版、UV/数字/无水印刷、纯胶订/胶装、锁线、硬壳封面、塑料薄膜承印、覆膜/机上涂覆封面及另行单张印刷封面。学科与刊期是适用性/映射限定，不构成独立方法身份。非每日冷固报纸应评估冷固方法，结构匹配的单张/EVA 出版物应评估书籍方法；主控最终去重须核查相邻完成稿。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.heatset-web-offset-saddle-stitched-magazines |
| classification_refs | CPC 3.0 32410; 32420; 32490；narrower；范围及接受裁定以 `classifications/mappings/cpc-3.0-to-pcr.yaml` 及其引用的 ADR 为准 |
| covered_products | 涂布纸热固轮转胶印骑马订杂志，声明自封面或独立纸质封面 |
| excluded_products | 第 1 节列出的其他印刷/装订/承印物路线；不覆盖整个分类叶 |
| representative_product | PGM 热固骑马订杂志产品族；采集实际开本、页数及牌号 |
| production_route | 购入涂布纸；免处理版成像；湿式热固印刷/烘干/治理/冷却；折帖；钢丝骑马订；裁切；实际发生的包装 |
| market_state | 印刷厂门验收完整杂志；运输包装排除在参考净质量之外 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 交付具有已声明实物结构的完整可阅读印刷杂志 |
| How much | 1 kg 验收完整杂志净质量，包含残留油墨、纸质封面、水分及金属钉 |
| How well | 声明成品开本、页序、印刷/色彩验收及订钉完整性；质量单位不声称不同刊物阅读服务等价 |
| How long or cycle | 一个已声明生产周期至厂门验收；阅读寿命、发行及处置仅在独立下游模型报告 |
| reference_flow_link | `finished_magazine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 印刷品 `a07593ed-90ed-4236-b90d-7a41ec14871c` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 刊物/内容类别与刊期；场址/地域/时期；验收净千克和水分；开本/页数；内页及封面纸牌号/定量/纤维组成；自封面或独立封面；湿式热固/印版路线；油墨与润版/清洗配方；烘干燃料/治理/捕集/旁路；实际冷却/硅油装置；钢丝合金/镀层/直径/钉数；包装；供方数量基准兼容 |

缺少限定信息则数据集参考不完整。广义 UUID 身份不能建立供方数据集，也不能接受任何 CPC 映射。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | finished_magazine | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用 cp_mass 的完整杂志验收净千克，排除箱/薄膜与废品。全部清单及协议分母一致。声明产品水分，不以投入纸总量或册数替代验收质量。 |
| `gas_basis` | natural_gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录温压、湿干状态、组成及压缩因子，匹配供方参考 m3；未知兼容性保持未决。不以非参考质量 meanValue 作为密度。 |
| `energy_basis` | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留原表 kWh，按已核验单位组换算 1 kWh = 3.6 MJ；不能把该属性解释为锅炉供热。计量 1-35 kV 交付电力并匹配背景。 |
| `species_basis` | all elementary emissions | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用物种质量及实际接收介质。mg C/Nm3 TVOC 是碳当量，不是溶剂千克；监测流量/浓度的湿干/温压约定须一致。使用 NO/NO2 UUID 前须有物种解析；无解析的 NO2 当量 NOx 合计保持未决。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 购入未印刷涂布纸及完整印版/化学品进入印刷厂门。 |
| starting_condition_role | 制浆/造纸/纸厂涂布在上游；前景为印刷和后加工。 |
| product_classification_scope | 仅符合本路线的实际杂志；32410/32420/32490 须另行裁定非每日内容类别。 |
| recursive_input_rule | 购入同类印刷投入保留实测状态与独立供方；不得对内部书帖或自链接输出再次套用完整 PCR。 |
| upstream_dataset_requirement | 关联路线/牌号兼容的纸、印版、各油墨/添加剂、钢丝、电、气、水、包装和各废物处理；仅身份 UUID 不足。 |
| disclosure | 场址、日期、电表、水分、捕集/治理/旁路、内部循环、外包、排除与实际未决证据。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | p_magazine | 纳入接收、成像、调机、湿式印刷、烘干/氧化、实际冷却/回湿、折页/集帖、钢丝订书、裁切、废物/排放及出厂包装。发行/使用/寿命终结在前景厂门外。 | `eu-sts-bref-2020`; `pgm-magazines`; `kodak-sonora-2026` |
| `boundary_upstream` | purchased paper | 纸背景须实际覆盖已声明牌号的制浆/浆料制备、成形、干燥与纸厂涂布，并披露上游排放/废物/分配。木材加工/胶合板调查不能证明造纸工艺；不把纸厂损纸或纸厂粉尘重复计入印刷厂排放。 | `eu-paper-bref-2015` |
| `boundary_control` | dryer and press | 保留阶段捕集/治理图。分开治理后烟囱、车间逸散和旁路；捕集与破坏效率不同。内部溶剂燃烧/余热回用不是外部燃料或避免排放抵扣。分开燃料与油墨/添加剂碳来源。 | `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `contiweb-ecoset` |
| `boundary_aggregate` | p_magazine | 把实际阶段书帖/封面交接及包装合理聚合为一个前景单元，阶段计量独立。交接实物账两端数量/状态相同。仅 finished_magazine 为外部参考成品输出。 | `pgm-magazines`; `muller-primera` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p_magazine` | 印刷、热固烘干/治理及骑马订杂志 | required | 第 1 节实物路线；可选交换仅在实际发生时纳入 | 一个聚合前景单元；阶段记录独立 | 每 1 kg 参考流 |

实物顺序：纸/印版接收 → 成像及调机 → 湿式胶印 → 烘干/热治理 → 冷却 → 折页/集帖及实际纸质封面 → 金属钉 → 裁切 → 验收/包装。废气回流、冷却水循环及书帖交接保留内部实物记录。随后另行导出环境负荷账，不能替代实物图。

### 过程：杂志制造 (`p_magazine`)

#### 输入

##### 产品流

###### 印刷书写纸（涂布）、包装纸（涂布） (`body_paper`)

购入未印刷涂布内页纸卷；声明纤维组成、纸厂涂布、牌号、定量、水分以及纸卷/纸芯皮重。涂布记录不证明纸张已经印刷。

- 选定流: 印刷书写纸（涂布）、包装纸（涂布） `faaae1a8-97af-4a26-bdb2-198abfc0d8e4`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_material 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `pgm-magazines`; `eu-paper-bref-2015`; `eu-sts-bref-2020`

###### 印刷书写纸（涂布）、包装纸（涂布） (`cover_paper`)

用于单独印刷纸质封面的未印刷涂布纸，采用相同湿式热固路线；单列实测的较高或相同定量。自封面产品不发生本交换，封面纸张计入 body_paper；同一纸料不得重复计数。

- 选定流: 印刷书写纸（涂布）、包装纸（涂布） `faaae1a8-97af-4a26-bdb2-198abfc0d8e4`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_material 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `pgm-magazines`; `eu-paper-bref-2015`

###### 涂层热敏免处理铝制胶印版 (`process_free_plate`)

购入完整涂层印版，厂内热成像。仅经砂目处理的裸铝基材不是此印版。上游须包含制造/涂层。依据产品说明和现场证据，采集成像/启印后印版残留涂层以及实际转入油墨、废物或纸上的部分及去向；不得假定涂层转移份额，所选路线无独立显影槽。

- 选定流: 涂层热敏免处理铝制胶印版
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_material 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `kodak-sonora-2026`

###### 黑色热固油墨 (`ink_black`)

仅用于热固胶印的黑色配方膏状油墨；本色单独计量。广义溶剂型平版油墨身份须以实际热固牌号、连接料、溶剂 CAS/组成和供方参考千克为条件。不得将数据库说明移植为溶剂配方。

- 选定流: 溶剂型平版油墨 `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_material 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `eu-sts-bref-2020`; `epa-offset-ctg-2006`

###### 青色热固油墨 (`ink_cyan`)

仅用于热固胶印的青色配方膏状油墨；本色单独计量。广义溶剂型平版油墨身份须以实际热固牌号、连接料、溶剂 CAS/组成和供方参考千克为条件。不得将数据库说明移植为溶剂配方。

- 选定流: 溶剂型平版油墨 `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_material 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `eu-sts-bref-2020`; `epa-offset-ctg-2006`

###### 品红色热固油墨 (`ink_magenta`)

仅用于热固胶印的品红色配方膏状油墨；本色单独计量。广义溶剂型平版油墨身份须以实际热固牌号、连接料、溶剂 CAS/组成和供方参考千克为条件。不得将数据库说明移植为溶剂配方。

- 选定流: 溶剂型平版油墨 `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_material 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `eu-sts-bref-2020`; `epa-offset-ctg-2006`

###### 黄色热固油墨 (`ink_yellow`)

仅用于热固胶印的黄色配方膏状油墨；本色单独计量。广义溶剂型平版油墨身份须以实际热固牌号、连接料、溶剂 CAS/组成和供方参考千克为条件。不得将数据库说明移植为溶剂配方。

- 选定流: 溶剂型平版油墨 `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_material 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `eu-sts-bref-2020`; `epa-offset-ctg-2006`

###### 自来水 (`process_water`)

购入处理自来水用于润版稀释、清洗以及实际发生的回湿/冷却补水；聚合前分阶段计量。内部循环不是新增投入。保留参考体积/m3，换算时采用实际密度。

- 选定流: 自来水 `3a8411b6-e476-4f98-9d77-0d492661a07f`
- 流属性/单位: 体积 `93a60a56-a3c8-22da-a746-0800200c9a66`; 体积单位组 `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则: 按 cp_water 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water`
- 来源: `eu-sts-bref-2020`; `contiweb-ecoset`

###### 酸性湿式胶印润版液浓缩剂 (`fountain_concentrate`)

一种购入浓缩配方，保留供方稀释说明和实际添加剂化学组成。浓缩剂千克排除另购稀释水和异丙醇；预混产品自带水/异丙醇不得重复计数。普通工作润版液记录不能证明浓缩剂身份。

- 选定流: 酸性湿式胶印润版液浓缩剂
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_material 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `eu-sts-bref-2020`; `epa-offset-ctg-2006`

###### 异丙醇 (`ipa_makeup`)

仅记录厂内加入的另购异丙醇，CAS 67-63-0；保留纯度、浓度以及产品总质量与纯物种质量的区别。无醇印刷不强制给出正数量。

- 选定流: 异丙醇 `a4a75541-e156-4e30-947c-ba067a682afd`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_material 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `eu-sts-bref-2020`; `epa-offset-ctg-2006`

###### 烃基胶印橡皮布及墨辊清洗配方 (`blanket_wash`)

一种实际购入低挥发性清洗混合物；保留 CAS/物种、闪点、水分、橡皮布/墨辊兼容性、挥发和废物去向。喷墨喷头清洗剂不适用。

- 选定流: 烃基胶印橡皮布及墨辊清洗配方
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_material 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `eu-sts-bref-2020`; `epa-offset-ctg-2006`

###### 棉布 (`cotton_wipe`)

购入裁作擦拭布的棉布，不含合成纤维混纺布；记录复用/洗涤周期与新增质量，不把循环使用重复当作采购。选定记录名称及机织棉布同义词支持成品织物；原棉CPC字段与棉纤维说明需要源数据澄清。须核实实际已制造织物、整理及供方，不作原棉纤维或水处理化学品背景。

- 选定流: 棉布 `dd9f2248-bc28-43b9-8d57-d77756754f4d`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_material 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `eu-sts-bref-2020`; `epa-offset-ctg-2006`

###### PDMS基热固冷却辊硅油乳液 (`silicone_emulsion`)

仅在实际冷却辊涂布时记录：采集完整乳液牌号、聚合物 CAS、干聚合物份额、载体水、其他成分和供方数据集。原生聚硅氧烷 UUID 不能代表整份乳液；不规定涂布量。

- 选定流: PDMS基热固冷却辊硅油乳液
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_material 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `contiweb-ecoset`

###### 钢丝 (`stitch_wire`)

铁/非合金钢丝穿过折脊形成骑马订金属钉；采集合金、直径、金属镀层、钉数和实测用丝质量。实际镀层牌号/供方须兼容；不得采用再生钢带配方或仅凭钉数推断质量。

- 选定流: 钢丝 `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_material 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `hohner-wire-stitching`; `muller-primera`

###### 交流电 (`electricity`)

报送工厂接收的 1-35 kV 中压电网平均交流电；阶段电表覆盖成像、印刷、风机、冷却、折页、骑马订、裁切和包装。须核实电压/地域/供方兼容；流属性为净热值，参考 MJ；1 kWh = 3.6 MJ。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 能量单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 按 cp_energy 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源: `eu-sts-bref-2020`; `contiweb-ecoset`

###### 气态天然气 (`natural_gas`)

烘干机及热氧化装置使用的管输压缩气态天然气；尽可能分设备计量，一体式总表只计一次。参考体积/m3，实际温压、湿干约定、组成和压缩因子须匹配供方背景。数据库次级质量系数不是密度。CAS74-82-8及加压甲烷同义词不能证明纯甲烷、甲烷份额或固定压力：中英名称、路线和说明描述消费端压缩管输天然气，未规定这些数值。该歧义须保留供源数据/供方澄清。仅采用实际匹配的气态供应，不覆盖LNG、开采原气、任意燃料混合物或已燃烧过程交换。

- 选定流: 气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: 体积 `93a60a56-a3c8-22da-a746-0800200c9a66`; 体积单位组 `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则: 按 cp_energy 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源: `eu-sts-bref-2020`; `contiweb-ecoset`

###### 瓦楞纸箱 (`shipping_box`)

仅在实际使用瓦楞出厂箱时记录；箱质量与验收杂志净质量分开，关联上游制箱。该UUID限定原生纤维16.6%、再生纤维83.4%。仅实际纤维组成与供方工艺/基准匹配时关联，否则保留纸箱身份缺口，完成数据集前解析兼容记录。源份额仅作兼容条件，不能作为工厂配方或数量默认值。

- 选定流: 瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_material 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `pgm-magazines`

###### 聚乙烯薄膜 (`pe_wrap`)

仅记录实际聚乙烯包装薄膜，CAS 9002-88-4；保留厚度、再生料含量和供方。实物名/CAS/说明指向薄膜，但 CPC29220 字段矛盾；仍需供方澄清。

- 选定流: 聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_material 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `pgm-magazines`

###### 印刷冷却水机补充制冷剂R134a (`r134a_makeup`)

仅当已安装冷水机使用 CAS 811-97-2 时适用；计量充注/回收/维修记录。拒绝船载渔业 R134a 数据集路线，不采用其泄漏率。实际使用其他制冷剂时另建原子行。广义Product/Mass/kg记录明确命名R134a，未限定船舶/使用/充注路线，但未声明CAS、纯度或气液态。实际铭牌、SDS/证书与供方证据须证明R134a/CAS811-97-2、实际供货物态/纯度和千克基准；不得仅因冷水机名称推定安装R134a。

- 选定流: 制冷剂，R134a（四氟乙烷） `210b4222-adda-4097-9e79-f2c9a6c172e4`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_chiller 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_chiller`
- 来源: `eu-sts-bref-2020`

###### 实际配方机器导轨润滑油 (`maintenance_oil`)

已安装印刷/订书设备实际使用的一种供货配方导轨/毛毡润滑油。采集供方/SDS、石油或合成基础油、添加剂、粘度以及实测施用/存量变化，遵循实际设备说明。Hohner第4.1.1节仅为设备示例，不规定行业通用牌号或间隔。蜡/溶剂润滑剂不能替代，不按运行小时臆造用量。

- 选定流: 实际配方机器导轨润滑油
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_material 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `hohner-wire-stitching`; `eu-sts-bref-2020`

###### 实际配方高温机器润滑脂 (`maintenance_grease`)

已安装设备导轨/摩擦点实际使用的一种供货高温润滑脂。采集基础油、稠化剂/添加剂、稠度、供方牌号和称量施用/补充。液体润滑油UUID不能代表整份润滑脂。设备说明支持采集维护耗材，不给出默认配方、用量或通用品牌。

- 选定流: 实际配方高温机器润滑脂
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_material 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `hohner-wire-stitching`; `eu-sts-bref-2020`

#### 输出

##### 产品流

###### 印刷品 (`finished_magazine`)

厂门口验收完整纸质杂志，热固油墨、折页/集帖、金属骑马订及已声明纸质封面。完整身份明确机械印刷材料、纸质承印路线及纸质印刷品同义词。generalComment另有纸张3D原型制造说明，但未将此流限定为增材制造原型。因此条件采用须对应符合已声明装订/厂门限定的实际完整机械印刷纸质杂志；旁述与广义名称均不能证明最终装订、杂志专用背景或邮政服务量。CPC32690错置与混杂主题说明须保留源数据/供方澄清。本 PCR 限定实物产品，不将该 UUID 解释为完整的杂志专用背景数据集。

- 选定流: 印刷品 `a07593ed-90ed-4236-b90d-7a41ec14871c`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: `fixed_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `method_formula`
- 采集协议: `cp_mass`
- 来源: `pgm-magazines`; `eu-sts-bref-2020`

##### 废物流

###### 废纸（未指定） (`paper_trim`)

称量出厂的印刷调机废张和裁切边纸，声明残留油墨/水分并剔除分选钢丝；不含已单列收集粉尘和内部回用。须有实际接收方与处理路线。

- 选定流: 废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_waste 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `eu-sts-bref-2020`; `pgm-magazines`

###### 废纸（未指定） (`collected_paper_dust`)

一种折页/裁切除尘收集并出厂的纤维素纸尘；与 paper_trim 和空气颗粒物分别计量。仅当实际纸/墨组成与接收方支持时使用广义废纸身份；拒绝窑灰。

- 选定流: 废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_waste 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `eu-sts-bref-2020`

###### 铝废料 (`spent_plate`)

送往回收的用后铝印版；声明残留涂层/油墨、合金、接收条件和处理。不把此广义废铝身份用来替代投入的完整印版。

- 选定流: 铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_waste 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `kodak-sonora-2026`; `eu-sts-bref-2020`

###### 废油墨 (`waste_ink`)

收集的印刷残墨，仅在实际发生时包含转移的印版涂层；量化组成，并区分废液、抹布以及废纸上残留油墨。

- 选定流: 废油墨 `468ac05a-00a0-4153-a4ba-4084ef981e4c`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_waste 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `eu-sts-bref-2020`; `epa-offset-ctg-2006`

###### 废酸性胶印润版液 (`spent_fountain`)

废润版槽液单列，保留实际醇、杀菌剂、油墨和水组成；记录场外接收方，不是直接向淡水排放。

- 选定流: 废酸性胶印润版液
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_waste 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `eu-sts-bref-2020`; `epa-offset-ctg-2006`

###### 废烃基橡皮布清洗液 (`spent_wash`)

一种收集清洗废液；记录溶解油墨和水，区别抹布与空气溶剂损失；不采用不相干工艺废水 UUID。

- 选定流: 废烃基橡皮布清洗液
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_waste 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `eu-sts-bref-2020`; `epa-offset-ctg-2006`

###### 含溶剂及油墨的废棉擦拭布 (`soiled_wipe`)

一种含污染棉擦拭布废物流，保留实际残留溶剂/油墨、去向及洗涤/复用状态；残留液体不得再计入 spent_wash。

- 选定流: 含溶剂及油墨的废棉擦拭布
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_waste 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `eu-sts-bref-2020`; `epa-offset-ctg-2006`

###### 未经处理的骑马订钢丝边料 (`wire_trim`)

印刷厂实际钢丝成形边料及不合格订钉，分选后送回收；声明合金/镀层、油墨污染与接收方。广义钢加工废料记录可条件定位此实物子集，其焊接例子和5%估计损失均不是本厂必选工序或数量默认值。晶圆废丝与确实不兼容的机加工废料仍排除。

- 选定流: 钢废料 `a7c886ee-6447-4af3-89ea-ed0828fb115c`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_waste 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `pgm-magazines`; `hohner-wire-stitching`

###### 未清洗聚乙烯包装薄膜边料 (`pe_trim`)

实际发生时记录未清洗薄膜边料、污染及接收方。已清洗机械再生材料位于此厂门下游，不能作此废物交换。

- 选定流: 未清洗聚乙烯包装薄膜边料
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_waste 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `pgm-magazines`; `hohner-wire-stitching`

###### 废PDMS冷却辊乳液 (`spent_silicone`)

仅在实际收集为一种废乳液时记录；保留浓度/去向，区别转移到纸上或排入水流的部分。

- 选定流: 废PDMS冷却辊乳液
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_waste 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `eu-sts-bref-2020`; `contiweb-ecoset`

###### 送处理的冷水机冷却水排污 (`cooling_blowdown`)

仅记录实际冷却循环排污；声明缓蚀剂、污染、接收方和处理。闭路循环不是排放。直接排入环境时需实际污染物的基本流行。

- 选定流: 送处理的冷水机冷却水排污
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_waste 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `eu-sts-bref-2020`; `contiweb-ecoset`

###### 废润滑油 (`spent_maintenance_oil`)

实际设备维护产生并单独收集的一股使用后石油基或合成润滑油。采集污染情况、油物流净质量与接收方，不重复包含移除润滑脂、抹布或其残油。设备内残存、复用油与实测释放分别记录存量/去向。不假定固定废油比例或处理路线。

- 选定流: 废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_waste 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `hohner-wire-stitching`; `eu-sts-bref-2020`

###### 单独收集的废机器润滑脂 (`spent_maintenance_grease`)

实际移除且单独收集的一股废润滑脂，记录基础油、稠化剂、污染与接收方。废液体油身份不能证明整份废脂身份。设备或抹布上残存脂不在此重复计量；无单独收集物流须有适用性记录。

- 选定流: 单独收集的废机器润滑脂
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_waste 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `hohner-wire-stitching`; `eu-sts-bref-2020`

##### 基本流

###### 二氧化碳（化石源） (`co2_fossil`)

厂内氧化的天然气及油墨/清洗溶剂化石碳；区分碳来源和残留/氧化碳。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_emission 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_emission`
- 来源: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### 二氧化碳（生物源） (`co2_biogenic`)

仅记录实际氧化的生物碳，包括有证据的生物溶剂/添加剂；不得因温室气体报告约定删除。成品保留纸碳不是当前二氧化碳排放。

- 选定流: 二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_emission 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_emission`
- 来源: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### 一氧化碳（化石源） (`co_fossil`)

化石投入碳产生的实测一氧化碳；不得把混合来源的一氧化碳总量全部归为化石碳。

- 选定流: 一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_emission 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_emission`
- 来源: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### 一氧化碳（生物源） (`co_biogenic`)

实际发生且来源有证据的生物源一氧化碳；无法分源时，碳来源完整性保持未决。

- 选定流: 一氧化碳（生物源） `8a313a02-e251-11e6-bf01-fe55135034f3`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_emission 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_emission`
- 来源: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### 一氧化氮 (`nitrogen_monoxide`)

仅计 NO 物种质量，CAS 10102-43-9。以 NO2 当量给出的 NOx 监测总量不得直接填为 NO 千克。

- 选定流: 一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_emission 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_emission`
- 来源: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### 二氧化氮 (`nitrogen_dioxide`)

NO2 物种质量，CAS 10102-44-0；合计 NOx 须有物种解析和基准换算，禁止再记重复 NOx 汇总交换。

- 选定流: 二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_emission 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_emission`
- 来源: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### 一氧化二氮 (`nitrous_oxide`)

N2O，CAS 10024-97-2，实测或有独立依据；不属于 NO/NO2 或 NOx 当量。

- 选定流: 一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_emission 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_emission`
- 来源: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### 甲烷 (化石源) (`methane_fossil`)

实际泄漏或燃烧逃逸的未燃化石甲烷；不能把全部有机碳称为甲烷。

- 选定流: 甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_emission 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_emission`
- 来源: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### 二氧化硫 (`sulfur_dioxide`)

SO2 的实际气体/燃料硫基准，CAS 7446-09-5；不是泛化硫氧化物合计。

- 选定流: 二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_emission 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_emission`
- 来源: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### 颗粒物 (PM2.5) (`pm_fine`)

越过最终废气/无组织厂界的 PM2.5；原始记录分别保留实际裁切/折页与燃烧来源。

- 选定流: 颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_emission 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_emission`
- 来源: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### 颗粒物 (PM2.5 - PM10) (`pm_coarse`)

仅 PM2.5-PM10 区间；相同采样基准下由累计 PM10 扣除 PM2.5，不得再加累计 PM10。

- 选定流: 颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_emission 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_emission`
- 来源: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### 颗粒物（> PM10） (`pm_large`)

仅越过厂界的 >PM10，区别已收集粉尘；粒径测量不完整须明确保留。

- 选定流: 颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_emission 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_emission`
- 来源: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### 异丙醇 (`ipa_air`)

实际润版/清洗配方及排放中的异丙醇，CAS 67-63-0；相加互斥的治理后烟囱和车间逸散量。

- 选定流: 异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_emission 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_emission`
- 来源: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### 乙醇 (`ethanol_air`)

仅实际浓缩液或另行记录化学投入含有乙醇 CAS 64-17-5 时适用；氧化时区分化石/生物碳。

- 选定流: 乙醇 `08a91e70-3ddc-11dd-9349-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_emission 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_emission`
- 来源: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### 2-正丁氧基乙醇 (`butoxyethanol_air`)

仅在实际添加剂/清洗物种及排放有证据后记录 2-丁氧基乙醇，CAS 111-76-2；不推定乙二醇醚配方。

- 选定流: 2-正丁氧基乙醇 `fe0acd60-3ddc-11dd-ae31-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_emission 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_emission`
- 来源: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### 甲苯 (`toluene_air`)

仅在分析或供方组成证据确认后记录甲苯，CAS 108-88-3；不假定现代热固油墨含甲苯。

- 选定流: 甲苯 `4d9a8790-3ddd-11dd-9bb5-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_emission 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_emission`
- 来源: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### 庚烷 (`heptane_air`)

仅在实际清洗/油墨排放确认后记录正庚烷，CAS 142-82-5；不替代所有石油烃。

- 选定流: 庚烷 `fe0acd60-3ddc-11dd-a663-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_emission 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_emission`
- 来源: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### 十二烷 (`dodecane_air`)

仅在化学物种解析确认后记录正十二烷，CAS 112-40-3。矿物油/C12-C15 馏分不是纯十二烷。

- 选定流: 十二烷 `fe0acd60-3ddc-11dd-a822-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_emission 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_emission`
- 来源: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### 十六烷 (`hexadecane_air`)

仅在化学物种解析确认后记录正十六烷，CAS 544-76-3；不得把未知 UVCB 残余指定为本物种。

- 选定流: 十六烷 `08a91e70-3ddc-11dd-946f-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_emission 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_emission`
- 来源: `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002`

###### HFC-134a (`r134a_air`)

仅记录实际设备维修质量平衡得出的 HFC-134a 损失，CAS 811-97-2；没有默认泄漏率。平台未提供正式中文 baseName，保留原名 HFC-134a。

- 选定流: HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_chiller 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_chiller`
- 来源: `eu-sts-bref-2020`; `contiweb-ecoset`

###### 水蒸气 (`water_vapour`)

纸/润版水分与燃烧中实际排出厂界的水蒸气；区分供水、产品含水、废液与反应生成水。记录入口空气湿度以及匹配的排气/冷凝时间基准；随燃烧或通风原样通过的环境水分不是前景新产生的水蒸气。完整实物入口/出口水分与人为净释放另账保留，后者包括物料蒸发及反应生成水。场外废液不是水蒸气或直接淡水释放。

- 选定流: 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_water 计量周期数量，除以同期验收净千克；条件性不发生须保留适用性证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water`
- 来源: `eu-sts-bref-2020`; `contiweb-ecoset`

接收与维护完整性：纸卷纸芯/外包材、实际油墨/润版/清洗/润滑脂容器及其皮重、材质和残留物须与净内容物分项采集。退回/补充容器及内部复用保留成对存量/交接记录；实际弃置的每种容器材质、磨损橡皮布/过滤器/部件以及其他包装投入/残余，完成数据集前均须各自增加经核验原子行与接收方。不得编造容器类型、损耗、分配周期或重复计入化学残留。供方背景已包含的包装不得重复计入上游负荷，实际厂门包装存量/废物仍保留实物账。产品与废物组中的油/脂行仅用于实际维护，互不替代。[eu-sts-bref-2020; epa-offset-ctg-2006; hohner-wire-stitching]

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | p_magazine | 先使用实际订单/阶段仪表和可识别材料。单列各周期调机、清洗、启停和废品；剩余共享服务须有因果驱动依据。不简单按销售收入或册数分配全部油墨/热量。 | `eu-sts-bref-2020`; `epa-printing-eiip-2002` |
| `allocation_physical` | physical ledgers | 质量/水/碳/溶剂账保留完整未分配实物输出、存量变化和成对交接。约定分配份额只应用于环境负荷账；不机械地将联产品实物输出乘以该份额。 | `eu-sts-bref-2020`; `epa-printing-eiip-2002` |
| `allocation_scrap` | waste and recovered heat | 声明废料类别与实际处理/接收方。纸、印版或钢丝废物不自动获得替代原生材料抵扣，内部余热无抵扣。系统扩展须由独立下游研究论证且不重复废物处理。 | `eu-sts-bref-2020`; `eu-paper-bref-2015` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `p_magazine` | 参考验收 | foreground_record | 订单、时期、验收册数、验收净千克、水分、封面、钉、箱/膜皮重、废品千克 | 以校准秤称量验收完整杂志或核对可追溯净称重记录。代表性抽册须有实测册数/质量记录，不用通用单册质量。保留批次总量。 | kg | 每周期 | 相同生产周期，含启机/清洗/治理停机 | 已声明印刷厂及实际设备/阶段 | 每 1 kg 参考流 | 校准记录、供方身份/基准、原始总量、不确定性与排除 |
| `cp_material` | `p_magazine` | 材料投入 | foreground_record | 采购/存量/退回千克、订单/颜色、牌号、CAS、配方、干湿基准、涂层、丝长/质量、复用、供方数据集 | 按产品/颜色/阶段用期初+收货-期末-退回，称量废物/残留。保留配方质量，区分有效物种质量。核对纸/封面、版、棉布及钢丝，包含启机。 保留原生单位的未归一化归属生产期总量；仅由 campaign_normalization 除以验收净千克一次。 | kg | 每次收货/订单 | 相同生产周期，含启机/清洗/治理停机 | 已声明印刷厂及实际设备/阶段 | 每 1 kg 参考流 | 校准记录、供方身份/基准、原始总量、不确定性与排除 |
| `cp_energy` | `p_magazine` | 电力与燃料 | foreground_record | 阶段仪表、电压、燃气 m3、温压、湿干、组成、Z、供方 m3、运行/空闲/清洗、一体/独立烘干治理、回用/旁路 | 在一致周期边界读取校准电/气表，尽可能分设备及空闲/调机；一体式共表只计一次。保留燃气供方体积换算依据和 kWh/MJ 换算， 保留原生单位的未归一化归属生产期总量；仅由 campaign_normalization 除以验收净千克一次。 | MJ; m3 | 连续及周期 | 相同生产周期，含启机/清洗/治理停机 | 已声明印刷厂及实际设备/阶段 | 每 1 kg 参考流 | 校准记录、供方身份/基准、原始总量、不确定性与排除 |
| `cp_water` | `p_magazine` | 水平衡 | foreground_record | 投入 m3、润版稀释、清洗、冷却补水/排污、乳液载水、纸投入/输出水分、冷凝、水蒸气、燃烧生成水、存量 | 分项计量新增用水，称量/测定纸/液中实际水。保留液态/水蒸气输出及反应生成水，内部循环不算新增。统一实测密度。 保留原生单位的未归一化归属生产期总量；仅由 campaign_normalization 除以验收净千克一次。 | m3; kg | 周期及监测 | 相同生产周期，含启机/清洗/治理停机 | 已声明印刷厂及实际设备/阶段 | 每 1 kg 参考流 | 校准记录、供方身份/基准、原始总量、不确定性与排除 |
| `cp_waste` | `p_magazine` | 外部残余 | foreground_record | 流标识、净千克、油墨/溶剂/水分/涂层、粉尘箱、分选钢丝、接收方、废物码、处理、容器/皮重、内部回用 | 分别称量出厂流并取得接收/转移记录。区别抹布残留液与废液，以及纸上残墨与单独残墨。收集粉尘不是空气排放。内部回用另记。 保留原生单位的未归一化归属生产期总量；仅由 campaign_normalization 除以验收净千克一次。 | kg | 每批外运/周期 | 相同生产周期，含启机/清洗/治理停机 | 已声明印刷厂及实际设备/阶段 | 每 1 kg 参考流 | 校准记录、供方身份/基准、原始总量、不确定性与排除 |
| `cp_emission` | `p_magazine` | 物种与治理 | foreground_record | 物种/CAS、材料来源份额、烟囱/车间/旁路标识、时间、实际气量、浓度、碳/物种基准、温压、湿干、捕集/破坏、NO/NO2 分率、粒径、残留/废物碳 | 按实际工况采用适当源测试/GC 物种解析与气量测量，或有实测残留/废物/捕集/破坏的闭合物种平衡。评估不确定性及检出限。仅 TVOC 不能给出物种量。各匹配时段采用物种质量浓度乘实测排气体积，或将浓度乘实测体积流率对实际时间积分；已积分体积不得再乘持续时间，湿干、温度、绝对压力和氧校正约定必须匹配；只有浓度或风机额定流量不能给出周期质量。保留启机、旁路和通风入口基线，仅对已识别分子组成进行碳当量到物种的换算。未知物种按不完整保留，完成数据集前增加经核验原子行。 保留原生单位的未归一化归属生产期总量；仅由 campaign_normalization 除以验收净千克一次。 | kg | 代表工况、完整周期覆盖 | 相同生产周期，含启机/清洗/治理停机 | 已声明印刷厂及实际设备/阶段 | 每 1 kg 参考流 | 校准记录、供方身份/基准、原始总量、不确定性与排除 |
| `cp_chiller` | `p_magazine` | 冷却化学品质量 | foreground_record | 设备/制冷剂 CAS、充注、回收、存量、补充、损失、维修日期、实际安装路线 | 核对实际冷水机维修/存量充注平衡。 保留原生单位的未归一化归属生产期总量；仅由 campaign_normalization 除以验收净千克一次。内部充注循环不是重复投入，无泄漏默认。未安装时保留有证据的不适用记录。 | kg | 维修及周期 | 相同生产周期，含启机/清洗/治理停机 | 已声明印刷厂及实际设备/阶段 | 每 1 kg 参考流 | 校准记录、供方身份/基准、原始总量、不确定性与排除 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `campaign_normalization` | 所有清单行 | a_i = B_i / Q_acc；B_i 是声明单位的可归属周期外部交换量，Q_acc 为 cp_mass 验收净千克。未分配实物总量另记；finished_magazine 为 1 千克。 采用同产品、品级、路线、场址及参考状态的单一匹配完整统计期汇总组，保留全部归属启停、整批失败或零产出批次、废品、在制品及返工。先汇总原生单位原始分子总量，再仅除一次严格正值验收净产量；返工产品仅最终验收时计一次。不得平均批次比率或漏去失败活动。整组无验收产出时保留绝对未归一化清单并要求审查。 | B_i; Q_acc; cp_mass | a_i | `epa-printing-eiip-2002` |
| `species_release` | 溶剂物种 | 每个已确认物种 j 核对 input_j + opening_j = retained_j + waste_j + closing_j + destroyed_j + emitted_j。emitted_j 仅含互斥烟囱、车间逸散与旁路；内部捕集/回流气体不是排放。破坏碳保留用于 CO2/CO 分源平衡。 | cp_material; cp_waste; cp_emission | 物种千克，每 1 kg 参考流 | `eu-sts-bref-2020`; `epa-printing-eiip-2002` |
| `carbon_water_reconcile` | p_magazine | 分别维护未分配化石/生物碳账与水账，含纸/封面/墨/钉成品状态、弃料、水分蒸发、燃料/溶剂破坏与实测气体。保留成品/废物碳，不将溶剂破坏称为避免排放。反应生成水与燃烧空气属于实物平衡，不能用假定质量损失闭合。 | cp_material; cp_water; cp_waste; cp_emission | 实物平衡及披露残差 | `eu-sts-bref-2020`; `epa-printing-eiip-2002` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `basis_identity` | all rows | 流 UUID/介质/物种身份与实际供方数量/背景兼容为独立验收检查。未决 UUID 或供方基准须明确保留，不作近似正匹配。 | 供方声明与完整身份记录 |
| `full_period` | p_magazine | 中英、仪表、存量、废物与排放使用相同周期/验收质量；包含废品与旁路时段。不用历史因子替代测量。 | cp_mass; cp_energy; cp_emission |
| `speciation_completeness` | elementary rows | 条件性初始行以外的实际物种须各建一行，并解析相关 CAS/介质。不得假定十二烷/甲苯/异丙醇正排放，也不把未知残余置零。解释未检出、缺物种解析以及 NOx/颗粒物基准缺口。 | cp_emission |
| `balances` | physical and burden accounts | 分开保留成对交接、未分配物料/水/碳总量以及分配后负荷账；记录残差与不确定性，不强制默认配方。 | cp_material; cp_water; cp_emission |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | finished_magazine | 要求恰好一个完整参考成品输出，净质量、水分及实物结构明确。中间书帖与运输包装不能替代；阶段交接两端一致。 | `pgm-magazines` |
| `validate_emissions` | elementary rows | 核验 CAS、碳来源、室外空气接收厂界与物种质量。不得将 NO/NO2 与 NOx 汇总或 N2O 重复；不累加嵌套颗粒总量，不将收集粉尘计入空气排放。缺来源/解析/检出证据为不完整，不能通过。 | `eu-sts-bref-2020`; `epa-offset-ctg-2006` |
| `validate_control` | drying and control | 检查运行、启停和旁路覆盖，核对捕集、破坏、残留与排出溶剂/碳。只有烟囱 TVOC mg C/Nm3 而无物种解析，不能证明 LCI 完整或零逸散。 | `eu-sts-bref-2020`; `epa-offset-ctg-2006`; `epa-printing-eiip-2002` |
| `validate_basis` | all inventory rows | 每项数量、采集聚合与计算使用同一 1 kg 验收净分母。UUID 身份不证明场址数据完整。未知 m3 基准、配方或废物接收方须明确保留，禁止声称数据集完整。 | `epa-printing-eiip-2002` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset；只有场址证据与上游链接经独立核验完整后方可作为 background_dataset |
| downstream_use | 每验收千克的一套已声明厂门前景清单，关联上游供应/处理；可嵌入另行定界生命周期模型 |
| allowed_use | 实物匹配的涂布纸热固钢丝骑马订杂志制造；学科/刊期复用须经适用性审核 |
| excluded_use | 整个 32410/32420/32490 覆盖、阅读服务等价、其他排除路线、仅凭身份 UUID 推断的背景 |
| required_metadata | 参考限定、时期/场址、存量/验收质量、流/属性/供方、捕集/治理/旁路、公式、实物/分配账、来源及实际废物路线 |
| required_quality_disclosure | 未决身份/基准、物种解析覆盖、粒径/NOx 限定、检出限、未测范围及不确定性；工具不推定科学批准 |
| update_trigger | 纸/封面/墨/润版/清洗/版/钢丝牌号变动，烘干/治理/燃料或冷却变化，供方 m3/MJ 基准变化，新物种或包装/废物路线 |

## 11. 数据源

| 来源标识 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `eu-sts-bref-2020` | `official_guidance` | European Commission/JRC, STS BREF 2020, chapter 11 §§11.2,11.3.1,11.3.2.4,11.3.3,11.4.1,11.4.3.2; printed pp344-375, PDF pp383-414. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2021-06/jrc122816_sts_2020_final.pdf | 热固路线、独立溶剂平衡、热治理、废物与燃烧监测；不采用历史虚拟工厂比例或默认实测因子。 |
| `epa-offset-ctg-2006` | `official_guidance` | US EPA, EPA-453/R-06-002, September 2006, §§IV-VI and VIII, printed pp6-14,18-20; PDF pp12-20,24-26. https://www3.epa.gov/airquality/ctg_act/200609_voc_epa453_r-06-002_litho_letterpress_printing.pdf | 独立胶印油墨/润版/清洗与捕集依据；美国指南，不移植法规阈值或效率。 |
| `epa-printing-eiip-2002` | `official_guidance` | US EPA, EIIP Volume II Chapter 15, May 2002, §4.1, PDF pp31-32. https://www.epa.gov/sites/default/files/2015-08/documents/ii15_may2002.pdf | 物料平衡与测量方法选择；没有默认化学配方。 |
| `eu-paper-bref-2015` | `official_guidance` | European Commission/JRC, Production of Pulp, Paper and Board BREF 2015, §§7.1.4 and 7.1.10, printed pp665,670; PDF pp703,708. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | 购入纸张的上游制造、损纸与切纸范围；不是印刷厂排放因子或木材加工证据。 |
| `pgm-magazines` | `handbook` | Poligrafijas grupa Mukusala, Magazines, official snapshot 2026-10-12, Heatset / Saddle stitched magazines / equipment headings. https://www.pgm.lv/en/services/magazines/ | 真实热固骑马订杂志及封面/纸张选择；单一生产者，不作为通用尺寸/定量/印量。 |
| `contiweb-ecoset` | `handbook` | Contiweb, Ecoset/T hot air dryer, official snapshot 2026-10-12, dryer/chill sections. https://www.contiweb.com/web-offset/drying-and-chilling/ecoset | 后燃/冷却、燃气及硅油设备示例；不声称 PGM 安装该设备，不采用宣传节能率或零排放默认。 |
| `kodak-sonora-2026` | `handbook` | Kodak, SONORA Ultra and UltraXR Process Free Plates, brochure K-1228.26.07.13.EN.02, 2026, PDF pp4-5 process elimination and p6 technical table. https://www.kodak.com/content/pdfs/print/KODAK-SONORA-UltraXR-Process-Free-Plates-brochure-EN.pdf | 具有热固适用性的完整免处理版示例；不采用厂商配方或成像能耗默认。 |
| `hohner-wire-stitching` | `handbook` | Hohner, Universal 43/6 S operating instructions, §§1.5,2.4,4.1-4.1.1, PDF/printed pp7,11,39. https://www.hohner-postpress.com/fileadmin/mediathek/schmalheftkoepfe/universal43-6-s/manuals/43-6S_MNL_EN_436009798_436010716.pdf | 钢丝订书用途、硬件及油/脂分项维护；不采用通用丝径、钉数、润滑配方或用量。 |
| `muller-primera` | `handbook` | Muller Martini, Primera PRO, official snapshot 2026-10-12, saddle-stitcher, gathering and three-knife trimmer. https://mullermartini.com/en/product/primera-pro/ | 集帖、订书和裁切；不采用默认速度/得率。 |
