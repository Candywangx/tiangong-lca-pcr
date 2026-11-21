---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-and-scrap-of-precious-metal-except-gold-or-of-metal-clad-with-precious-metal-except-gold
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 供精炼的单一来源实心银铜合金板材制造边角料

## 1. 范围与适用性

本PCR仅覆盖一批已知未覆层银铜合金板材冷态机械切割首饰坯件所形成的洁净实心边角料，经真实必要的来源分选、异物移除、称量和验收后，首次放行为指定精炼厂接收的供料。涵盖原板材及联合制造的负荷历史，不缩为外购成品废料包装。Morris and Watson记录sterling银板材供货、板材闸式剪切及其自家洁净板材边角料接收，合金资料将STG-925与含钯sterling分列。这些一手资料支持剪切路线的定性综合，不是实测批次BOM。所选批次必须核实完整Ag/Cu/其他元素分析、状态、厚度、实际冷剪配置、无焊料/覆层及接收方批准。商品名本身不能证明铜含量或原生/再生来源。Brepohl独立支持板材制造废料分类收集、称量及刚性容器。 `mw-plate`; `mw-alloys`; `mw-terms`

排除有意含金或包金料（39331）、含贵金属灰渣（39333）、锉屑、磨抛尘、扫集物、污泥、废液、包覆/电镀料、铂族金属料、混合来源废金属、铸造浇道、使用后首饰，以及精炼、熔炼、酸洗、焚烧、造粒或铸锭作为参考终端。可回用余板不是自动废料产品。供方925实例不是通用成色；不设银含量、回收率、密度、替代信用或零历史负荷默认值。采用不同物理准备或热/化学路线须先补证据并审查范围。 `un-cpc3-2025`; `mw-plate`; `mw-scrap`; `mw-separation`; `brepohl-scrap`

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-and-scrap-of-precious-metal-except-gold-or-of-metal-clad-with-precious-metal-except-gold |
| classification_refs | CPC 3.0:39332 ，已接受所述银铜板边角料的较窄关联，见 docs/adr/2026-11-21-accept-cpc-39332-silver-copper-sheet-offcuts-for-refining.md |
| covered_products | 单一已知未覆层银铜合金板材制造所生洁净实心边角料，按指定精炼供料要求首次放行 |
| excluded_products | 含金料；灰渣；锉屑/扫集物/粉尘/污泥/废液；镀覆/包覆/铂族料；混合来源；铸造浇道；使用后首饰；精炼银锭 |
| representative_product | 供精炼的单一来源实心银铜合金板材制造边角料 |
| production_route | 整份合金板材接收→排样及实际冷切形成坯件和边角料→单一来源分选/真实异物分离→净称量与成分身份确认→精炼供料首次验收 |
| market_state | 未精炼的固态供料；整份合金质量基准，按原批次另计实际后续服务 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 制造形成并首次验收指定精炼供料的实心银铜合金板材边角料 |
| How much | 1 kg首次放行整份边角料净质量 |
| How well | 实际成分、来源、形态及指定接收方验收要求；无默认纯度或回收承诺 |
| How long or cycle | 一个声明制造批次；后续服务使用原Q_c和真实H，无默认服务年限 |
| reference_flow_link | `released_offcuts` |

| Field | Value |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 供精炼的单一来源实心银铜合金板材制造边角料 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 原板材单一来源和批号; 固定一个声明银铜牌号及完整成分分析且无有意金铂族焊料或覆层; 实际制造者及外包剪切方与实物交接/保管和物权记录; 与真实冷剪配置相符的板材状态和厚度; 实心边角料形态及与锉屑灰渣扫集物互斥; 原制造冷切配置及联合坯件门; 真实分选和异物分离; 指定接收方规范及逐批首次验收号; 去皮净整份kg及唯一Q; 原料WIP和FG期初期末及逐交换继承向量; 逐交换分配门状态时期和依据; 场址国家及真实能源供方; 原批次Q_c和实际服务H; 每种包装完整六向池及upstream归属; 每种真实废物物种和去向 |

全部限定信息须进入真实前景包及本参考交换的完整描述。具体参考产品名称不扩大本产品范围。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | cp_release逐唯一首次验收批称整份净质量Q，包装、移除异物和未放行料不入Q；不是含银kg或发运kg。 |
| native_units | 所有清单行 | 各行真实广延属性 | 逐行 | 保留原单位；g转kg一次，kWh转MJ一次。真正速率才积分，累计体积不再乘时长。质量/体积换算需该物质独立实测状态密度，不套水或假设单件质量。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 已识别整份未覆层银铜合金板材接收及其兼容上游历史 |
| starting_condition_role | foreground_starting_condition |
| product_classification_scope | 39332内较窄的实心非金银铜板材边角料；不覆盖本叶全部产品 |
| recursive_input_rule | 同类已准备边角料外购不构成新制造Q；内部回料转物量与历史向量并抵消，外部历史按实际上游归属。退回已放行料保留原批次。 |
| upstream_dataset_requirement | 板材实际成分形态和采矿/回收精炼合金化轧制链；各整份制剂/容器/工具及真实能源运输各一个相容provider |
| disclosure | 真实范围、场址、时期、批次、工序、验收门、失败Q0、全部存量向量、物量/负荷分离、分配、包装、provider和不确定性 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| sb_origin | 完整制造链 | 纳入一批已识别未覆层银铜合金板材接收存储及其上游历史负荷、排样和实际冷态机械切割形成首饰坯件与边角料、实心边角料分选、实际异物清除、称量/分析/身份检验和按指定精炼供料要求首次验收。保留真实公用工程、工具、失败、启停、闲置、清理、取样和返工。外购已准备好的供精炼废料后仅包装不满足本制造边界。采用真实剪切记录；生产商记载闸式剪切板材，不能扩为通用凸凹模路线。 | `mw-scrap`; `brepohl-scrap`; `jrc-ilcd-2010`; `mw-plate`; `mw-alloys`; `mw-terms` |
| sb_upstream | 每项整份外购材料 | 板材采矿/再生原料回收、精炼、合金化、轧制及实际供货运输采用一个相容上游归属。整份合金只采购一次，Ag/Cu分析分数为分析子账，不再次采购。每份外供钢罐或润滑制剂同理；实际厂内配制则逐项记录外购原料、配制能耗与损失。不能因称为废料就给零历史负荷。 | `jrc-ilcd-2010` |
| sb_gate | 制造和成品库存 | 记录实际制造者、外包剪切方、各交接的发收凭证及保管/实益所有权；物权调拨与转售不产生新Q。接收交货验收与法律结算是不同事件，后续精炼金属产出不进入Q。  Q为按指定接收方要求首次放行的整份边角料净质量，排除全部容器和已移除异物，采用唯一放行编号。已放行期末成品已计入Q，不在Q旁再加作制造输出，也不减去其制造负荷。内部放行交接在合并时抵消。重验、发运、退回和返工不产生第二次Q。拒收或未验收边角料作为在制品/废物保留完整历史。 | `mw-scrap`; `brepohl-scrap`; `jrc-ilcd-2010`; `mw-terms` |
| sb_service | 放行后批次 | 实际存储、搬运、包装、发运和获准后续作业另列原批次服务账，使用原Q_c及实测期间H，H绝不是生产分母。不因期末成品而扣除已执行服务。期初/期末成品及退回批次均保留完整历史制造向量。不假定运输距离、设备寿命、存放时长或修复成功。净交付归一化不属于本首次放行基准。 | `jrc-ilcd-2010` |
| sb_stocks | 每项交换和批次 | 按原始广延单位保留期初/期末原料、在制品、未使用/未归属投入及逐交换继承负荷向量。已作存量修正的消耗不能再次修正。保留全部失败和零产出事件；Q=0保留负荷而不出单位结果。内部再用同时转移物量和历史向量，抵消内部交换并保留真实再加工能耗/损失。 | `jrc-ilcd-2010` |
| sb_physical | 切割、准备、成品及合并门 | 未分配的完整总物量V与归属负荷A分开。对相同门独立闭合总质量、Ag/Cu及每种相关其他元素；一个残差不能解两个未知。整份合金、粉尘和混合出口各计一次，成分分析仅分区不重复相加。依独立证据区分金属颗粒、真实氧化物/离子和游离/吸附/反应水。PM、COD和总金属指标不是分子质量。X_in/X_out仅可移除同侧已证明完全相同的OTHER项，不能移除存量或对侧交换。 | `jrc-ilcd-2010` |
| sb_packs | 每种包装池 | 对每种钢罐及每项真实新增包装：期初空包装+附着在制品+附着成品+周转库存+外购P+首次非购买外部接收I+外部退回接收ER=对应期末库存+随总实物发运外出S+对外退回EO+废弃W。独立计量的材料/水变化另列，内部再用抵消。S跟随总实物发运，不跟净Q或经济份额。每项流入仅一个上游归属。多来源池共用一个混合出口时，其互斥分区之和等于一个完整出口和一个provider，不能把分区再加到整份出口。  I涵盖全部首次非购买外部接收：随来料、另行借入或无偿调拨，无论供方清单是否覆盖。ER仅限可追到同一件先前从本站外发钢罐的真实退回，否则首次接收归I而非ER。所有实物接收均有归属；实际采购、运输和服务负荷分别标记且只计一次，包括借用方承担运费。供方覆盖缺失是待查数据，不是零。EO与S为互斥总外发方向，归还借入罐不得同时计作随货外发罐。 | `jrc-ilcd-2010` |
| sb_atoms | 真实交换覆盖 | 每种实际新增材料、化学制剂、能源载体、燃料、包装组件、维护件、废物出口和排放物种须有独立具名原子卡及真实条件，缺数不等于零。干态路线不假设热洗、蒸汽或锅炉。实际存在外供蒸汽/冷却载体时，按同一provider约定独立记录完整供回水kg、真实状态/焓和MJ；凝结水返供方为Product返回。不同路线须有证据并审查范围。 | `jrc-ilcd-2010` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| cut | 原板材接收与冷切割 | required | 仅真实作业；全部发生负荷保留 | foreground | per reference flow |
| prepare | 来源分选与供料首次验收 | required | 仅真实作业；全部发生负荷保留 | foreground | per reference flow |
| service | 真实原批次放行后服务 | conditional | 仅真实作业；全部发生负荷保留 | foreground | per reference flow |
| pack | 刚性钢罐池与实际方向 | conditional | 仅真实作业；全部发生负荷保留 | foreground | per reference flow |

卡片数量及协议aggregation基准标签仅引用calc_quotient的一次结果，不再除产量；采集方法保留未除原始记录。卡片描述是可消费规则的一部分。内部边角料/WIP/放行交接仅为配对台账，在合并时抵消；以下物量核对行不能生成额外provider或信用。未绑定UUID仍保留单一具体物理身份，实际采用前核对供方/形态/路线/属性。

### 过程：原板材接收与冷切割 (`cut`)

#### 输入

##### 产品流

###### 外供未覆层银铜合金板材 (`alloy_sheet`)

记录整份真实板材一次，含供方、合金分析、状态、厚度、批次及上游采矿/回收/精炼/合金化/轧制链。不设通用925成分，不另购纯Ag或Cu分析子账。该具体原料UUID缺口与原形成证据分开追踪，纯银箔不能代表合金板材。 流UUID未绑定，须按此单一物理身份补核，不表示不存在。 属性支持单位组`93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位kg。

- 选定流：外供未覆层银铜合金板材
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用已计算的唯一结果x_i；服务使用同一次原批次结果s_i_c，原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`mw-plate`; `jrc-ilcd-2010`

###### 淬硬钢剪切刀片 (`cutting_tool`)

仅记录所述冷切割设备真实更换刀片。整份外供刀片、安装/未用库存、已消耗服务和真实报废分开记录，不假定每kg消耗一整台剪机或刀片。实际采用其他刀具须独立加卡。 流UUID未绑定，须按此单一物理身份补核，不表示不存在。 属性支持单位组`93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位kg。

- 选定流：淬硬钢剪切刀片
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用已计算的唯一结果x_i；服务使用同一次原批次结果s_i_c，原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`mw-plate`; `jrc-ilcd-2010`

###### 外供矿物油切割润滑制剂 (`cutting_lubricant`)

仅在真实使用此制剂且与接收方洁净供料要求相容时纳入，否则证明不存在，不以其他配方替代本行。整份外供制剂一次，成分/载体仅分析子账；厂内配制逐项记录采购与实际配制损失。附着油、清理和排放须真实证据并另加卡，不假设溶剂。 流UUID未绑定，须按此单一物理身份补核，不表示不存在。 属性支持单位组`93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位kg。

- 选定流：外供矿物油切割润滑制剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用已计算的唯一结果x_i；服务使用同一次原批次结果s_i_c，原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`jrc-ilcd-2010`

###### 计量交流电 (`cut_electricity`)

采集真实作业及归属场址支持用电，包括失败、启停、闲置和清理。计量采用技术能量属性`f6811440-ee37-11de-8a39-0800200c9a66`，其能量单位组为`93a60a57-a3c8-11da-a746-0800200c9a66`、MJ，实测kWh仅乘3.6一次。实际供方流UUID未决，绑定前独立核实国家、电压、供电组合、原生参考属性及换算链；同一能量单位组不能证明净热值，不能用未核实的中国低压消费组合替代实际场址。

- 选定流：计量交流电
- 流属性/单位：Energy `f6811440-ee37-11de-8a39-0800200c9a66` / MJ
- 数量规则：引用已计算的唯一结果x_i；服务使用同一次原批次结果s_i_c，原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy_cut`
- 来源：`jrc-ilcd-2010`

#### 输出

##### 产品流

###### 冷切银铜合金首饰坯件 (`blank_output`)

记录完整坯件金属净输出总量V及其独立下游门/状态。此为联合输出物量核对行，不是Q，也不是完整佩戴成品。其分配负荷向量另存，不能作为废料抵扣信用。整份合金与Ag/Cu分析不相加。 流UUID未绑定，须按此单一物理身份补核，不表示不存在。 属性支持单位组`93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位kg。

- 选定流：冷切银铜合金首饰坯件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用已计算的唯一结果v_i；服务使用同一次原批次结果s_i_c，原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`mw-plate`; `jrc-ilcd-2010`

##### 废物流

###### 拒收银铜合金板材边角料 (`rejected_cuttings`)

仅记录未验收边角料实际对外处置/处理，不把仍可用在制品或内部重切当废弃。记录真实完整出口质量、成分、去向和唯一处理归属，历史与处理负荷各保留一次。 流UUID未绑定，须按此单一物理身份补核，不表示不存在。 属性支持单位组`93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位kg。

- 选定流：拒收银铜合金板材边角料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用已计算的唯一结果x_i；服务使用同一次原批次结果s_i_c，原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste_cut`
- 来源：`brepohl-scrap`; `jrc-ilcd-2010`

### 过程：来源分选与供料首次验收 (`prepare`)

#### 输入

##### 产品流

###### 计量交流电 (`prepare_electricity`)

采集真实作业及归属场址支持用电，包括失败、启停、闲置和清理。计量采用技术能量属性`f6811440-ee37-11de-8a39-0800200c9a66`，其能量单位组为`93a60a57-a3c8-11da-a746-0800200c9a66`、MJ，实测kWh仅乘3.6一次。实际供方流UUID未决，绑定前独立核实国家、电压、供电组合、原生参考属性及换算链；同一能量单位组不能证明净热值，不能用未核实的中国低压消费组合替代实际场址。

- 选定流：计量交流电
- 流属性/单位：Energy `f6811440-ee37-11de-8a39-0800200c9a66` / MJ
- 数量规则：引用已计算的唯一结果x_i；服务使用同一次原批次结果s_i_c，原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy_prepare`
- 来源：`jrc-ilcd-2010`

#### 输出

##### 产品流

###### 供精炼的单一来源实心银铜合金板材制造边角料 (`released_offcuts`)

此唯一未绑定产品交换是单一声明牌号和来源的洁净实心未覆层银铜板材制造边角料，首次按指定精炼供料要求验收。核实完整成分、实心形态、冷剪来源、无有意金/铂族金属/焊料/覆层及接收方批准。可回用余板不属于此废料产品。Q为整份边角料净kg，不是所含Ag、发运量或回收银。广义工业废金属或标为已制造成品的记录不能证明此批次身份及物权状态。原生身份和供方相容性验证前，产品UUID保持未决。Mass使用质量单位组`93a60a57-a4c8-11da-a746-0800200c9a66`、kg。

- 选定流：供精炼的单一来源实心银铜合金板材制造边角料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_release`
- 来源：`mw-scrap`; `mw-separation`; `brepohl-scrap`

##### 废物流

###### 分离出的钢质异物碎片 (`steel_fragments`)

放行前从边角料中真实分离并独立称量的钢质工具碎片，不假定数量。如有附着Ag/Cu须独立分析并记录去向，不再虚设回收银共产品信用。 流UUID未绑定，须按此单一物理身份补核，不表示不存在。 属性支持单位组`93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位kg。

- 选定流：分离出的钢质异物碎片
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用已计算的唯一结果x_i；服务使用同一次原批次结果s_i_c，原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste_prepare`
- 来源：`mw-separation`; `brepohl-scrap`

##### 基本流

###### 银 (`ag_air`)

仅在独立实测Ag向空气排放时纳入，以元素质量表示并保留真实物种/颗粒结构与出口元数据。原生CAS为金属形态（7440-22-4）；注释也代表离子，若所用LCIA区分具体物种则优先采用其专属流。宽泛同义词不能证明测得离子、氧化物或纳米颗粒。原生介质为空气未指定排放；已知区域空气子介质需另核专属流。不是金属投入、捕集尘、水排放、整份尘质量或自动假定的未测排放。不设排放因子。  属性支持单位组`93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位kg。

- 选定流：银 `fe0acd60-3ddc-11dd-abf6-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用已计算的唯一结果x_i；服务使用同一次原批次结果s_i_c，原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`jrc-ilcd-2010`

###### 铜 (`cu_air`)

仅在独立实测Cu向空气排放时纳入，以元素质量表示并保留真实物种/颗粒结构与出口元数据。原生CAS为金属形态（7440-50-8）；注释也代表离子，若所用LCIA区分具体物种则优先采用其专属流。宽泛同义词不能证明测得离子、氧化物或纳米颗粒。原生介质为空气未指定排放；已知区域空气子介质需另核专属流。不是金属投入、捕集尘、水排放、整份尘质量或自动假定的未测排放。不设排放因子。  属性支持单位组`93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位kg。

- 选定流：铜 `fe0acd60-3ddc-11dd-a7a0-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用已计算的唯一结果x_i；服务使用同一次原批次结果s_i_c，原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`jrc-ilcd-2010`

### 过程：真实原批次放行后服务 (`service`)

#### 输入

##### 产品流

###### 计量交流电 (`service_electricity`)

采集原批次真实服务用电，保留原Q_c及实际H，不形成新产量。实际供方流UUID未决；计量采用技术能量属性`f6811440-ee37-11de-8a39-0800200c9a66`及能量单位组`93a60a57-a3c8-11da-a746-0800200c9a66`、MJ，实测kWh仅乘3.6一次。绑定前独立核实供方原生属性、单位链、电压、组合和地域，不由单位组推定净热值。

- 选定流：计量交流电
- 流属性/单位：Energy `f6811440-ee37-11de-8a39-0800200c9a66` / MJ
- 数量规则：引用已计算的唯一结果x_i；服务使用同一次原批次结果s_i_c，原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`jrc-ilcd-2010`

###### 柴油卡车公路货运服务 (`road_freight`)

仅纳入实际外包公路货运及合同内真实空驶/返程。采集货物毛质量、距离、载荷限制、车辆/供方与分配门；用kg*km服务，不再采购provider柴油。其他真实运输方式须另加卡。运输包含真实包装毛质量，但包装不进入产品Q。本服务未绑定UUID/单位支持。 流UUID未绑定，须按此单一物理身份补核，不表示不存在。

- 选定流：柴油卡车公路货运服务
- 流属性/单位：Mass*distance / kg*km
- 数量规则：引用已计算的唯一结果x_i；服务使用同一次原批次结果s_i_c，原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`jrc-ilcd-2010`

### 过程：刚性钢罐池与实际方向 (`pack`)

#### 输入

##### 产品流

###### 外购钢制运输罐 (`can_purchase`)

一件完整刚性钢制运输罐（含随供罐盖和覆层）按池/批次识别的真实P方向，不再采购其构件。真实成分/内衬、皮重和内容物分开采集。此为完整总物量V行，不得以经济分配份额代替。同一交换真实上游/处理负荷仅一次进入标记的A向量，此物量账不增设LCIA provider。内部再用抵消，包装不入产品Q。实际新增标签/封口/衬垫各需独立完整池卡。 流UUID未绑定，须按此单一物理身份补核，不表示不存在。 属性支持单位组`93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位kg。

- 选定流：外购钢制运输罐
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用已计算的唯一结果v_i；服务使用同一次原批次结果s_i_c，原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`brepohl-scrap`; `jrc-ilcd-2010`

###### 首次非购买外部接收钢制运输罐 (`can_included`)

一件完整刚性钢制运输罐（含随供罐盖和覆层）按池/批次识别的真实I方向，不再采购其构件。真实成分/内衬、皮重和内容物分开采集。此为完整总物量V行，不得以经济分配份额代替。同一交换真实上游/处理负荷仅一次进入标记的A向量，此物量账不增设LCIA provider。内部再用抵消，包装不入产品Q。实际新增标签/封口/衬垫各需独立完整池卡。 流UUID未绑定，须按此单一物理身份补核，不表示不存在。 属性支持单位组`93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位kg。

 I涵盖全部首次非购买外部接收：随来料、另行借入或无偿调拨，无论供方清单是否覆盖。ER仅限可追到同一件先前从本站外发钢罐的真实退回，否则首次接收归I而非ER。所有实物接收均有归属；实际采购、运输和服务负荷分别标记且只计一次，包括借用方承担运费。供方覆盖缺失是待查数据，不是零。EO与S为互斥总外发方向，归还借入罐不得同时计作随货外发罐。

- 选定流：首次非购买外部接收钢制运输罐
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用已计算的唯一结果v_i；服务使用同一次原批次结果s_i_c，原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`brepohl-scrap`; `jrc-ilcd-2010`

###### 外部退回接收钢制运输罐 (`can_return_received`)

一件完整刚性钢制运输罐（含随供罐盖和覆层）按池/批次识别的真实ER方向，不再采购其构件。真实成分/内衬、皮重和内容物分开采集。此为完整总物量V行，不得以经济分配份额代替。同一交换真实上游/处理负荷仅一次进入标记的A向量，此物量账不增设LCIA provider。内部再用抵消，包装不入产品Q。实际新增标签/封口/衬垫各需独立完整池卡。 流UUID未绑定，须按此单一物理身份补核，不表示不存在。 属性支持单位组`93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位kg。

 I涵盖全部首次非购买外部接收：随来料、另行借入或无偿调拨，无论供方清单是否覆盖。ER仅限可追到同一件先前从本站外发钢罐的真实退回，否则首次接收归I而非ER。所有实物接收均有归属；实际采购、运输和服务负荷分别标记且只计一次，包括借用方承担运费。供方覆盖缺失是待查数据，不是零。EO与S为互斥总外发方向，归还借入罐不得同时计作随货外发罐。

- 选定流：外部退回接收钢制运输罐
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用已计算的唯一结果v_i；服务使用同一次原批次结果s_i_c，原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`brepohl-scrap`; `jrc-ilcd-2010`

#### 输出

##### 产品流

###### 随总实物发运外出的钢制运输罐 (`can_dispatch`)

一件完整刚性钢制运输罐（含随供罐盖和覆层）按池/批次识别的真实S方向，不再采购其构件。真实成分/内衬、皮重和内容物分开采集。此为完整总物量V行，不得以经济分配份额代替。同一交换真实上游/处理负荷仅一次进入标记的A向量，此物量账不增设LCIA provider。内部再用抵消，包装不入产品Q。实际新增标签/封口/衬垫各需独立完整池卡。 流UUID未绑定，须按此单一物理身份补核，不表示不存在。 属性支持单位组`93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位kg。

- 选定流：随总实物发运外出的钢制运输罐
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用已计算的唯一结果v_i；服务使用同一次原批次结果s_i_c，原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`brepohl-scrap`; `jrc-ilcd-2010`

###### 对外退回钢制运输罐 (`can_return_sent`)

一件完整刚性钢制运输罐（含随供罐盖和覆层）按池/批次识别的真实EO方向，不再采购其构件。真实成分/内衬、皮重和内容物分开采集。此为完整总物量V行，不得以经济分配份额代替。同一交换真实上游/处理负荷仅一次进入标记的A向量，此物量账不增设LCIA provider。内部再用抵消，包装不入产品Q。实际新增标签/封口/衬垫各需独立完整池卡。 流UUID未绑定，须按此单一物理身份补核，不表示不存在。 属性支持单位组`93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位kg。

- 选定流：对外退回钢制运输罐
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用已计算的唯一结果v_i；服务使用同一次原批次结果s_i_c，原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`brepohl-scrap`; `jrc-ilcd-2010`

##### 废物流

###### 废弃钢制运输罐 (`can_waste`)

一件完整刚性钢制运输罐（含随供罐盖和覆层）按池/批次识别的真实W方向，不再采购其构件。真实成分/内衬、皮重和内容物分开采集。此为完整总物量V行，不得以经济分配份额代替。同一交换真实上游/处理负荷仅一次进入标记的A向量，此物量账不增设LCIA provider。内部再用抵消，包装不入产品Q。实际新增标签/封口/衬垫各需独立完整池卡。 流UUID未绑定，须按此单一物理身份补核，不表示不存在。 属性支持单位组`93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位kg。

- 选定流：废弃钢制运输罐
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用已计算的唯一结果v_i；服务使用同一次原批次结果s_i_c，原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`brepohl-scrap`; `jrc-ilcd-2010`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| al_framework | 全部负荷归属 | 仅在有依据需分配的归因建模中采用。先识别真实联合切割门、共生坯件与边角料状态、同期数据及完整投入/损失；分类、货币价值或精炼结算不得变成零历史截断或回收信用。 | `jrc-ilcd-2010` |
| al_subdivide | 专属操作和可识别交换 | 先细分专属边角料分选、检验和搬运；有过程记录依据时虚拟细分专属交换。只服务坯件的后续精加工归坯件，不能硬塞给废料产品。物料总平衡不作分配。 | `jrc-ilcd-2010` |
| al_causality | 每项剩余共用交换 | 对每项剩余共用交换独立识别并量化决定性物理因果，包括实际材料含量及适用的服务限制因素/时间。边角料中体现的板材保留对应上游向量；选份额前先处理损失。切割几何不能证明板材、刀具、照明和存储适用同一分配。不得任意在质量与价格间选择。 | `jrc-ilcd-2010` |
| al_residual | 真正未解决的共用负荷 | 仅细分和决定性物理因果仍不能解决的剩余流，才可按同一公共过程门、真实物料状态和同期市场价值作有依据的经济分配。可比门价值须排除后续精炼、运输和准备，披露价格、不确定性及敏感性。不设固定比例、自动经济分配，不以精炼银价值当废料门价格。逐原始交换核对份额和守恒。 | `jrc-ilcd-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | cut | 整份板材/坯件/实际润滑制剂 | 供方和事件记录 | 批次; 供方; 形态; 完整成分; 到货质量; 期初/末原料与在制品; 整份配方; 坯件总量; 切割方法和设备; 全部失败/返工事件; 继承交换向量 | 经校准秤分别称量整份材料及各实物输出，核对批次领退料和实际冷切割记录。分析子账不重复采购整份材料。 保留未除原始总量与继承向量，存量修正一次，此处不除Q。 | kg | 每批次与事件 | 完整声明批次含Q0 | 实际接收切割及外包门 | 每参考流 | 称量证书; 供方证书; 批次质量账; 工具配置 |
| cp_energy_cut | cut | 分作业电力 | 仪表和供方记录 | 仪表编号; 期初/末读数; kWh或累计MJ; 真正功率速率时戳; 国家; 电压; 供电组合; 作业及全部失败/闲置/清理负荷; 分配 | 读取作业分表与总表，核对互斥作业而不再次叠加总表。只积分真正速率，已累计读数不再乘时间。 保留未除的已换算能量，kWh转MJ一次，逐交换论证归属后交calc_quotient。 | MJ | 每作业与报告期 | 完整对应批次 | 真实仪表及同一场址 | 每参考流 | 仪表校准; 账单; 作业桥接; 分配记录 |
| cp_energy_prepare | prepare | 分作业电力 | 仪表和供方记录 | 仪表编号; 期初/末读数; kWh或累计MJ; 真正功率速率时戳; 国家; 电压; 供电组合; 作业及全部失败/闲置/清理负荷; 分配 | 读取作业分表与总表，核对互斥作业而不再次叠加总表。只积分真正速率，已累计读数不再乘时间。 保留未除的已换算能量，kWh转MJ一次，逐交换论证归属后交calc_quotient。 | MJ | 每作业与报告期 | 完整对应批次 | 真实仪表及同一场址 | 每参考流 | 仪表校准; 账单; 作业桥接; 分配记录 |
| cp_assets | cut | 剪切刀片服务及实物库存 | 维护记录 | 设备与刀片身份; 购入; 安装/未用期初/末; 真实服务小时; 修理; 报废; 继承负荷; 供方 | 真实刀片采购与已完成服务分别记录，依有依据的实际能力/用量和库存历史推导服务消耗，不设固定寿命。 未除原始实物库存与负荷服务分配分开保留。 | kg; h | 每购入修理服务和报废 | 实际观测期 | 真实切割设备 | 每参考流 | 维护服务日志; 采购记录 |
| cp_release | prepare | Q首次验收实心边角料 | 放行和分析记录 | 唯一放行号; 原板材批次; 分析; 无有意金/铂族金属/覆层; 实心形态; 移除异物质量; 批次净kg; 接收规范和验收; 制造者及外包剪切方; 交接/保管与物权记录; 未放行期初/末在制品; 放行时刻 | 逐唯一验收批次经校准去皮称净重，将来源成分绑定实际精炼供料批准。provider要求采用真实记录，不由公开服务页推定。 唯一首次放行整份净质量之和为Q，期末已放行成品已在Q内，不用Ag当量分母。 | kg | 每首次放行批次 | 声明首次放行批次 | 真实准备门和具名接收方 | 每参考流 | 秤证书; 放行账; 接收规范; 代表性分析 |
| cp_waste_cut | cut | 每种拒收流和钢质异物 | 称量与去向记录 | 流编号; 整份质量; 干湿基准; 成分/物种; 去向; 处理provider; 继承向量; 样品; 内部循环 | 逐真实独立出口称量并独立测定相关元素，WIP/内部循环与对外废物分开追踪。 保留未除的完整出口总量；来源分区合计一个混合出口而不重复叠加。 | kg | 每真实出口 | 完整批次含失败和Q0 | 真实切割和准备门 | 每参考流 | 废物凭证; 分析; 库存核对 |
| cp_waste_prepare | prepare | 每种拒收流和钢质异物 | 称量与去向记录 | 流编号; 整份质量; 干湿基准; 成分/物种; 去向; 处理provider; 继承向量; 样品; 内部循环 | 逐真实独立出口称量并独立测定相关元素，WIP/内部循环与对外废物分开追踪。 保留未除的完整出口总量；来源分区合计一个混合出口而不重复叠加。 | kg | 每真实出口 | 完整批次含失败和Q0 | 真实切割和准备门 | 每参考流 | 废物凭证; 分析; 库存核对 |
| cp_service | service | 批次存储搬运货运 | 事件与物流记录 | 原批次; Q_c; 观测H; 完整期初/末成品及向量; 总发运; 实际退回; 已执行能量/服务; 货运kg和km; 载荷限制; provider | 按实测作业及真实provider/载荷基准将放行后服务归原批次，不以H作新产量。 服务原始总量不除，保留原Q_c作唯一商；不为期末库存扣除已执行服务。 | MJ; kg*km; kg; h | 每真实事件 | 各原批次观测H | 真实仓储物流门 | 每参考流 | 发运退回桥接; 原放行编号; 服务仪表; 货运合同 |
| cp_packaging | pack | 钢罐完整池 | 库存与事件记录 | 钢罐身份和成分; 皮重; 期初/末空包装/附着WIP/附着FG/周转库存; P; I; ER; S; EO; W; 实际自然质量变化; 上游归属 | 每个完整罐池与各真实方向独立称量，S绑定总发运，内容物分开。额外标签/衬垫用各自池。 保留未除原始六向事件和库存，内部再用抵消，完整物量V与标记负荷A分开。  I涵盖全部首次非购买外部接收：随来料、另行借入或无偿调拨，无论供方清单是否覆盖。ER仅限可追到同一件先前从本站外发钢罐的真实退回，否则首次接收归I而非ER。所有实物接收均有归属；实际采购、运输和服务负荷分别标记且只计一次，包括借用方承担运费。供方覆盖缺失是待查数据，不是零。EO与S为互斥总外发方向，归还借入罐不得同时计作随货外发罐。 | kg | 每池事件与盘点 | 完整制造及真实服务期间 | 真实罐存储准备发运门 | 每参考流 | 池平衡; 采购/退回/发运/废弃记录; 皮重证据 |
| cp_emission | prepare | 每种真实空气物种 | 采样与物种记录 | 出口介质; 速率或累计采样体积; 必需时独立采样气状态与密度; 物种及颗粒结构; Ag或Cu元素含量; 仅真速率使用时长; 不确定性; 实测控制效率 | 计量真实独立物种或有依据的元素基排放，不能由总金属或PM残差推氧化物/离子质量，累计体积不再乘时间。仅介质依据充分时用空气未指定UUID。 保留未除物种总量及物量/负荷向量，不假设排放或因子。 | kg | 每真实排放作业 | 真实完整批次含控制失败 | 真实排放点 | 每参考流 | 采样记录; 独立物种分析; LCIA相容性; 分析不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_numerator | 所有清单行 | 先将原始记录换算为各自真实广延单位。对原始交换i及批次c，在细分和逐交换分配后形成A_i_c：本期归属负荷+期初继承WIP/未用投入向量-期末仍未完工/未用且未归属向量，各项互斥且只修正一次；已放行FG制造向量不从制造A扣除。将实际样品/失败/处理负荷归属完整。服务已执行负荷单列B_i_c，保留原Q_c。 | cp_material; cp_energy_cut; cp_energy_prepare; cp_assets; cp_waste_cut; cp_waste_prepare; cp_service; cp_packaging; cp_emission | A_i_c; B_i_c | `jrc-ilcd-2010` |
| calc_physical | 制造/准备/FG/合并门及包装 | 逐门保留未分配完整物量：opening+gross external inputs=closing+gross external outputs+真实独立测得转化；内部转移配对抵消。制造输出包含唯一Q及共生坯件和真实废物，不在Q旁另加closingFG。FG门openingFG+first-release transfer+actual returns=closingFG+gross dispatch+actual waste/loss。Ag/Cu与每种相关元素独立核对，含量子账不叠加整份；每包装池执行sb_packs，X仅消除同侧OTHER确切重复。 | cp_material; cp_release; cp_waste_cut; cp_waste_prepare; cp_packaging; cp_service | V_i; physical and elemental residuals | `jrc-ilcd-2010` |
| calc_quotient | 所有清单行 | 仅当Q>0，对同一批次执行唯一x_i=A_i/Q及物量审计v_i=V_i/Q；服务仅以原批次Q_c执行s_i_c=B_i_c/Q_c。每种结果是不同标记账，不互相连续相除，也不叠加成重复provider。卡片/aggregation仅引用这些结果。Q=0保留完整负荷且无单位结果。 | A_i_c; B_i_c; V_i; cp_release; cp_service | x_i; v_i; s_i_c | `jrc-ilcd-2010` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | 板材与供料 | 真实单一来源板材、完整成分、形态、冷切配置和指定接收方批准逐批相符。不能由精炼服务目录批准另一来源，不能把普通银箔当合金。 | 供方批次证书; 接收规范; 配置记录 |
| dq_history | 全部门与批次 | 独立总质量/元素闭合；全部原料/WIP/FG/包装存量、逐流继承向量、失败/Q0/闲置/清理、真实再加工和样品均在场。未完成证据明确不确定，不填零。 | 原始账; 校准; 分析; 向量桥接 |
| dq_provider | 各绑定及未绑定交换 | UUID只建立身份；采用其完整原生形态、类型、介质、路线、地区和属性限制。另核provider适配、时间和地理代表性。未绑定具体流逐项补核，不用集合替代。 | 完整原生记录; 供方证据; 不确定性声明 |
| dq_evidence | 规则与结果 | 工业来源仅支持物理路线，ILCD仅支持有依据的归因方法。真实量按前景采集，不复制售价、成色、回收率或历史案例参数。服务H与生产Q分开。 | 原件和上下文; 方法论证; 覆盖及不确定性 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| vr_scope | 参考供料 | 逐批验证单一银铜板材制造实心边角料、无有意金/覆层、与灰渣锉屑扫集物互斥、真实冷切来源、接收规范和首次验收；不符合者不使用本参考流。独立核实固定牌号、完整成分、状态、厚度及原剪切配置，供方宣传不能证明批次适用性或接收批准。 | `un-cpc3-2025`; `mw-scrap`; `brepohl-scrap`; `mw-plate`; `mw-alloys`; `mw-terms` |
| vr_measure | 全部数量与库存 | 核对唯一Q、每流原单位、真实换算、一次A/Q、原Q_c服务和Q0保留；制造/FG/合并总质量、各相关元素及每种包装池独立闭合。禁止closingFG重复输出、内容物子账叠加整份、同一provider重复或以残差拟合多个未知。 | `jrc-ilcd-2010` |
| vr_allocation | 负荷归属 | 逐交换检查先专属/虚拟细分、再决定性物理因果，仅真实剩余才同门同状态同期经济价值。证据不足明确待复核，不把工程检查当科学通过。禁止固定比例、零历史或替代信用。 | `jrc-ilcd-2010` |
| vr_native | 清单交换 | 检查单一原子身份、官方中文名、全部原生限制及真实供方/版本属性单位链。实际新增物质须独立卡。空气元素流不能替代废尘或未知物种/介质；实际LCIA区分物种时优先专属流。 | `jrc-ilcd-2010` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 符合相同来源成分形态和接收门的未精炼供料背景；不据此批准方法 |
| allowed_use | 真实单一来源实心银铜板材边角料及其完整归因历史，满足全部限定条件 |
| excluded_use | 整叶通用覆盖；金/灰渣/扫集物/锉屑/精炼锭；固定回收或替代信用；零历史负荷；净交付分母 |
| required_metadata | 全部参考限定信息; 真实门及批次; 全部原始记录协议; 单一商; provider归属; 分配方法与敏感性 |
| required_quality_disclosure | 原生身份及provider限制; 核心与辅助未解决项; 历史向量覆盖; 实测和推断区分; 科学及翻译审批状态 |
| update_trigger | 来源成分形态/制造路线/接收规范改变; provider或原生限制改变; 分配或计量证据改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN Statistics Division, CPC Ver.3.0 Explanatory Notes, 30 June 2025, PDF p.203; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 非金贵金属废料与39331金废料、39333灰渣的边界；不提供LCA分配规则 |
| mw-scrap | extension_guidance | Morris and Watson, Scrap; https://morrisandwatson.com/refining/scrap | 包括板材边角料的可识别洁净实心合金废料精炼供料终端；原文Morris and Watson来源条件不构成其他供方批准 |
| mw-separation | extension_guidance | Morris and Watson, Refining Tips; https://morrisandwatson.com/refining/precious-metal-refining-tips | 银分开收集、大件异物分离、废料与扫集物区分及发运身份；排除污泥和铂族金属分支 |
| brepohl-scrap | handbook | Erhard Brepohl, Precious Metal Refining, updated 11 December 2016, The Theory and Practice of Goldsmithing extract; https://www.ganoksin.com/article/precious-metal-refining/ | Treatment at the Refinery及Scrap节：板材制造来源、分选、合金身份、称量和刚性容器；不采用邻近锉屑、扫集物和酸精炼分支 |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA Detailed guidance, first edition March 2010, §§7.9.2–7.9.3, printed pp.255–265; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 仅适用于有依据的归因分配：细分、逐交换决定性物理因果和剩余流同状态过程门经济价值；存量向量公式为本PCR声明的采集方法 |
| mw-plate | extension_guidance | Morris and Watson, Plate & Sheet; https://morrisandwatson.com/fabrication/plate-sheet | Sterling板材及闸式剪切；不提供批次成分、通用尺寸或实测BOM |
| mw-alloys | extension_guidance | Morris and Watson, Fabrication Alloy Information; https://morrisandwatson.com/fabrication/fabrication-alloy-product-information | STG-925牌号、含钯sterling分列及批次分析政策；不能证明完整银铜成分或再生份额 |
| mw-terms | extension_guidance | Morris and Watson Ltd (NZ), Refining Terms and Conditions v2 July 2023; https://morrisandwatson.com/pdf/MWNZ-Refining-Terms-v2.pdf | 2023年7月v2第2、4–6节：接收裁量、来源描述、交货/结算区别及可能外包分析；不设通用LCA最小批量 |
