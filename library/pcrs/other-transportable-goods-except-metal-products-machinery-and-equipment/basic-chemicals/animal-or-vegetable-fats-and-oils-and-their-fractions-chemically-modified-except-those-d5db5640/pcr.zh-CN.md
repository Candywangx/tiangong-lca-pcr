---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.animal-or-vegetable-fats-and-oils-and-their-fractions-chemically-modified-except-those-d5db5640
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 无溶剂过乙酸法生产的散装环氧大豆油

## 1. 范围与适用性

本 PCR 覆盖无溶剂、硫酸催化过乙酸环氧化生产散装液态大豆甘油三酯环氧油的厂门到厂门过程，包括实际水相分离、酸回收、条件性中和、洗涤、干燥、过滤和发货储存。证据证明真实路线，不构成工厂配方或操作规程。各数据集声明实际试剂含量、等级及工艺次序。来源支持化学身份、常规过酸转化、历史无溶剂案例和散装供货，不移植单厂配方或能源数值。

本清单适用于采购电力与厂外供热、实物/非氧化蒸气回收，以及分流液体废物送厂外处理的边界。厂内锅炉、热氧化、处理后废水直接排放或其他化学过程，必须先有据扩展全部原子投入、残渣和排放，才能将本 PCR 用于该系统。任何扩展均分开保留生物与化石碳，不能因温室气体报告口径排除生物 CO2 而从 LCI 删除它。

排除氢化、酯交换、再酯化及反式异构化油脂、未改性大豆油、环氧亚麻籽油及其他油、游离脂肪酸环氧物、脂肪酸酯环氧物、开环多元醇、丙烯酸化油、环氧树脂、配制增塑剂混合物、乳液、非食用混合油脂制剂及过甲酸/酶法/溶剂法路线。CPC 34550 的范围宽于本方法。海珥玛 S-P-06253 描述甲酸路线且列出另一 CPC 代码，因此它是反对将该厂配方扩展至本过乙酸方法的证据，而不是修改 UNSD 分类的依据。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.animal-or-vegetable-fats-and-oils-and-their-fractions-chemically-modified-except-those-d5db5640 |
| classification_refs | CPC 3.0:34550; narrower |
| covered_products | 散装大豆甘油三酯环氧油；声明环氧值/碘值/酸值、水分、等级及含量 |
| excluded_products | 第 1 节所列其他来源油、化学改性、配制混合物和替代路线 |
| representative_product | 未添加配制水或溶剂的散装环氧大豆油 |
| production_route | 过氧化氢与乙酸形成过乙酸，硫酸催化，无溶剂；声明实际阶段次序 |
| market_state | 制造商发货厂界的散装液体；可重复使用罐体不计作产品质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应声明等级的环氧大豆油工业材料；不主张通用下游功能等效性 |
| How much | 1 千克合格散装产品净质量 |
| How well | 供应方/客户标准，声明来源油、路线、环氧氧含量、碘值、酸值、水分及残余过氧化物 |
| How long or cycle | 声明生产报告期内的发货厂界；不设使用寿命默认值 |
| reference_flow_link | `finished_oil` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 经化学改性的动物或植物油脂及其馏分，但经氢化、酯间化、再酯化或氨化的除外，不可食用的动物或植物油脂混合物或制剂 `d2b9b37c-727f-427d-a809-50c97fb48f79` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 大豆甘油三酯来源；无溶剂过乙酸路线；实际催化剂；产品 CAS/等级；脂肪酸与环氧基分布；环氧氧含量；碘值；酸值；水分；残余酸/过氧化物；散装净质量；场址/时间；供应方数量基准 |

广义数据库流包含本化学改性油子集，未限定相反路线。它的身份不证明适用于全部 CPC 34550 产品的平均背景。使用前须匹配实际产品及上下游接口。必需限定信息是强制数据集元数据；未知含量保持未知。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用经校准的发货净称重与库存核对，针对一个确定等级；全部清单行以每 1 kg 参考流归一化。 |
| `commercial_active_basis` | 水性试剂与回收酸 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别保留商业溶液总质量、以含量定义的活性化学品及载水。活性质量等于溶液质量乘实测质量分数；体积计量需实测密度及温度。不能仅凭名称推断原始浓度或参考数量。 |
| `utility_basis` | 电力、间接热与蒸汽 | 原始属性及计量接口 | MJ; kg | 电力使用原始净热值/MJ，1 kWh = 3.6 MJ。热量需净交付有效能源；蒸汽按质量计量并具备压力/温度/干度及兼容供应方。不得把电力产生的热再次相加，也不得重复计算蒸汽质量及供应方供热负荷。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_complete` | 前景 | 纳入全部受控接料、环氧化、分相、回收、实际中和/洗涤、干燥/汽提、过滤、产品储存/装车、冷却/真空、清洗及物理排放控制操作。 | `fraunhofer-igb-epoxidation`; `ashland-peracetic-epoxidation-1967`; `ec-jrc-ofc-bref-2006` |
| `boundary_upstream` | 采购供给与厂外处理 | 将采购材料/公用工程与实际厂外处理链接至代表性的非零供应过程。本厂门到厂门清单本身不是从摇篮到坟墓结果。 | `ec-jrc-ilcd-handbook-2010` |
| `boundary_scope_extension` | 追加操作 | 不同路线、厂内燃烧/氧化、直接废水排放、配制或包装制造须有据扩展；运输与包装同散装参考产品分开披露。 | `ec-jrc-ofc-bref-2006`; `arkema-bulk-epoxidized-soybean-oil-2020` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 合格精炼大豆油及实际试剂/公用工程到达环氧化厂；先前种植、萃取与精炼位于上游 |
| starting_condition_role | 采购技术圈产品，不是无负荷原料 |
| product_classification_scope | CPC 34550 中较窄的过乙酸法环氧大豆油子集；分类仅为映射背景 |
| recursive_input_rule | 内部返工/酸循环为实物账链接，两端转移量相等，不是追加厂外交换。采购同类油需一个上游数据集和有限终止；建模前明确增加其原子输入 |
| upstream_dataset_requirement | 匹配实际油来源/精炼、含量、整份溶液与活性基准、能源接口、地域、时间及处理接收方 |
| disclosure | 等级、路线、阶段次序、含量、公用工程来源、排放控制技术、循环、库存、联产品/废物接收方、分配、排除操作与未解决接口 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `epoxidation_workup` | 过乙酸环氧化与后处理整合单元 | required | 覆盖路线及声明厂界 | 前景单元；保留阶段计量 | 1 kg 参考流 |

实物阶段：接料/储存 → 受控过乙酸环氧化与冷却 → 水油分离 → 实际酸循环/回收和中和/洗涤 → 真空干燥或条件性蒸汽汽提 → 过滤 → 合格散装储存/发货。各阶段分别采集，但合为一个前景过程，使同一成品油 UUID 恰好出现为一个产品输出。中间油、反应水相循环与冷凝水回路的内部账链接两端保留相同转移量。单元内部循环冷却水不反复计作取水。

### 过程：环氧化与后处理整合单元 (`epoxidation_workup`)

#### 输入

##### 产品流

###### 精炼大豆油原料 (`soybean_oil`)

计量厂外精炼大豆油的净投料，声明甘油三酯来源、精炼状态、脂肪酸组成、碘值、水分和游离脂肪酸。内部油料返工计入实物账，不作为第二笔采购投入。

- 选定流：精炼大豆油 `a113893c-4722-4285-b86e-fddcc8b54e46`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 `cp_materials` 记录每 1 kg 参考流对应的交换，执行声明的归一化和接口规则。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`fraunhofer-igb-epoxidation` ; `ashland-peracetic-epoxidation-1967`

###### 过氧化氢氧化剂 (`hydrogen_peroxide`)

实物身份为 H2O2，CAS 7722-84-1；此广义 UUID 未规定浓度。在实物账中分别记录商业溶液质量、实测含量和载水。只有供应方背景明确采用每千克活性 H2O2 时，本行才报告活性 H2O2 质量，否则数量与背景链接待定。不得把该 UUID 解释为整份商业溶液的千克数、推断纯度或密度，也不得为匹配 30% 检索结果而改变实际配方。供应溶液包含的载水不重复计作采购工艺水。 原始记录的 CPC 34140 羧酸分类与过氧化氢名称/CAS 矛盾；应记录该来源元数据冲突并在发布前澄清。有条件化学身份确认不解决待定的供应方数量基准。

- 选定流：过氧化氢 `c566e036-2e0c-4f44-b4c2-08dc00af93c2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 `cp_materials` 记录每 1 kg 参考流对应的交换，执行声明的归一化和接口规则。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`fraunhofer-igb-epoxidation` ; `ashland-peracetic-epoxidation-1967`

###### 新鲜乙酸 (`acetic_acid`)

选定工业合成记录限定纯度不低于 99.8%。仅用于符合条件的新鲜冰乙酸批次；实测含量、整份交付质量与供应方参考基准分别核对。其他含量或回收乙酸水溶液需另核实接口。环氧化反应再生乙酸，不能把总循环量等同于化学计量消耗。

- 选定流：乙酸（醋酸） `2cf748a4-30e8-4efd-aec4-05beb20604dc`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 `cp_materials` 记录每 1 kg 参考流对应的交换，执行声明的归一化和接口规则。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`fraunhofer-igb-epoxidation` ; `ashland-peracetic-epoxidation-1967`

###### 硫酸催化剂 (`sulfuric_acid`)

选定记录限定工业浓硫酸，含量 93–98%。记录实际批次含量和交付溶液质量，并追踪硫在水相、中和与残渣中的去向；不规定催化剂投加默认量。

- 选定流：硫酸 `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 `cp_materials` 记录每 1 kg 参考流对应的交换，执行声明的归一化和接口规则。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`fraunhofer-igb-epoxidation` ; `ashland-peracetic-epoxidation-1967`

###### 条件性中和用氢氧化钙 (`calcium_hydroxide`)

仅当实际精制工艺以工业熟石灰中和残余硫酸时纳入。记录 Ca(OH)2 含量、干试剂质量和另加的浆液水；其他中和试剂须另列交换。历史专利支持该操作，不支持默认投量或通用中和剂选择。

- 选定流：熟石灰 `0ef11ca4-62b6-4a66-b5d9-76d6539ec86e`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 `cp_materials` 记录每 1 kg 参考流对应的交换，执行声明的归一化和接口规则。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`fraunhofer-igb-epoxidation` ; `ashland-peracetic-epoxidation-1967`

###### 去离子工艺水供给 (`process_water`)

以分阶段计量记录厂外供给的去离子水，用于洗涤、配液、清洗和冷却回路补水。不使用通用密度默认值：称量，或依据实测水温和有据可查的密度方法换算体积。排除试剂自带水和循环冷却水总通量。

- 选定流：去离子水 `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 `cp_materials` 记录每 1 kg 参考流对应的交换，执行声明的归一化和接口规则。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`ec-jrc-ofc-bref-2006`

###### 采购低压电力 (`electricity`)

选定记录为用户侧低于 1 千伏的电网平均供电。尽可能分开计量反应搅拌、冷却、真空、分离、过滤、回收、输送和排放控制，扣除无关厂区负荷。原始属性为净热值，不改名为泛化能源属性。保留供应方地域、电压和时间；不兼容供电须另核实接口。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用 `cp_energy` 记录每 1 kg 参考流对应的交换，执行声明的归一化和接口规则。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`ec-jrc-ofc-bref-2006`

###### 采购间接制造用热 (`purchased_heat`)

计量供应方与前景接口之间用于调理、回收和真空干燥的净交付有效热量，扣除回流状态并核验热表校准。广义热身份并不证明净交付基准：链接数量前必须使供应方有效热定义与供回流焓一致。电加热已计入电力，不在本行重复计量。

- 选定流：制造用热能 `e7543af8-5dd2-4066-ad1e-3e2a5b563405`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用 `cp_energy` 记录每 1 kg 参考流对应的交换，执行声明的归一化和接口规则。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`ec-jrc-ofc-bref-2006`

###### 汽提直接注入的工艺蒸汽 (`direct_steam`)

仅当汽提蒸汽实际接触油料时纳入。记录交付蒸汽质量、压力、温度、干度、供应方参考基准和后续冷凝水；不依据 MJ 属性推断交付焓，也不无证据选用限定压力的 UUID。间接热与本行物料蒸汽是不同接口，不重复计入供应方能源。

- 选定流：工艺蒸汽 `41a70607-cc98-4ae8-8556-e33cdf13157e`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 `cp_materials` 记录每 1 kg 参考流对应的交换，执行声明的归一化和接口规则。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`ashland-peracetic-epoxidation-1967`

###### 条件性过滤布更换 (`filter_medium`)

仅把实际厂外更换的过滤布列为输入，记录织物组成、牌号、使用寿命和报告期内消耗干质量。不得以聚丙烯树脂代替制成过滤布。无过滤布的永久可清洗过滤器须有据说明本行不适用。

- 选定流：过滤布 `117b035a-6255-425d-92b9-6c65ff1be2ab`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 `cp_materials` 记录每 1 kg 参考流对应的交换，执行声明的归一化和接口规则。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`fraunhofer-igb-epoxidation` ; `ashland-peracetic-epoxidation-1967`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格散装环氧大豆油 (`finished_oil`)

恰好 1 千克参考流。保留广义数据库名称，以 PCR 限定信息将其收窄为本过乙酸路线环氧化的大豆甘油三酯散装油。记录合格净成品质量和等级；它不是单一纯分子物种，也不是水性活性物溶液。排除包装皮重和单独出售的回收酸。

- 选定流：经化学改性的动物或植物油脂及其馏分，但经氢化、酯间化、再酯化或氨化的除外，不可食用的动物或植物油脂混合物或制剂 `d2b9b37c-727f-427d-a809-50c97fb48f79`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_product`
- 来源：`fraunhofer-igb-epoxidation` ; `arkema-bulk-epoxidized-soybean-oil-2020`

###### 回收乙酸水溶液 (`recovered_acid`)

仅把实际交付厂外买方的回收乙酸水溶液列为联产品。记录净溶液质量、酸含量、残余过氧化物、硫酸、油污染、验收标准和接收方。内部酸循环是计量的内部回路，不是本行输出；限定新鲜合成冰乙酸纯度的 UUID 不是其身份。

- 选定流：回收乙酸水溶液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 `cp_residues` 记录每 1 kg 参考流对应的交换，执行声明的归一化和接口规则。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residues`
- 来源：`ec-jrc-ofc-bref-2006` ; `ashland-peracetic-epoxidation-1967`

##### 废物流

###### 送厂外处理的环氧化水相母液 (`wash_liquor`)

当有证据表明共同收集时，将水相分离、洗涤与捕集冷凝水形成的一股液体废物列为本行。记录溶液质量、体积计量时的密度、酸/过氧化物/油/盐组成、COD 或 TOC、pH、批次覆盖和接收方。实际数据集须分开记录物理上分流的废液。厂外液体转移不同时计作本前景厂界的基本流排放。

- 选定流：送厂外处理的环氧化水相母液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 `cp_residues` 记录每 1 kg 参考流对应的交换，执行声明的归一化和接口规则。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residues`
- 来源：`ec-jrc-ofc-bref-2006`

###### 含油废过滤布 (`filter_waste`)

记录实际离厂废过滤布、滞留油/试剂污染、湿质量、接收方和处理验收条件，与脱离的滤饼分开。清洁机械回收聚丙烯废料不能代替受污染过滤布。

- 选定流：含油废过滤布
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 `cp_residues` 记录每 1 kg 参考流对应的交换，执行声明的归一化和接口规则。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residues`
- 来源：`ec-jrc-ofc-bref-2006`

###### 含油钙盐滤饼 (`filter_residue`)

仅当钙中和与过滤实际产生独立移出的滤饼时纳入；计量水分、油、钙盐和接收条件。不采用泛化金属加工污泥，不在本行重复计入留在过滤布上的油。

- 选定流：含油钙盐滤饼
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 `cp_residues` 记录每 1 kg 参考流对应的交换，执行声明的归一化和接口规则。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residues`
- 来源：`ashland-peracetic-epoxidation-1967` ; `ec-jrc-ofc-bref-2006`

##### 基本流

###### 向室外空气排放乙酸 (`acetic_air`)

CAS 64-19-7；室外空气，未特指。按物种质量计量控制后的有组织与无组织乙酸排放，不采用总有机碳或未分物种的 NMVOC。 依据现场证据判定正排放、不发生或未计量状态；不规定正排放因子。

- 选定流：乙酸 `08a91e70-3ddc-11dd-92c3-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 `cp_emissions` 记录每 1 kg 参考流对应的交换，执行声明的归一化和接口规则。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`ec-jrc-ofc-bref-2006`

###### 向室外空气排放过乙酸 (`peracetic_air`)

CAS 79-21-0；室外空气，未特指。仅计入回收/控制后实际跨越环境边界的残余过乙酸；它不是乙酸，不使用乙酸 UUID。 依据现场证据判定正排放、不发生或未计量状态；不规定正排放因子。

- 选定流：过乙酸 `6cb14c5a-6f8a-4fe3-a04d-c113bdc8b48d`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 `cp_emissions` 记录每 1 kg 参考流对应的交换，执行声明的归一化和接口规则。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`ec-jrc-ofc-bref-2006`

###### 过氧化物分解后向室外空气排放的氧气 (`oxygen_air`)

CAS 7782-44-7；室外空气，未特指。确定实际分解与放空，并区别于留在环氧基团中的过氧化物氧和环境通风氧；不设默认分解份额。 依据现场证据判定正排放、不发生或未计量状态；不规定正排放因子。

- 选定流：氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 `cp_emissions` 记录每 1 kg 参考流对应的交换，执行声明的归一化和接口规则。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`ec-jrc-ofc-bref-2006`

###### 向室外空气排放的水蒸气 (`water_vapour`)

CAS 7732-18-5；室外空气，未特指。仅计量或平衡冷凝后外排的蒸气；捕集冷凝水计入内部回用或液体废物，不同时计入本行和母液。 依据现场证据判定正排放、不发生或未计量状态；不规定正排放因子。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 `cp_emissions` 记录每 1 kg 参考流对应的交换，执行声明的归一化和接口规则。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`ec-jrc-ofc-bref-2006`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_physical_ledger` | 实物质量/水/碳平衡 | 在环境负荷分配前保留完整实测投入、产品/联产品输出、废物、排放与库存变化。不得将实物联产品或内部链接数量机械乘分配份额。 | `ec-jrc-ofc-bref-2006`; `ec-jrc-ilcd-handbook-2010` |
| `allocation_avoidance` | 共享厂区资源与联产品 | 首先依据阶段计量和直接归属批次记录细分。多功能性仍存在时，记录与研究一致的决定性物理关系；仅对未解决部分使用经济分配，并采用同期、特定质量接收方价值及敏感性分析。不设通用质量分配或零负荷联产品默认值。 | `ec-jrc-ilcd-handbook-2010` |
| `allocation_recovery` | 循环/回收酸与不合格油 | 内部循环负荷保留在过程内，不取得避免产品信用。可销售厂外回收酸须具备验收、组成与分配依据；弃置酸或不合格油是废物，不虚构销售。分开保留分配后环境账，披露研究层面的任何替代。 | `ec-jrc-ilcd-handbook-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

各协议保留原始期间总量；下表汇总栏只声明最终的每 1 kg 参考流基准，不表示另作一次除法。仅在 normalize_period 中对经库存核对的完整匹配池应用一次归一化。跨期原料、在制品、返工料及成品的负荷随相应实物库存结转，不能以旧库存发货配当前加工负荷。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_product` | `epoxidation_workup` | finished_oil | 前景实测记录 | 等级；批次；发货皮重/毛重/净重；期初/期末合格产品及不合格/返工料库存；跨期及厂外转移；合格净产量 P；失败/零产出批次标识；环氧氧含量；碘值/酸值；水分；过氧化物；实际产品组成与含量测定不确定性 | 采用经校准净秤/罐体核对及可追溯批次验收试验。针对一个有据等级与完整报告池，核对生产、发货、库存和转移，确定原始合格净产量 P；不得把期初合格库存发货计为新产量，也不得重复计算内部返工。失败与零产出批次保留在同一匹配池内。保留原始千克总量，仅通过 normalize_period 归一化。 | kg | 每批/转移；代表性完整排放轮廓 | 相同声明的完整生产报告期 | 一个场址、一种声明路线/等级 | 每 1 kg 参考流 | 校准、证书、时间戳、原始试验及核对；记录缺失数据 |
| `cp_materials` | `epoxidation_workup` | 试剂与水投入 | 前景实测记录 | 批次；供应方；原始参考基准；商业溶液质量；活性含量；载水；密度/温度；厂外接收与投料；阶段；循环/返工转移；期初/期末库存；残余试剂物种与反应程度证据；蒸汽压力/温度/干度 | 采用经校准称重/流量计、分析含量、供应方证书与完整阶段记录。对与 P 相同的生产池保留经库存核对的可归属物料原始总量，包括失败批次、零产出批次、清洗与返工。商业溶液质量、活性量和载水分开记录；内部转移保持两端相等的账内链接。本协议不除以产量；仅应用一次 normalize_period。 | kg | 每批/转移；代表性完整排放轮廓 | 相同声明的完整生产报告期 | 一个场址、一种声明路线/等级 | 每 1 kg 参考流 | 校准、证书、时间戳、原始试验及核对；记录缺失数据 |
| `cp_energy` | `epoxidation_workup` | 电力与热 | 前景实测记录 | 表计；阶段；时段；电压；供应方；供回流流量与焓；热损失；共享负荷；能源参考基准 | 采用经校准电力与净热表计，覆盖与 P 相同的完整生产池，包括失败/零产出批次、返工、清洗和换批。保留原始总量与有据因果负荷归属；保留供应方参考数量及供回热状态。按 3.6 MJ/kWh 将 kWh 换为 MJ 一次，再仅应用一次 normalize_period；本协议不除以产量。 | MJ | 每批/转移；代表性完整排放轮廓 | 相同声明的完整生产报告期 | 一个场址、一种声明路线/等级 | 每 1 kg 参考流 | 校准、证书、时间戳、原始试验及核对；记录缺失数据 |
| `cp_residues` | `epoxidation_workup` | 联产品与分流废物 | 前景实测记录 | 产生阶段；接收方；净湿质量；密度；水分；各酸/过氧化物/油/盐组成与含量测定不确定性；残余 H2O2/过酸；有机物料与钙/硫物种；滤布/滤饼区分；作为综合指标的 COD/TOC；pH；期初/期末库存；转移及实际反应/副产物证据 | 针对与 P 相同的完整生产池，采用经校准转移称量、代表性物种/组成采样和实际处理/销售验收；追踪失败批次、返工和废物转移凭据。保留联产品与分流废物原始总量及库存变化、分配前完整实物量，并另记内部转移。本协议不除以产量；仅应用一次 normalize_period。 | kg | 每批/转移；代表性完整排放轮廓 | 相同声明的完整生产报告期 | 一个场址、一种声明路线/等级 | 每 1 kg 参考流 | 校准、证书、时间戳、原始试验及核对；记录缺失数据 |
| `cp_emissions` | `epoxidation_workup` | 室外物种排放 | 前景实测记录 | 物种/CAS；有组织/无组织源；阶段；物种质量浓度或经核实换算；气体体积流量率或已积分气体体积；时段边界与时长；温度/压力；湿干基准；相关时的入口物种背景；控制捕集；冷凝水；不确定性；不发生/发生/未计量状态 | 针对与 P 相同的完整生产池进行物种分辨时段采样与匹配气体体积监测，包括失败/零产出批次、返工、反应、转移、回收、干燥和清洗。纳入有独立证据的无组织排放及有独立依据的水/过氧化物物种平衡。应用 species_integration 得到一次原始厂外排放物种质量；已捕集物和入口环境背景不是过程排放。保留原始物种总量与计量缺口；仅通过 normalize_period 归一化。 | kg | 每批/转移；代表性完整排放轮廓 | 相同声明的完整生产报告期 | 一个场址、一种声明路线/等级 | 每 1 kg 参考流 | 校准、证书、时间戳、原始试验及核对；记录缺失数据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_period` | 所有清单行 | 对每个非参考交换 i，仅计算一次 q_i = Q_i / P。Q_i 为完整报告池中经库存核对的原始可归属量，尚未作每千克除法；P 为 cp_product 采集的同等级同报告池合格净产量，单位 kg。可归属总量包括全部匹配的失败/零产出批次、不合格产出、返工、清洗及启停，不得仅选成功批次。内部转移不构成新厂外交换。P 为零时，每千克结果无定义：保留总量，纳入具有正合格产出的有据匹配池，或报告不可用；不得报为零负荷或除以零。finished_oil 保持恰好 1 kg。保留联产品/废物完整实物量；环境负荷分配在核对后另账处理。 各协议保留原始期间总量；下表汇总栏只声明最终的每 1 kg 参考流基准，不表示另作一次除法。仅在 normalize_period 中对经库存核对的完整匹配池应用一次归一化。跨期原料、在制品、返工料及成品的负荷随相应实物库存结转，不能以旧库存发货配当前加工负荷。 | cp_product; cp_materials; cp_energy; cp_residues; cp_emissions | 每 1 kg 参考流交换量，或在 P 为零时明确不可用 | `ec-jrc-ilcd-handbook-2010` |
| `assay_accounting` | hydrogen_peroxide, acetic_acid, sulfuric_acid, recovered_acid | 活性质量 = 实测商业溶液质量 × 实测活性质量分数；载水单独核对。仅在供应方具备活性千克接口时对 H2O2 使用活性归一化，否则保留待定链接。 | cp_materials; cp_residues | 分开的溶液/活性物/水数量 | `ec-jrc-ofc-bref-2006` |
| `species_integration` | acetic_air, peracetic_air, oxygen_air, water_vapour | 对匹配的物种质量浓度 C_i(t) 与气体体积流量率 Q(t) 作时间积分，获得原始物种质量。已测时段气体体积 V_j 时，在明确单位换算后汇总流量加权浓度 C_i,j 与 V_j 的乘积；V_j 已含时长，不得再次乘时间。仅在代表性恒定或兼容时段平均基准有据时使用浓度乘流量率乘时段时长。温度、压力和湿干基准保持一致，过程生成氧/水与有独立依据的入口背景分开。有独立证据的无组织排放仅加一次；已捕集物不计排放。无经核实物种分配与换算，按碳计浓度不等于物种质量。 | cp_emissions | normalize_period 之前可归属的原始厂外排放物种质量 | `ec-jrc-ofc-bref-2006` |
| `physical_reconciliation` | 未分配实物账 | 未分配实物账中，期初库存加全部厂外实物投入等于期末库存加全部厂外实物输出，并保留不确定性；总质量及各相关元素守恒。对各反应性物种另行采用期初库存加厂外投入加实际生成等于期末库存加厂外输出加实际消耗。依据实际场址含量/物种分析，以及有独立依据的反应程度模型或直接计量，分别确定过氧化物/过酸反应与分解、油中保留的环氧氧、水生成/消耗、酸再生/中和以及有机副产物生成/消耗。商业载水、内部循环、联产品、废物和蒸气分开记录。不得由闭合残差、仅凭 COD/TOC、假定完全转化、默认分解率/收率或固定成品/原料比反推生成/消耗；未解决的物种平衡保持未解决。 | cp_product; cp_materials; cp_residues; cp_emissions | 分开的总质量/元素与反应性物种平衡、证据及残差不确定性 | `ec-jrc-ofc-bref-2006`; `fraunhofer-igb-epoxidation` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 全部接口 | 核实实际批次/SKU、含量、原始字段限定、CAS、组成、参考属性/单位和供/接收方兼容性。流 UUID 本身不证明前景数量或兼容背景。 | cp_materials; cp_product; cp_residues |
| `dq_completeness` | 完整时间与过程 | 保留不合格产出、清洗、启停、回收和库存变化。缺失排放/含量为未计量，不是零；发布数据集前补齐实际发生而缺列的每个原子流。 | cp_product; cp_emissions |
| `dq_balance` | 实物与环境账 | 分开保留实测平衡与分配后环境负荷；披露计量不确定性与未解决平衡残差，不强行闭合。 | cp_materials; cp_residues; cp_energy |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | 数据集参考 | 要求恰好一个 1 kg 的 finished_oil 产品输出以及完整产品/路线限定；广义名称不能把本 PCR 扩展至混合制剂或排除的改性油。 | `unsd-cpc-3-2025`; `fraunhofer-igb-epoxidation` |
| `validate_interfaces` | 清单 | 拒绝无依据含量、纯物/溶液换算、等级/路线/CAS/介质矛盾和未核实供应方数量基准。空 UUID 与未计量排放保留为显式审查事项；不以邻近产品或错误环境介质替代。 | `ec-jrc-ilcd-handbook-2010` |
| `validate_accounting` | 平衡与分配 | 核查内部转移两端相等；分配前产品/联产品/废物及库存完整实物质量；包含失败/零产出/返工负荷的完整生产池；原始 Q_i 与合格 P 仅归一化一次；已积分气体体积不再乘时长；守恒总质量/元素与具独立证据的反应生成/消耗分开；商业载水及双语分母一致。缺失数量或物种证据保持不可用/需审查，不借用配方、收率、能源或排放默认值。 | `ec-jrc-ofc-bref-2006`; `ec-jrc-ilcd-handbook-2010` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground process dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 供方接口完整且实际计量齐备的覆盖场址/等级/路线；需审查的候选指导 |
| excluded_use | 全部 CPC 34550 覆盖；食品等效；由化学品 UUID 推断整份商业 H2O2 溶液；替代反应路线；仅凭本单元作全生命周期或比较主张 |
| required_metadata | 参考限定；实际厂路线；含量与净质量基准；来源时段；原始供方；完整实物平衡；分配与扩展边界 |
| required_quality_disclosure | 缺失 UUID、供方数量待定、检出限、计量、平衡残差、时间覆盖、方法与翻译成熟度 |
| update_trigger | 油来源、催化剂、酸路线、配方、含量、热接口、处理、接收方改变或出现新权威证据 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc-3-2025 | official_guidance | UNSD CPC 3.0 Structure, 30 June 2025, subclass 34550. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 分类措辞及明确排除；较窄映射为候选解释 |
| fraunhofer-igb-epoxidation | official_guidance | Fraunhofer IGB, Preparation of triglyceride and fatty acid epoxides. https://www.igb.fraunhofer.de/en/research/chemical-and-biotechnological-processes/industrial-biotechnology/bioprocess-engineering/establishment-and-scale-up-of-technical-enzyme-processes/preparation-of-triglyceride-and-fatty-acid-epoxides.html | 常规过酸化学、副反应、盐负荷与产品表征；不提供过程默认数量 |
| ashland-peracetic-epoxidation-1967 | literature | W. H. French / Ashland Oil & Refining Company, US3360531A, 26 December 1967, columns 9–10 Table I solvent-free cases and conventional Run 1; workup discussed at column 8–9. https://patents.google.com/patent/US3360531A/en | 仅支持原始历史实物路线/循环/后处理；示例配方与性能不是默认量或操作规程 |
| ec-jrc-ofc-bref-2006 | official_guidance | European Commission, Organic Fine Chemicals BREF, August 2006, §4.3.1.4 printed 183 / PDF 213; §§5.2.1.1.2–5.2.1.1.5 printed 380–382 / PDF 410–412. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/ofc_bref_0806.pdf | 一般化工厂实物平衡及废物/排放计量；不提供单厂配方或排放默认数值 |
| ec-jrc-ilcd-handbook-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA Detailed guidance, March 2010, §7.9.3 printed 257–258 / PDF 277–278. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 细分、决定性物理因果及剩余经济分配；保留研究背景 |
| arkema-bulk-epoxidized-soybean-oil-2020 | literature | Arkema USA, 23 April 2020, Vikoflex/Vikolox distribution and bulk delivery announcement. https://www.arkema.com/usa/en/media/news/non-global/countries/americas/20200423-brenntag-distribu/ | 独立生产者确认散装环氧大豆油身份/交付；不证明其工厂配方 |
| hairma-esbo-epd-2022 | literature | Hairma (Nantong) Technology, EPD S-P-06253, 17 May 2022, PDF pages 3, 5–8 / printed pages 2, 4–7. https://www.environdec.com/library/epd6253 | 反证：甲酸路线、单厂清单及不同分类标签；不移植至本过乙酸方法 |
