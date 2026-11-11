---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.refinery-c1-c2-fuel-gas-supply
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
translation_status: reviewed
---


# 炼厂 C1/C2 燃料气供货

## 1. 范围与适用性

本稿的物理对象是由矿物石油蒸馏、裂化等炼油过程尾气经轻组分分离、按需净化和计量后供给厂内接收装置或外部客户的非冷凝 C1/C2 燃料混合气。实际组成可含氢、甲烷、乙烷及烯烃；不规定组成、热值、密度、压力、收率或排放因子默认值。`jrc-refining-2015` 第 2.12 节支持 C1/C2 馏分销售或作炼厂燃料，第 2.10 节同时指出多数炼厂气须迅速厂内消耗、通常不能销售。因此外供必须有真实接收规格和交付计量，不能假设普遍存在商品出口。

排除天然气开采净化或 LNG、独立乙烷产品、液化丙烷/丁烷 LPG、提纯单体烯烃、独立提纯氢气、焦炉煤气、高炉或转炉煤气、合成气气化制造、生物来源气及纯燃烧供热。组成含甲烷不使炼厂混合气成为天然气，含氢也不使其成为独立氢产品。CPC 原件将天然气列在 12020，氢等无机气体列在 34210，液化丙丁烷列在 33410、列名烯烃列在 33421；33429 只是残余类标题。外购天然气或 LPG 掺入交付管网后，混合产品适用性和分类另审；不得隐匿这些投入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.refinery-c1-c2-fuel-gas-supply |
| classification_refs | CPC 3.0 33429; narrower product and route boundary |
| covered_products | 有明确接收规格的净化炼厂 C1/C2 燃料混合气 |
| excluded_products | 天然气；LPG；单体烯烃；独立氢产品；气化合成气；生物气；仅供热 |
| representative_product | 净化炼厂 C1/C2 燃料气 |
| production_route | 炼油气液轻组分进料 → 压缩/冷却/吸收/分馏 → 按需胺净化/再生 → 外供计量；回用另记 |
| market_state | 有验收条件的气态燃料；非液化 LPG 或纯化学单体 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供给明确组成和验收规格的净化炼厂燃料气 |
| How much | 1 m3 在厂内使用或储存交接点首次验收的干气产出，明确温度与绝对压力，不含液态夹带物；保留水分/压缩因子修正及独立实测质量和能量 |
| How well | 实测组成、总/净热值、水及硫；符合接收方压力与质量规格 |
| How long or cycle | 同一声明代表期，包含开停车和非正常排放事件 |
| reference_flow_link | reference_gas |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 燃气 `084a3bc0-51e3-4c71-bd26-236efaeba2b5` |
| 参考流属性 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` |
| 参考单位组 | 体积单位 `93a60a57-a3c8-12da-a746-0800200c9a66` |
| 参考单位 | m3 |
| 必需限定信息 | 炼油来源装置; 产品组成/牌号/接收方; 矿物石油及化石碳来源; 干湿态; 液态夹带物; 温度/绝压/压缩因子; 水分; 密度测定; 总/净热值及基准; 硫物种; 计量点/交付压力; 前景边界; 代表期/地点; 厂内回用/外供/火炬; 唯一首次验收事件/队列及锁定原干气体积基准; 完整 D_new/FG_new/L_new 去向与继承服务; 母过程负荷/分配; 供方数量基准 |

广义整产品“燃气”身份描述使用或储存设施现场的气态物料。在此仅用于该验收交接点实测的炼厂 C1/C2 混合气，保留来源装置、组成、相态和接收规格；它不是纯甲烷或天然气供方。其分类元数据不替代适用性判断。原生 Volume 参考仅建立 m3，实际温度、绝压、水分、压缩因子及任何供方数量/负荷基准须另行声明核对，不设固定密度或热值。这些基准匹配前不得链接背景供方。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| dry_volume | reference_gas | Volume | m3 | Q 为通过 cp_delivery 独立测得并去重汇总的唯一首次验收事件干气体积，锁定声明参考温度、绝压、水分和验收组成对应压缩因子。全部 D_new、FG_new、L_new 部分按该原基准通过 acceptance_event_bridge 核对。保留原始表计状态及实测质量/物种记录；组成或相态变化后的实际体积不自动可加。不同原始 m3/Nm3 不直接求和，不设通用标准状态、密度或热值；供方/参考状态相容性另核。 |
| gas_state_conversion | raw_gas; reference_gas; natural_gas | Volume | m3 | 仅移除水时，V_measured 转为 V_reference_dry 等于 V_measured 乘(1 减实测水摩尔分数)乘 P_measured/P_reference 乘 T_reference/T_measured 乘 Z_reference_dry/Z_measured。采用绝压、开尔文、同步实际混合物组成及匹配压缩因子定义；仅已为干基表计时省略水分修正。烃凝结或物种移除须独立物料账，不能套用同混合物换算。不虚设标准 P/T/Z，也不假设 Z 为 1。 |
| utility_basis | steam; natural_gas | Mass; Energy; Volume | kg; MJ; m3 | 蒸汽载体质量、净热和返回水分账。质量以 kg、焓以 kJ/kg 计时，同一约定下交付热量为（各供入质量乘供入焓之和减各返回质量乘返回焓之和）/1000 MJ；补水、排污和损失须纳入水量与焓账。相容质量或热量基准供方数量只选一次，不同时相加或再次乘焓因子。天然气 m3 采用匹配温度/绝压/水分/压缩因子，NCV 与 GCV 分开。 |
| physical_basis | all inventory rows | Recorded exchange property | Recorded exchange unit | 按验收队列保留原始交换向量、原料/在制品/成品气库存及继承服务向量。同队列生产总量以正值 Q 归一化；期初或购买成品气、库存发出、退回、复测和再验收不形成 Q。已验收气体后续损失、降级、报废或返在制品仍保留其原首次事件及服务。旧队列服务采用原 Q/体积基准；Q 未知或为零则保留原始总量且不除法。物理总质量/C/H/O/N/S/水/能量账独立于事件数量及归属负荷。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已识别炼油母过程输出的气液轻组分，带明确质量组成及母过程负荷 |
| starting_condition_role | 物理前景入口，不是零负荷废气假设 |
| product_classification_scope | 炼厂 C1/C2 燃料气供货子集；不主张覆盖整个 CPC33429 |
| recursive_input_rule | 按实际来源链接炼油母过程；返回气与循环液两端同量，厂内循环不重复计入外部采购 |
| upstream_dataset_requirement | 核对炼油尾气负荷、外购材料、公用工程及外部硫回收/废水处理，声明缺口 |
| disclosure | 气体装置/胺循环/加热单元/火炬/硫回收/厂内燃烧/外供计量的责任边界及内部链接 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_supply | supply | 纳入实际分离、净化、再生、压缩、冷却、计量、处理损失及供气单元自有公用工程和火炬。外购公用工程链接相容背景；真实工艺不要求全部示意操作同时存在。 | `jrc-refining-2015` |
| boundary_combustion | reference_gas | 供气出口后，厂内炼油燃烧与外部客户燃烧分别为接收过程。物理气体仍完整记录、双端等量；不把下游燃烧排放加到外供产品制造，也不删除厂内燃烧过程。 | `jrc-refining-2015` |
| boundary_complete | supply | 对照实际装置逐种增加其他原料、配方组分、制冷剂、废物、污染物及粒径排放。水相外部处理与真正环境排放分开；气液固多产品及水/碳/硫/能量接口均完整保留。已知生物碳输入须另设生物 CO2 行并重审适用性，不能因温室气体统计口径而删掉 LCI。 | `jrc-refining-2015` |

### 实物接口与独立服务负荷

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| link_ledgers | supply | 以下为真实装置及台账的接口，不是必须另增的制造过程。声明边界上每股流只记一次；内部链接双端等量，在合并平衡中抵消。上游负荷继承、实物数量与服务归属分账。 |  |
| link_feed | raw_gas; raw_condensate | 炼油母过程输出与供气输入按来源装置、流 id、代表期、相态、组成、水分及数量状态配对，继承有记录的母过程负荷。湿态入口体积不自动等于干产品体积。 | `jrc-refining-2015` |
| link_loops | supply | 对实际富/贫胺、吸收汽油循环、返回燃料管网的闪蒸气、返回炼油的分液罐凝液及冷却水/蒸汽回路双端配对。循环、新补、排污、持有量与传输分记，任一端均不转为重复采购、销售或排放。 | `jrc-refining-2015` |
| link_products | reference_gas; propane; butane; naphtha | 每个回用/外供/储存出口与接收方配对，保留验收事件、gross 出口、关联退回、库存/管存及验收后损失/降级/返工。1 m3 分母为独立锁定唯一首次验收 Q，按原基准用互斥穷尽 D_new + FG_new + L_new 核对。期初或购买已验收库存、退回/复测/再验收及库存发出均不新增 Q。首次验收前取用的未验收在制品或供气服务燃料不新增 Q；已验收气体后续转作他用仍保留 Q，且仅纳入 L_new 一次。验收产品交至独立炼厂燃料接收过程时仅纳入 D_new 一次。C3/C4/C5 及更重出口仍保留完整实物数量。 | `jrc-refining-2015` |
| link_recovery | acid_gas; spent_amine; wastewater; filter_solids; offspec_condensate | 每股整混合物与实际回收/处理方配对，保留 H2S、CO2、烃、盐、载水与湿分，不用单物种代替整股流。接收方的回收硫、水、尾气及返回材料须链接；实际接收方负荷按声明边界/分配只纳入一次。 | `jrc-refining-2015`; `epa-refinery-monitoring-2015` |
| link_combustion | supply | 真实供气自有加热/火炬与接收炼油/客户燃烧分别识别。对纳入操作保留空气/O2、湿分、燃料、包括 N2/O2 在内的全部实际烟气组分、回收热及损失；逐项补全所需实际 LCI 原子交换。不得为了补齐示意图而造泛用燃烧或混合过程。 | `jrc-refining-2015` |
| link_packaging | supply | 确认实际管道/散装/容器交付、材料库存及退回。实际存在的每种包装材料、密封件、更换部件、清洗投入及废物各列原子行。复用罐/瓶采集皮重、容器群库存、满空返回、余气、损失、清洗/检验/维修及实测服务循环；容器质量不是气体质量，也不能每充装一次计购入新容器。自有或供方服务负荷只记一次，排除须说明。 | `jrc-refining-2015`; `eu-pef-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| supply | 炼厂轻组分气分离、净化和交付 | required | 实际交付炼厂燃料气 | foreground production | 每参考流 |

### 过程：炼厂燃料气供货（`supply`）

#### 输入

##### 产品流

###### 炼油原始尾气（`raw_gas`）

来自蒸馏或转化装置的气体；保留供气装置、组成、干湿基、压力及母过程负荷。

- 选定流：炼油原始尾气
- 流属性/单位：Volume / m3
- 数量规则：使用 cp_feed 的同一代表期实测总量，按首次验收干气产出 Q 归一化为每参考流；实物传输不得乘分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_feed`
- inclusion_condition：必需
- 来源：`jrc-refining-2015`

保留处理前和验收后各自实测的实物流。广义产品流身份不提供其组成、回收率、密度、热值或上游负荷，这些仍须通过实际采集和供方证据建立。

###### 炼厂未稳定轻烃凝液（`raw_condensate`）

仅在实际有液态轻组分进料时纳入；相态、组成与气体分别计量。

- 选定流：炼厂未稳定轻烃凝液
- 流属性/单位：Mass / kg
- 数量规则：使用 cp_feed 的同一代表期实测总量，按首次验收干气产出 Q 归一化为每参考流；实物传输不得乘分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_feed`
- inclusion_condition：存在液态进料
- 来源：`jrc-refining-2015`

###### 购入交流电（`electricity`）

计量压缩、制冷、泵送、再生及交付操作；共享表计只分配一次。

- 选定流：交流电 `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 单位组：能量单位 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：使用 cp_utilities 的同一代表期实测总量，按首次验收干气产出 Q 归一化为每参考流；实物传输不得乘分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- inclusion_condition：必需
- 来源：`jrc-refining-2015`

仅采用实际中国（CN）35–330 kV 消费端电网平均供电；其他电压/供电组合须另行检索。表计 kWh 乘 3.6 转为 MJ；原生属性名为 Net calorific value，不意味着电力具有燃料热值。

###### 供气体分离和胺再生使用的工艺蒸汽（`steam`）

采集进出口焓、压力、温度、干度、质量和凝结水返回。该原子交换为物理蒸汽质量，净热按配对供回质量与焓另算；载水、返回凝结水、补水、排污及损失保留水账。相容供方负荷按质量或热量基准只应用一次，不重复采购热量或重复乘转换因子。供方热量基准未知时保持待定；MJ 本身不证明净交付热量。

- 选定流：供气体分离和胺再生使用的工艺蒸汽
- 流属性/单位：Mass / kg
- 数量规则：使用 cp_utilities 的同一代表期实测总量，按首次验收干气产出 Q 归一化为每参考流；实物传输不得乘分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- inclusion_condition：采用蒸汽加热
- 来源：`jrc-refining-2015`

###### 工业工艺补水（`water`）

按实际来源和处理状态记录单独购入的工艺、冷却或稀释水，区别于循环水、回收凝结水及已含在交付溶液中的载水。不同水质须分列实际行；内含载水仅为组分账数量，不能再作一次补水采购。

- 选定流：工业工艺补水
- 流属性/单位：Mass / kg
- 数量规则：使用 cp_utilities 的同一代表期实测总量，按首次验收干气产出 Q 归一化为每参考流；实物传输不得乘分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- inclusion_condition：使用补水
- 来源：`jrc-refining-2015`

###### 甲基二乙醇胺溶剂补充量（`mdea`）

本行计量实际交付 MDEA 补充牌号的整股质量；水溶液原液包括其载水。组分账分别记录实际含量、添加剂、原液总质量、MDEA 有效质量与内含水。50% 原液不等于纯 MDEA，BREF 的运行溶液说明不能作为采购牌号或浓度默认值。整股溶液与其组分不得同时作为独立采购重复入账。另行加入的稀释水归入补水行；其他采购牌号或添加剂须采用各自实际原子身份。

- 选定流：甲基二乙醇胺溶剂补充量
- 流属性/单位：Mass / kg
- 数量规则：使用 cp_materials 的同一代表期实测总量，按首次验收干气产出 Q 归一化为每参考流；实物传输不得乘分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- inclusion_condition：采用 MDEA 溶剂路线
- 来源：`jrc-refining-2015`

###### 吹扫用气态氮（`nitrogen`）

记录外供气态保护气氮的实际纯度与计量消耗，匹配供方路线。所选全球身份不建立供方过程或纯度；不得用灌装线或造纸厂专属氮气身份替代。N 账保留产品中氮、排出氮和库存氮。

- 选定流：氮气 `50626f35-0e0d-4139-b9f9-7e9ff238ba62`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：使用 cp_materials 的同一代表期实测总量，按首次验收干气产出 Q 归一化为每参考流；实物传输不得乘分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- inclusion_condition：采用氮气吹扫
- 来源：`jrc-refining-2015`

###### 轻质石油汽油吸收剂补充量（`absorbent`）

只记外部补充量；吸收塔循环液保留内部账。记录牌号和组成。

- 选定流：轻质石油汽油吸收剂补充量
- 流属性/单位：Mass / kg
- 数量规则：使用 cp_materials 的同一代表期实测总量，按首次验收干气产出 Q 归一化为每参考流；实物传输不得乘分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- inclusion_condition：采用冷冻吸收
- 来源：`jrc-refining-2015`

###### 单独计量公用工程燃烧用天然气（`natural_gas`）

仅为明确的气体装置公用工程燃料，不能作炼厂气参考产品或不记录的管网掺混。核对温度、绝压、水分、压缩因子及供方 m3 定义；次级质量系数不是密度。

- 选定流：天然气，气态 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 单位组：体积单位 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：使用 cp_utilities 的同一代表期实测总量，按首次验收干气产出 Q 归一化为每参考流；实物传输不得乘分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- inclusion_condition：声明前景内存在天然气公用工程燃烧
- 来源：`jrc-refining-2015`

#### 输出

##### 产品流

###### 净化炼厂 C1/C2 燃料气（`reference_gas`）

在厂内使用或储存计量交接点首次验收的干气产出，1 m3。Q 仅计一次唯一首次验收生产量，包含其锁定原基准上的全部后续 D_new/FG_new/L_new 去向；验收后损失或返在制品不扣减 Q。厂内回用、外供和库存分支保留完整实物体积，接收端等量。首次验收不是额外外部输出；期初或购买已验收库存的后续发出、退回及再验收不算新生产；整混合气不能识别为纯甲烷、乙烷、氢或天然气。

- 选定流：燃气 `084a3bc0-51e3-4c71-bd26-236efaeba2b5`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 单位组：体积单位 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：1 m3
- 数值来源模式：`fixed_value`
- 适用范围：`product_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_delivery`
- inclusion_condition：首次验收入炼厂使用或储存；外供须有真实接收方验收
- 来源：`jrc-refining-2015`

保留处理前和验收后各自实测的实物流。广义产品流身份不提供其组成、回收率、密度、热值或上游负荷，这些仍须通过实际采集和供方证据建立。

###### 分离液化丙烷馏分（`propane`）

分别记录实际 C3 馏分品级及验收交付，不并入 C1/C2 气；产品方法归于 LPG 路线。

- 选定流：液化石油气 `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：使用 cp_products 的同一代表期实测总量，按首次验收干气产出 Q 归一化为每参考流；实物传输不得乘分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_products`
- inclusion_condition：产生 C3 联产品
- 来源：`jrc-refining-2015`

分别限定本行为实际 C3 富集液化石油气馏分，记录组成、液化供货条件和独立出口总量；广义 LPG 身份不把两行合并、不假设纯化学品或通用杂质范围。

###### 分离液化丁烷馏分（`butane`）

在独立交付门记录实际 C4 组成，包括正异构体及烯烃含量。

- 选定流：液化石油气 `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：使用 cp_products 的同一代表期实测总量，按首次验收干气产出 Q 归一化为每参考流；实物传输不得乘分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_products`
- inclusion_condition：产生 C4 联产品
- 来源：`jrc-refining-2015`

分别限定本行为实际 C4 富集液化石油气馏分，记录组成、液化供货条件和独立出口总量；广义 LPG 身份不把两行合并、不假设纯化学品或通用杂质范围。

###### 脱丁烷轻汽油馏分（`naphtha`）

记录 C5 及更重组分的实物出口、内部循环、验收销售和库存变化，不设通用收率。识别实际净产品与调和接收方，分离汽油馏程流不自动等于车用汽油成品牌号。

- 选定流：脱丁烷轻汽油馏分
- 流属性/单位：Mass / kg
- 数量规则：使用 cp_products 的同一代表期实测总量，按首次验收干气产出 Q 归一化为每参考流；实物传输不得乘分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_products`
- inclusion_condition：产生 C5 及更重液体
- 来源：`jrc-refining-2015`

###### 胺再生器含硫化氢酸性气（`acid_gas`）

向硫回收传输的实物混合气；测定 H2S、CO2、水及其他组分。这不是向空气排放的 H2S；连接接收硫回收过程及其硫、水和尾气记录。

- 选定流：胺再生器含硫化氢酸性气
- 流属性/单位：Mass / kg
- 数量规则：使用 cp_products 的同一代表期实测总量，按首次验收干气产出 Q 归一化为每参考流；实物传输不得乘分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_products`
- inclusion_condition：采用胺再生
- 来源：`jrc-refining-2015`

###### 返回供热方的蒸汽凝结水（`condensate_return`）

在同一蒸汽接口记录返回质量及焓，不自动给予避免取水或热量信用。

- 选定流：返回供热方的蒸汽凝结水
- 流属性/单位：Mass / kg
- 数量规则：使用 cp_utilities 的同一代表期实测总量，按首次验收干气产出 Q 归一化为每参考流；实物传输不得乘分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- inclusion_condition：凝结水返回跨越单元边界
- 来源：`jrc-refining-2015`

##### 废物流

###### 送再生或处置的废 MDEA 溶液（`spent_amine`）

保留水、胺、热稳定盐和烃污染信息，记录接收方及实际去向。

- 选定流：送再生或处置的废 MDEA 溶液
- 流属性/单位：Mass / kg
- 数量规则：使用 cp_waste 的同一代表期实测总量，按首次验收干气产出 Q 归一化为每参考流；实物传输不得乘分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- inclusion_condition：排出 MDEA 溶液
- 来源：`jrc-refining-2015`

###### 气体净化过滤固体（`filter_solids`）

记录实际水分、硫、吸附剂及烃含量；不能对粉尘与污泥共用干质量假设。

- 选定流：过滤残渣 `f1b6f4e0-72d1-4e9b-afcc-cfca4e75b184`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：使用 cp_waste 的同一代表期实测总量，按首次验收干气产出 Q 归一化为每参考流；实物传输不得乘分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- inclusion_condition：气体处理排出固体
- 来源：`jrc-refining-2015`

###### 送处理的炼厂气体装置含硫废水（`wastewater`）

计量水相交接及溶解、悬浮烃和硫化合物；这不是向淡水排放，不能采用锰渣洗涤废水身份。

- 选定流：送处理的炼厂气体装置含硫废水
- 流属性/单位：Volume / m3
- 数量规则：使用 cp_waste 的同一代表期实测总量，按首次验收干气产出 Q 归一化为每参考流；实物传输不得乘分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- inclusion_condition：水相排污离开气体装置
- 来源：`jrc-refining-2015`

###### 送处理的不合格石油烃凝液（`offspec_condensate`）

仅为外部废物交接，不代表返回炼油的内部回流。保留组成和危废状态；按实际接收条件重审产品状态。

- 选定流：废油 `e620bc79-43f0-41a8-9589-9b5fe50ffef2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：使用 cp_waste 的同一代表期实测总量，按首次验收干气产出 Q 归一化为每参考流；实物传输不得乘分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- inclusion_condition：不合格凝液作为废物交接
- 来源：`jrc-refining-2015`

##### 基本流

###### 化石二氧化碳，排至室外空气（`co2_air`）

仅记录实际排至室外空气的具体物种，未特指子介质身份待核验。采集监测、LDAR、放空、火炬记录，不设默认正排放或历史 AP-42 因子。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：使用 cp_air 的同一代表期实测总量，按首次验收干气产出 Q 归一化为每参考流；实物传输不得乘分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- inclusion_condition：入口 CO2 放空或化石碳公用工程、火炬燃烧
- 来源：`jrc-refining-2015`; `epa-refinery-monitoring-2015`

###### 化石一氧化碳，排至室外空气（`co_air`）

仅记录实际排至室外空气的具体物种，未特指子介质身份待核验。采集监测、LDAR、放空、火炬记录，不设默认正排放或历史 AP-42 因子。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：使用 cp_air 的同一代表期实测总量，按首次验收干气产出 Q 归一化为每参考流；实物传输不得乘分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- inclusion_condition：实际不完全化石燃烧或含 CO 放空
- 来源：`jrc-refining-2015`; `epa-refinery-monitoring-2015`

###### 化石甲烷，排至室外空气（`ch4_air`）

仅记录实际排至室外空气的具体物种，未特指子介质身份待核验。采集监测、LDAR、放空、火炬记录，不设默认正排放或历史 AP-42 因子。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：使用 cp_air 的同一代表期实测总量，按首次验收干气产出 Q 归一化为每参考流；实物传输不得乘分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- inclusion_condition：含甲烷泄漏、放空或火炬逃逸
- 来源：`jrc-refining-2015`; `epa-refinery-monitoring-2015`

###### 乙烷，排至室外空气（`ethane_air`）

仅记录实际排至室外空气的具体物种，未特指子介质身份待核验。采集监测、LDAR、放空、火炬记录，不设默认正排放或历史 AP-42 因子。

- 选定流：乙烷 `4d9a8790-3ddd-11dd-9219-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：使用 cp_air 的同一代表期实测总量，按首次验收干气产出 Q 归一化为每参考流；实物传输不得乘分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- inclusion_condition：含乙烷泄漏或放空
- 来源：`jrc-refining-2015`; `epa-refinery-monitoring-2015`

###### 苯，排至室外空气（`benzene_air`）

仅记录实际排至室外空气的具体物种，未特指子介质身份待核验。采集监测、LDAR、放空、火炬记录，不设默认正排放或历史 AP-42 因子。

- 选定流：苯 `08a91e70-3ddc-11dd-9202-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：使用 cp_air 的同一代表期实测总量，按首次验收干气产出 Q 归一化为每参考流；实物传输不得乘分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- inclusion_condition：实际释放气体或液体蒸气含苯
- 来源：`jrc-refining-2015`; `epa-refinery-monitoring-2015`

###### 硫化氢，排至室外空气（`h2s_air`）

仅记录实际排至室外空气的具体物种，未特指子介质身份待核验。采集监测、LDAR、放空、火炬记录，不设默认正排放或历史 AP-42 因子。

- 选定流：硫化氢 `08a91e70-3ddc-11dd-94a9-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：使用 cp_air 的同一代表期实测总量，按首次验收干气产出 Q 归一化为每参考流；实物传输不得乘分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- inclusion_condition：H2S 跨越空气环境边界
- 来源：`jrc-refining-2015`; `epa-refinery-monitoring-2015`

###### 二氧化硫，排至室外空气（`so2_air`）

仅记录实际排至室外空气的具体物种，未特指子介质身份待核验。采集监测、LDAR、放空、火炬记录，不设默认正排放或历史 AP-42 因子。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：使用 cp_air 的同一代表期实测总量，按首次验收干气产出 Q 归一化为每参考流；实物传输不得乘分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- inclusion_condition：供气边界内燃烧含硫气体
- 来源：`jrc-refining-2015`; `epa-refinery-monitoring-2015`

###### 氮氧化物，按 NO2 当量质量排至室外空气（`nox_air`）

本行监测报告量与实物物种质量分账。NO2 当量既非实际 NO2 质量，也非未加权的 NO/NO2 物种质量和。使用前须建立监测换算和匹配的 LCI/LCIA 数量定义；不采用泛用氮氧化物 UUID 或实物 kg 链接。实际 NO 与 NO2 纳入物种/元素账，落实 LCI 身份后各自分列原子行，不再叠加汇总量。

- 选定流：氮氧化物，按 NO2 当量质量排至室外空气
- 流属性/单位：NO2 当量排放报告量 / kg NO2-equivalent
- 数量规则：使用 cp_air 的同一代表期实测总量，按首次验收干气产出 Q 归一化为每参考流；实物传输不得乘分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- inclusion_condition：实际监测和所选 LCI 数量均证实为 NO2 当量 NOx，排除 N2O
- 来源：`jrc-refining-2015`; `epa-refinery-monitoring-2015`

###### 一氧化二氮，排至室外空气（`n2o_air`）

仅记录实际排至室外空气的具体物种，未特指子介质身份待核验。采集监测、LDAR、放空、火炬记录，不设默认正排放或历史 AP-42 因子。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：使用 cp_air 的同一代表期实测总量，按首次验收干气产出 Q 归一化为每参考流；实物传输不得乘分配份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- inclusion_condition：实际监测或有据的燃烧 N2O
- 来源：`jrc-refining-2015`; `epa-refinery-monitoring-2015`

###### 氢（`hydrogen_air`）

测量实际气态物种排出，按气相组成及相容温压/干湿流量和事件时间积分。

- 选定流：氢 `08a91e70-3ddc-11dd-949c-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：使用 cp_air 的同一代表期实际排出总量，除以全部首次验收干气产出 Q，按每参考流。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- inclusion_condition：含氢泄漏、放空或火炬逃逸
- 来源：`jrc-refining-2015`; `epa-refinery-monitoring-2015`

###### 乙烯（`ethene_air`）

测量实际气态物种排出，按气相组成及相容温压/干湿流量和事件时间积分。

- 选定流：乙烯 `fe0acd60-3ddc-11dd-a47d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：使用 cp_air 的同一代表期实际排出总量，除以全部首次验收干气产出 Q，按每参考流。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- inclusion_condition：实际释放炼厂气含乙烯
- 来源：`jrc-refining-2015`; `epa-refinery-monitoring-2015`

###### 水蒸气（`water_vapour_air`）

测量实际气态物种排出，按气相组成及相容温压/干湿流量和事件时间积分。用实物水平衡核对蒸发、气体带水、冷却及燃烧生成水；不能与凝结水或液态外排重复，不将其当取水流。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：使用 cp_air 的同一代表期实际排出总量，除以全部首次验收干气产出 Q，按每参考流。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- inclusion_condition：冷却、蒸汽损失、气体水分或前景燃烧实际排出气态水
- 来源：`jrc-refining-2015`; `epa-refinery-monitoring-2015`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_parent | raw_gas; raw_condensate | 取得炼油母过程的尾气/液体负荷及分配证据；回用共产品仍保留完整物理输出。不能因“残余”称谓、内部使用或避免火炬而自动设零负荷/替代信用。 | `eu-pef-2021` |
| allocation_services | supply | 先利用独立计量和过程细分归属专用服务；剩余共用服务须解释分配选择及实测驱动量。若不能确定相关物理因果关系，保留评审和情景敏感性，不设通用质量、热值或价格份额。 | `eu-pef-2021` |
| allocation_service_account | supply | 压缩、蒸汽、冷却、净化、装卸、储存、容器清洗维修、退回及复测各保留独立服务向量。先细分新生产与每个旧验收队列，再有据分配剩余共同负荷。继承及后续服务归其原验收队列、原 Q/体积基准，保留既有向量而非替换。原 Q 未知或为零则保留原始服务总量且不除法；不转嫁当前 Q、不重复生成产品，也不自动给予退回抵扣。 | `eu-pef-2021` |
| allocation_ledgers | all inventory rows | 原始实物账的所有气液固产品、回用、火炬、废物及库存守恒，与分配后环境负荷账分开。环境负荷按有据的归属分配后除以全部首次验收干气产出 Q；实物共产品清单按完整总量除以同一验收交付体积分母，不机械乘环境份额。 |  |

## 8. 前景数据采集、计算与质量规则

权威 Q 为在固定参考门按唯一首次验收事件独立实测、去重汇总的干气体积，锁定每个原验收组成及声明温度/绝压/水分/压缩因子基准。按 acceptance_event_bridge 核对完整 Q = D_new + FG_new + L_new 去向桥，覆盖全部验收后净损失及其他后续状态。三部分为互斥净包组状态，不是 gross 流转量；退回、返工、复测和再验收不重复 Q。验收 Q 是参考事件账，不是另一笔外部实物输出。保留原事件数量、实物质量/物种/水/能量记录、原队列服务向量及未解释缺口；归一化须有正且已知的原 Q，失败操作和零/未知 Q 活动仍保留原始负荷。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_feed | supply | raw_gas; raw_condensate | 进料及来源账 | 流量/质量；温压；干湿；压缩因子；密度；逐物种组成；气液夹带；来源装置；母过程负荷 | 校准计量与同步取样，核对供方记录；禁止以组成典型值代替实测。 | kg; m3; MJ; kWh; composition | 逐批/连续及每事件 | 同一代表期，含开停车 | 声明气体装置与全部交接点 | 每参考流 | 校准；同步样品；交接；来源；完整性；平衡/不确定性 |
| cp_delivery | supply | reference_gas | 唯一首次验收台账 | 唯一事件/队列 id；首次验收日期/规格及独立实测锁定干气体积；原组成/温压/水分/压缩因子；gross 新发出及关联退回；D_new；FG_new；每个 L_new 损失/放空/火炬/报废/降级/净退回/返工在制品去向；期初期末已验收成品气/管存；购买成品；验收前在制品/拒收品；退回/复测/再验收原事件关联；回用/外供/服务分支；原表计体积/状态；独立实测质量/密度/物种；后续组成/相态变化及新增材料；总净热值及基准 | 在实际首次验收/储存/管网交接点独立计量，不以发出/发票推定，事件 id 去重。使用 acceptance_event_bridge 将原事件与全部净去向核对。同混合物状态换算仅在 gas_state_conversion 适用范围内使用；湿分/凝液另列，后续变化采用实测质量/物种/相态对应。双端 gross 传输及关联退回保持可审计；不改 Q 强行闭合 | kg; m3; MJ; composition | 各交接/批次/连续及事件 | 同一代表期及期初期末库存和原队列历史 | 声明气体装置使用/储存验收点及全部去向 | Q = 唯一首次验收干气体积之和；在锁定原基准验证 Q = D_new + FG_new + L_new；仅有证据证明全部其他去向不存在才用两项桥；期初/购买成品或再验收不新增 Q；仅正且已知 Q | 验收/规格记录；双端表计；完整去向及退回记录；原状态/组成/压缩因子与质量/物种证据；唯一队列台账；核对 |
| cp_utilities | supply | electricity; steam; water; natural_gas; condensate_return | 公用工程账 | 独立表计；能源供方；电压；蒸汽供回状态/焓/质量；水源；天然气 m3 定义；自用燃料 | 逐接口采集校准表计和供方基准，未知热量或气量兼容性保持待定；公共表计不重复。 | kg; m3; MJ; kWh; composition | 逐批/连续及每事件 | 同一代表期，含开停车 | 声明气体装置与全部交接点 | 每参考流 | 校准；同步样品；交接；来源；完整性；平衡/不确定性 |
| cp_materials | supply | mdea; nitrogen; absorbent | 辅料配方账 | 实际牌号/CAS/浓度；有效组分；溶液水；新补量；循环；库存；供方 | 采集采购、领用、配方和分析单；循环量与外部补充量分开；添加剂各自新增原子行。 | kg; m3; MJ; kWh; composition | 逐批/连续及每事件 | 同一代表期，含开停车 | 声明气体装置与全部交接点 | 每参考流 | 校准；同步样品；交接；来源；完整性；平衡/不确定性 |
| cp_products | supply | propane; butane; naphtha; acid_gas | 联产品及回收接口账 | 完整气液实物质量；组成；产品/废物接收；库存；硫回收接收及硫/水/尾气输出 | 分别计量每个出口及接收方；酸性气转硫回收不等于空气排放；保留完整实物数量。 | kg; m3; MJ; kWh; composition | 逐批/连续及每事件 | 同一代表期，含开停车 | 声明气体装置与全部交接点 | 每参考流 | 校准；同步样品；交接；来源；完整性；平衡/不确定性 |
| cp_waste | supply | spent_amine; filter_solids; wastewater; offspec_condensate | 废物及水相账 | 质量/体积；水分；组成；溶解/悬浮组分；废物地位；接收方；去向；处理负荷 | 称量和取样，核对外部交接；将回流、厂外处理和最终环境排放分开，避免水/固体重复。 | kg; m3; MJ; kWh; composition | 逐批/连续及每事件 | 同一代表期，含开停车 | 声明气体装置与全部交接点 | 每参考流 | 校准；同步样品；交接；来源；完整性；平衡/不确定性 |
| cp_air | supply | co2_air; co_air; ch4_air; ethane_air; benzene_air; h2s_air; so2_air; nox_air; n2o_air; hydrogen_air; ethene_air; water_vapour_air | 空气排放账 | 物种；介质/子介质；碳来源；浓度；流量；温压干湿；事件时长；LDAR；火炬；NOx 数量定义 | 采集实际连续/定期监测、泄漏检测及放空火炬日志；按实测物种分解，不把总 VOC 全部分配给苯或乙烷。实测/未修正与氧修正浓度、水分及流量须基准兼容；Method19 F-factor 路线要求实际燃料组成、HHV 及匹配的干湿假设，不能用通用天然气因子；以同状态浓度和流量及时长积分；N2O 不并入 NOx，NO/NO2 不再与汇总重复。 | kg; m3; MJ; kWh; composition | 逐批/连续及每事件 | 同一代表期，含开停车 | 声明气体装置与全部交接点 | 每参考流 | 校准；同步样品；交接；来源；完整性；平衡/不确定性 |
| cp_scope | supply | supply | 边界平衡与归属账 | 设备；所有交换；母过程/接收过程；气液固；总质量；C/H/O/N/S；载水；湿气；反应水；能量；内部链接双端；期初期末库存；退回；包装/容器群；维护；共同服务；驱动量；不确定性/缺口 | 逐设备走查，保留物理平衡及独立负荷分配账；无充分因果证据的分配不得自动接受。 | kg; m3; MJ; kWh; composition | 逐批/连续及每事件 | 同一代表期，含开停车 | 声明气体装置与全部交接点 | 每参考流 | 校准；同步样品；交接；来源；完整性；平衡/不确定性 |
| cp_interfaces | supply | supply | 双端物流及队列服务台账 | 物流/队列 id；收发方；产品状态；相态/组成；原始量值状态；期初期末原料/在制品/成品气及管存；首次验收；退回/复测；补充/循环/排污；容器皮重/群体/余气/循环/返回；清洗维修投入废物；专用共用服务向量；原队列验收 Q 及体积基准；继承负荷 | 双端、库存、退回及验收 id 核对。归一化前保留原始交换、库存及继承服务向量；每种新增实际材料/排放/废物各为原子行。分别计量新生产及各旧队列搬运、储存、清洗和复测服务；未知数量及原分母保持缺口。 | kg; m3; MJ; kWh; composition | 各交接/事件；期末库存 | 代表期内全部队列 | 声明气体装置、储存/管网及服务责任边界 | 当前生产用其 Q；旧队列服务归原队列 Q 及原体积基准；零或未知 Q 保留原始总量 | 校准；同步样品；双端收据；队列/状态/库存核对；供方与服务动因证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_records | all inventory rows | Q 为在固定参考门独立实测的唯一首次验收干气事件体积之和，不从发出加期末库存推定。除法前在原声明温度/绝压/水分/组成/压缩因子基准核对完整 acceptance_event_bridge。期初/购买已验收气体、退回、复测、再验收、验收前拒收/在制品及内部转移均不新增 Q。一经验收，后续损失、拒收、降级、改作服务燃料或返在制品不扣减 Q。可归属当前队列的生产交换总量仅除以正且已知 Q 一次，输出为 1 m3。保留失败操作、返工、储存、复测和损失相关活动，按证据归原队列；验收气体状态变化不使负荷消失或转嫁新生产。完整实物传输/库存核对与负荷分配分开。Q 为零或未知则保留原始总量且不归一化；不同规格或数量状态分为相容组。 | cp_feed; cp_delivery; cp_utilities; cp_materials; cp_products; cp_waste; cp_air; cp_scope; cp_interfaces | 同队列每参考流清单及独立负荷账 |  |
| balance_whole | supply | 同一边界/代表期各整股实物输入之和减输出之和等于期末减期初物料库存。边界包含成品气储存/管存时，采用实际外部转移/排放及全部原料/在制品/成品库存变化；首次验收是内部状态变化，不是额外输出。燃烧在边界内时须含湿分、空气/O2 及全部实际烟气组分。整溶液或混合物只计一次，组分账为拆解而非新增质量；内部双端/退回/返工抵消，外部 gross 发出与关联退回分别保留。这些实物数量独立于验收事件 Q 及分配。不许设反应质量生成/消失项或虚构闭合流。 | cp_feed; cp_products; cp_utilities; cp_materials; cp_waste; cp_air; cp_scope; cp_interfaces | 总质量账与按不确定性解释的差额 |  |
| balance_elements | supply | C/H/O/N/S 各自按入口元素质量减出口元素质量等于元素库存变化，采用实际组分质量及分子计量关系或实测元素分析。包含氢、胺、烃、盐、水、空气及湿分。元素生成量和消耗量均为零；反应仅重分配物种，不生成或消灭元素；未知组分保持未决，不以零值强行闭合。 | cp_scope; cp_interfaces | 五项独立守恒元素账 |  |
| balance_water_species | supply | 整股水量包含溶液载水、另加稀释水、湿气、蒸汽/凝结水、湿固体、废水及蒸气。对每种实际反应物种，输入减输出加反应生成 G 减消耗 C 等于物种库存变化。G/C 须由实际反应计量、反应程度及实测物种/代表期记录支持，不能假设物种守恒或将未知项置零。反应水在生成物流中只计一次，不能再作总质量或元素账源项，H/O 不重复。 | cp_scope; cp_materials; cp_utilities; cp_waste; cp_air | 与总质量及元素账相符的水/物种账 |  |
| gas_energy_basis | reference_gas; raw_gas; natural_gas | 按实际声明 P/T/Z、组成及供方基准记录干参考体积；实物质量为同状态体积乘独立建立的同状态密度，脱除湿分/夹带液另记。交付化学能为体积乘匹配混合气体积 NCV，或质量乘匹配质量 NCV。声明燃烧参考温度及产物水约定，GCV 分开；NCV 是供给混合气热潜力，不等于纯甲烷能量或有用热。原生次级系数不能建立这些换算。 | cp_feed; cp_delivery; cp_utilities | 相容体积、总质量与混合气能量账 |  |
| energy_closure | supply | 化学能、电功、蒸汽供回焓、物料显热潜热、输出/回收热、损失及储能采用同一声明参考约定核对。燃料能和内部生成热不同时作为外部输入；已计化学焓时不能再加相同反应热。能量数量与服务负荷分配分账。 | cp_scope; cp_utilities; cp_interfaces | 不重复内部转换的能量账 |  |
| nox_reporting | nox_air | 仅对有记录的 NO 加 NO2 报告约定，当量质量为实际 NO 质量乘摩尔质量(NO2)/摩尔质量(NO)加实际 NO2 质量。应用前核对监测及 LCI/LCIA 定义，N2O 独立。总质量及 N/O 账采用实际 NO/NO2 物种质量而非当量质量；影响计算选择物种或相容汇总量，仅计一次。 | cp_air | 独立 NO2 当量报告量与实物物种账 | `epa-refinery-monitoring-2015` |
| cohort_service_carry | supply | 保留原始投入产出、原料/在制品/成品气库存及继承负荷/服务向量。队列 c 的原始 Q_c 已知且为正时，后续可归属服务增量为 S_c/Q_c，采用该队列原声明体积基准，叠加于既有每参考流向量。期初库存发出、内部移库、退回、以前已验收产品的返工和复测不形成另一参考产出。Q_c 未知或为零则 S_c 保留原始总量及未决归一化，不除法、不转嫁新 Q。 | cp_interfaces; cp_scope; cp_delivery | 可审计原队列负荷向量及原始服务缺口 |  |
| acceptance_event_bridge | all inventory rows | Q = 独立实测的唯一首次验收干气事件体积之和；锁定每个原事件，对本期新验收队列以零期初库存核对 Q = D_new + FG_new + L_new。D_new 为交至真实回用/外供接收方并抵销关联退回的验收产品净量，FG_new 为期末验收成品气/管存，L_new 包含其他全部验收后净去向：损失/泄漏/放空/火炬、报废/处置、降级、成品外留存的净退回、改作服务燃料及期末返工/在制品或其他保管状态。三部分须在同一原验收组成/温度/绝压/水分/压缩因子干气体积基准互斥且穷尽。关联退回从 D_new 扣除后只归实际期末成品/在制品/其他去向一次；gross 返工/再验收循环不新增 Q 或第二次去向。组成、凝结、化学反应或相态改变时，按实测质量/物种追踪验收来源组分，并将每部分对应至原事件体积当量；不把凝液 m3 或火炬烟气 m3 加到干燃料气 m3，不跨物种移除套用同混合物温压/压缩因子修正，也不把后增材料计入 Q。实际质量/C/H/O/N/S/水/能量记录另列。仅有证据证明全部其他验收后去向不存在且 L_new = 0 才允许 Q = D_new + FG_new。同基准首次验收 100 m3、净交付 60 m3、期末成品 30 m3、验收后损失 10 m3 当量时，Q 保持 100 m3，不是 90 m3。期初/购买成品、复测和再验收不产生 Q，仍保留原服务向量。缺少原数量或桥接差额无法解释时保持未决并阻断完整归一化，不重新锁定 Q 或假设零损失。 | cp_delivery; cp_interfaces; cp_scope; cp_products; cp_waste; cp_air | 可审计锁定事件 Q 及完整原基准去向桥接，与实物及负荷账分开 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_balance | supply | 进料、补料、气液固产品、回用、废物、放空火炬及库存变化须完成物理总质量/C/H/O/N/S/水/能量平衡，含期初期末库存、载水、湿分、实际反应物种变化、容器返回及内部流双端。另将独立实测唯一首次验收 Q 与穷尽 D_new/FG_new/L_new 核对，后续组成/相态变化、返工及净退回须有原混合物/状态证据。按传播不确定性调查差额，不编闭合容差、不设零损失、不调整 Q。 | cp_scope; cp_delivery; cp_interfaces |
| quality_evidence | all inventory rows | 未来实际 SKU、组成及验收/数量由真实协议采集；文献工艺证据不等于已完成现场调查，单厂或历史数值不作通用配方或默认量。 | cp_scope; cp_delivery |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference_gas | 参考链接前核对完整原生整产品身份、来源路线、相态/组成限定、参考属性及单位链；广义“燃气”身份须对应实际验收炼厂混合气的使用/储存交接点。正向来源/状态/路线字段矛盾则阻断，须先修正或权威解决，元数据债务不得豁免。未来用量未知保持采集要求，不自动为零。不能用天然气、纯氢或 LPG 邻近身份替代。 |  |
| validate_inventory | all inventory rows | 每行一原子交换，介质/物种/化石生物来源和数量定义对应实际记录；失败接口不是无匹配。无 UUID 的具体物理流须保留未决；不采用宽泛 correction flow。 |  |
| validate_records | supply | 检查双语参考流、有序规则/协议 id、去重首次事件及锁定 Q，真实质量准入/储存/管网交接点，原队列服务基准，完整实物及独立分配账、母过程负荷及内部双端等量。要求 Q = D_new + FG_new + L_new，净去向互斥穷尽，采用同一原验收干气温度/绝压/水分/组成/压缩因子基准；仅证明全部其他去向不存在才可简为两项。核查损失、报废、降级、净退回、期末返工/在制品及已验收气体改作服务燃料，相关活动不删除，期初/购买成品/再验收不新增 Q。核验组成/相态变化的质量/物种对应，不重复退回/去向，不把首次验收另作实物输出。缺记录、供方不相容、原分母为零或未知、平衡无法解释时不能声称数据集完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 相符接收过程的燃料气供给输入 |
| allowed_use | 仅已完成身份/数量/供方兼容审查的炼厂 C1/C2 燃料气供货数据；实际组成和热值转换 |
| excluded_use | 方法本身不是已完成的前景/背景数据；不能自动替代天然气、LPG、单体烯烃或氢，也不代表外供气燃烧或整个炼厂 |
| required_metadata | 来源装置/工艺；组成；交付状态/质量；供方基准；外供/回用；场址/时期；边界/分配；接收规格 |
| required_quality_disclosure | UUID 未决及原始计量、背景、平衡、排放/废物、分配和调查覆盖缺口 |
| update_trigger | 来源/组成/工艺/净化/供汽或管网掺混/接收规格/分配发生变化 |

## 11. 数据源
| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-refining-2015 | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Refining of Mineral Oil and Gas, 2015; section 2.10 pp.66–67 (PDF100–101), 2.12 pp.76–77 (PDF110–111), 4.10.2.2 p.353 (PDF387), 4.23.5.1 pp.479–481 (PDF513–515), Annex8.2.2 p.673 (PDF707). https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/REF_BREF_2015.pdf | 炼厂气组成、厂内燃烧/销售限定，分离及胺处理接口；仅工艺证据，不移植示意工况、历史数量或配方；independence key: jrc-refining-2015 |
| un-cpc-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, entries12020,33410,33421,33429,34210 (PDF57,156,157,160). https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 分类标题及相邻身份，不支持通用制造方法或整个 33429 的映射；independence key: unsd-cpc3-2025 |
| eu-pef-2021 | official_guidance | European Commission, Commission Recommendation (EU) 2021/2279, Annex I, section 4.5 p.63. https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | 仅通用过程细分和相关物理因果关系原则，产品专门规则优先；不是炼油生产证据、分配份额或完整 PEF 合规声明；independence key: ec-pef-2021 |
| epa-refinery-monitoring-2015 | official_guidance | US EPA, Emissions Estimation Protocol for Petroleum Refineries, Version3, April2015, sections2.1 (PDF24–25),4.1–4.2 (PDF49–51),5.5 (PDF92). https://www.epa.gov/sites/default/files/2020-11/documents/protocol_report_2015.pdf | 仅实际泄漏物种测量、燃烧监测干湿与体积状态兼容、F-factor 的 HHV 限制和硫回收事件范围；不用历史排放因子或默认回收率；independence key: us-epa-refinery-protocol-2015 |
