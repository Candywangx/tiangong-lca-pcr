---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.glycerol
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 油脂裂解粗甘油制散装精制甘油

## 1. 范围与适用性

本方法适用于天然油脂裂解来源、经过预处理和浓缩的粗甘油，通过真空蒸馏、蒸汽汽提、活性炭脱色及精滤制成的散装液态精制甘油。甘油为单一物种（CAS 56-81-5）；供货粗混合物与验收精制商业物料具有不同的水分和杂质状态。不把来源中的配方、纯度、剂量、收率、温度、压力、排放因子或公用工程数量用作默认值。（`ifc-oleochemicals-2007`；`efisc-oilseed-refining-v3-1`；`cpm-glycerin-refining-2024`）

排除生物柴油或酯交换粗甘油、皂液粗甘油、合成丙烯路线、仅离子交换的净化、残液再生、甘油配方溶液、零售包装及出售其他技术级甘油联产品的场址。这些情况须有相容的前景扩展及分配审查。CPC 34570宽于本适用范围。现有脂肪酸水解PCR明确排除甘油浓缩和精制，可提供经限定的上游甜水接口，不能替代本成品方法。

本厂界接收经过预处理的浓缩粗料及外部公用工程，止于验收散装装车以及实际废物和空气排放。原料浓缩及预处理仍须有上游清单。本基础画像无厂内燃烧、离子交换再生或废水处理，外包处理链接实际接收方。若存在这些工序，符合本方法前须将实际化学品、燃料、制冷剂、处理残余及直接排放物种逐一扩展为经审查的原子交换。现场数量缺失是采集要求，不是虚构实测值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.glycerol |
| classification_refs | CPC 3.0:34570；narrower |
| covered_products | 油脂裂解粗料制验收散装精制甘油 |
| excluded_products | 其他原料路线、离子交换、残液回收、配方制品、零售包装及外售技术级联产品 |
| representative_product | 一个经实际计量的精制甘油SKU；KLK精制甘油系列仅证明商业存在，不是指定SKU或场址声明 |
| production_route | 粗料接收→可选氢氧化钠调理→真空及残脚蒸馏与内部回收→汽提→活性炭脱色→过滤冷却→散装装车 |
| market_state | 实测装车条件下的液体，净商业质量含实际残余水和杂质 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应具有明确限定信息的精制甘油化工原料 |
| How much | 1 千克验收散装产品净质量 |
| How well | 实际SKU验收：甘油含量及湿干基准、水分、非甘油有机物、灰分或盐、酸度、色度及相关污染物 |
| How long or cycle | 一个声明的代表性生产及出厂周期，含启停、返工与库存变化；无使用寿命基准 |
| reference_flow_link | refined_glycerol |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 甘油 `32d6a3cd-fb89-4a48-9594-bb240083042e` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 油脂裂解来源及上游预处理浓缩；实际供应方、SKU和批次；真空脱色路线；装车净质量；实测甘油、水及杂质组成和分析基准；牌号验收；碳来源；场址周期；公用工程状态及供应方；废物接收方；返工库存；分配边界 |

上述限定信息须在具体数据集元数据或等效数据包字段中声明。干基含量不等于供货湿质量，须保留实测水分并显式换算。广义产品UUID标识本限定成品子集，不提供通用收率、水分、供应方或背景数据集。一个前景单元保留阶段记录，恰有一个参考产品输出refined_glycerol。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | 质量 | kg | 参考数量为经校准称重或储罐质量记录得到的1千克验收散装物料净质量，排除容器；cp_release提供每行分母。 |
| composition_basis | refined_glycerol; crude_glycerine; caustic_solution | Mass | kg | 整份供货混合物质量与甘油或氢氧化钠活性质量、水和干物质分开。干基甘油分数用同批实测水分换算，组分是分析账，不是附加交换。 |
| electricity_basis | electricity | Net calorific value | MJ | 保留经核验的参考属性及供应消费边界。仪表kWh按3.6 MJ/kWh换算，不用燃料热值计算电能。 |
| steam_basis | heating_steam; stripping_steam; returned_condensate | Mass | kg | 间接供汽、直接注入及外部返凝水质量分开；热量链接前核对实测状态、焓基准及供应方数量定义。kg或MJ本身均不证明可用交付热量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收经过预处理和浓缩的油脂裂解粗甘油及外部公用工程 |
| starting_condition_role | foreground_gate_input |
| product_classification_scope | CPC 34570中油脂裂解真空精制子集，不声明整叶覆盖 |
| recursive_input_rule | 本厂界内同类返工为内部流；外购甘油保留一个投入及其相容上游数据集和实际状态，不替代粗料 |
| upstream_dataset_requirement | 相容原料数据集包含天然油脂供应、联合水解分配、甜水浓缩及预处理，并声明供方地理周期和湿混合物参考基准；公用工程及外送废物需相容供方或接收方数据集 |
| disclosure | 起始状态、未纳入的上游阶段、供方链接、阶段仪表、内部转移、处理厂界、实际气水去向、能源库存核对及排除项 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_gate | refining | 纳入接收、实际调理、蒸馏及残脚回收、汽提、脱色、精滤、冷却、储存装车、回收洗涤、启停、清洗以及归属于产品的维护消耗。阶段计量分别保留，内部转移两端同量。 | `cpm-glycerin-refining-2024`; `ifc-oleochemicals-2007` |
| b_upstream | crude_glycerine | 不能因粗甘油名称或生物来源把它设为无负荷废物。上游联合生产分配及浓缩预处理清单须保留一次；脂肪酸甜水数据集本身不能证明接收的浓缩原料。 | `efisc-oilseed-refining-v3-1`; `eu-pef-multifunctionality-2021` |
| b_emissions | refining | 建立冷凝、真空及排气、清洗和废物出口的实际流图与物种清单。外送废水为废物转移，处理排放归属所链接的处理边界。若存在直接排口、厂内燃烧或处理，须按确切受纳介质、每项实际物种及明确数量扩展清单。 | `jrc-cww-bref-2016`; `ifc-oleochemicals-2007` |
| b_carbon | all inventory rows | 依据来源证据保留原料、炭介质、成品、残余和实际排放中的实测生物及化石碳。不得因温室气体统计口径对生物CO2另行处理而删除LCI中的实际生物CO2。捕集碳、有机碳及CO2质量不同，不假定转换或碳中性。 | `jrc-cww-bref-2016` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| refining | 甘油精制至散装装车 | required | 声明路线全部场址 | foreground | refined_glycerol |

一个聚合前景单元包含整个实物精制路线及内部甘油回流。阶段记录分别覆盖主蒸馏、残脚蒸馏、汽提、脱色、过滤、冷却和装车。未分配的质量、水和碳账与环境负荷账独立保留。额外实际化学品、滤材聚合物、包装、制冷或直接排放物种须逐一增列，不隐藏于下列卡片。

### 过程：甘油精制至散装装车（`refining`）

#### 输入

##### 产品流

###### 油脂裂解来源的预处理浓缩粗甘油（`crude_glycerine`）

接收上游甜水浓缩和预处理后的整份含水粗甘油混合物。分别分析甘油、水、盐、皂、脂肪酸、残留甘油酯及非甘油有机物，不把组分重复列为交换。纯甘油不能代表整份原料；实际起始状态必须附带上游浓缩及预处理负荷。

- 选定流：油脂裂解来源的预处理浓缩粗甘油
- 流属性/单位：质量 / kg
- 数量规则：每 1 kg 参考流的实测归属数量；cp_feed。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed`
- 来源：`ifc-oleochemicals-2007`; `efisc-oilseed-refining-v3-1`

###### 原料中和用氢氧化钠水溶液（`caustic_solution`）

仅在实际中和或清洗加碱时纳入。称量整份供货溶液，并测定氢氧化钠质量分数及载水。不指定30%、50%、药用蒸馏水路线或固体烧碱默认值；这些限定记录均不能证明尚未明确的实际溶液身份。

- 选定流：原料中和用氢氧化钠水溶液
- 流属性/单位：质量 / kg
- 数量规则：每 1 kg 参考流的实测归属数量；cp_materials。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`cpm-glycerin-refining-2024`

###### 活性炭（`activated_carbon`）

用于液相甘油脱色的活性炭。记录床层装填及更换、牌号、原料来源、水分、再生历史和实际供应方，不假定煤质或生物质来源。原记录路线字段写作吸收而物料说明描述吸附；仅保留广义物料身份，要求来源及供应方澄清。

- 选定流：活性炭 `5cad53b5-252a-4e2f-8197-8be465707405`
- 流属性/单位：质量 / kg
- 数量规则：每 1 kg 参考流的实测归属数量；cp_materials。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`cpm-glycerin-refining-2024`; `ifc-oleochemicals-2007`

###### 交流电（`electricity`）

仅限中国（CN）1–35千伏电网平均消费端供电；选定原生记录的locationOfSupply为CN。其他地理须另行核验相容流及供方。计量泵、真空设备、电加热器（若使用）、冷却及装车用电；供应地理及损耗边界须与背景相符。其他电压、自备发电或合同供电须另行核验流，不扩用本身份。保留数据库参考属性净热值；电能并非燃料燃烧热值。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：每 1 kg 参考流的实测归属数量；cp_utilities。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`ifc-oleochemicals-2007`

###### 甘油精制间接加热器供汽（`heating_steam`）

记录实际交付蒸汽质量、绝对压力、温度、相态或干度及供应方状态定义。固定11.0 MPaG或0.45 MPaG流不能证明尚未测定的供汽；通用MJ热量也不能证明净交付热量。间接冷凝供汽与直接汽提蒸汽分开计量。

- 选定流：甘油精制间接加热器供汽
- 流属性/单位：质量 / kg
- 数量规则：每 1 kg 参考流的实测归属数量；cp_steam。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam`
- 来源：`cpm-glycerin-refining-2024`; `ifc-oleochemicals-2007`

###### 工艺蒸汽（`stripping_steam`）

在本流化工行业汽提身份范围内，记录实际注入甘油汽提或脱臭的蒸汽。采集质量、压力、温度、干度及直接注入去向。其水量进入过程水衡算，不是第二笔间接供热交换，也不自动换算为MJ。实际压力及供应方数量兼容性仍是具体数据集要求。

- 选定流：工艺蒸汽 `41a70607-cc98-4ae8-8556-e33cdf13157e`
- 流属性/单位：质量 / kg
- 数量规则：每 1 kg 参考流的实测归属数量；cp_steam。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam`
- 来源：`cpm-glycerin-refining-2024`

###### 工艺用水（`makeup_water`）

记录跨厂界进入洗涤、清洗及冷却系统补水（若有）的处理水。采集处理工艺、水质和去向分表总量；内部循环水不重复计为新水。体积仪表用实测温度和组成对应密度换算，不把数据库次级质量系数当密度。直接取用自然资源水须另核资源流及处理清单。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：每 1 kg 参考流的实测归属数量；cp_utilities。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`ifc-oleochemicals-2007`

###### 聚丙烯液相精滤滤材（`filter_medium`）

仅在实际精滤袋或滤材确认为聚丙烯时适用。称量更换滤材，排除壳体，保留SKU、聚合物及使用记录。包装编织袋不是液相滤材；其他实际聚合物应另列经核验的原子行，不默认为本行已覆盖。

- 选定流：聚丙烯液相精滤滤材
- 流属性/单位：质量 / kg
- 数量规则：每 1 kg 参考流的实测归属数量；cp_materials。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`cpm-glycerin-refining-2024`

#### 输出

##### 产品流

###### 甘油（`refined_glycerol`）

蒸馏、活性炭脱色、过滤并装车后的验收散装精制产品。CAS 56-81-5广义身份无相反原料或路线限定，在此以声明的油脂裂解路线约束。商业净质量包含实测残余水及杂质，不等同于1千克纯甘油活性物。

- 选定流：甘油 `32d6a3cd-fb89-4a48-9594-bb240083042e`
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release`
- 来源：`cpm-glycerin-refining-2024`; `klk-personal-care-2025`

###### 返回外部供汽方的冷凝水（`returned_condensate`）

仅计间接加热实际跨界返回供应方的冷凝水，记录质量、返回焓或状态、去向及供应合同。厂内冷凝水回用仍为内部流。不得用牛奶蒸发水、购入水或另一蒸汽身份代表返凝水，也不同时列为废水。

- 选定流：返回外部供汽方的冷凝水
- 流属性/单位：质量 / kg
- 数量规则：每 1 kg 参考流的实测归属数量；cp_steam。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam`
- 来源：`ifc-oleochemicals-2007`

##### 废物流

###### 甘油残脚蒸馏废重残液（`still_residue`）

实际回收甘油后最终弃置的重残液；测定湿质量、残留甘油和水、盐、皂及脂肪性物质并记录处理接收方。内部残脚回流不列外排。乙酸异丁酯蒸馏残液组成相反，不予采用。

- 选定流：甘油残脚蒸馏废重残液
- 流属性/单位：质量 / kg
- 数量规则：每 1 kg 参考流的实测归属数量；cp_wastes。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastes`
- 来源：`cpm-glycerin-refining-2024`

###### 废活性炭（`spent_carbon`）

甘油脱色后跨界输出的活性炭，包含实际水分及吸附物。记录实际甘油洗涤回收、碳来源、危险性质及接收或再生路线；返回厂内的回收洗液不是额外产品输出。

- 选定流：废活性炭 `aff33890-3f08-40f9-9310-a7f77213de05`
- 流属性/单位：质量 / kg
- 数量规则：每 1 kg 参考流的实测归属数量；cp_wastes。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastes`
- 来源：`ifc-oleochemicals-2007`

###### 外送处理的甘油精制废水（`offsite_effluent`）

记录冷凝器、洗涤器、真空系统及清洗产生的实际外送合流废水，扣除有记录的厂内回收。即使外送前混合，各支流仍须保留独立计量及处理要求。采集水、甘油、脂肪性物质、盐、pH、温度、COD或TOC以及接收条件。本行是废物转移，不是淡水排放或纯水流；电解锰渣及硅片废水身份不兼容。

- 选定流：外送处理的甘油精制废水
- 流属性/单位：质量 / kg
- 数量规则：每 1 kg 参考流的实测归属数量；cp_effluent。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent`
- 来源：`ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### 弃置的不合格甘油混合物（`discarded_glycerine`）

仅计最终弃置的不合格物料，逐批计量并保留实际去向。返工物料留在聚合单元内部，记录期末库存。出售技术级甘油联产品超出本单产品画像，须经审查扩展为多输出模型，不得隐藏第二个已知甘油产品输出。

- 选定流：弃置的不合格甘油混合物
- 流属性/单位：质量 / kg
- 数量规则：每 1 kg 参考流的实测归属数量；cp_wastes。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastes`
- 来源：`cpm-glycerin-refining-2024`

###### 废聚丙烯液相精滤滤材（`spent_filter`）

仅计filter_medium产生并外送的废滤材，实测残留甘油、炭细粉及水分，与散装废炭和蒸馏残液分开。记录聚合物、接收设施及处置或再生条件；包装废物或其他过滤残渣不能证明本身份。

- 选定流：废聚丙烯液相精滤滤材
- 流属性/单位：质量 / kg
- 数量规则：每 1 kg 参考流的实测归属数量；cp_wastes。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastes`
- 来源：`cpm-glycerin-refining-2024`

##### 基本流

###### 甘油（`glycerol_air`）

仅计捕集后实际进入室外空气未特指子介质的甘油蒸气或雾。对真空尾气及相关排气口进行物种特定的净排放测量，并覆盖运行变化。已捕集甘油及室内职业暴露是不同数量；颗粒物内已计的甘油质量不得再重复累加为同一颗粒物质量。

- 选定流：甘油 `08a91e70-3ddc-11dd-9510-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：每 1 kg 参考流的实测归属数量；cp_air。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### 丙烯醛（`acrolein_air`）

仅在场址挥发性有机物分物种检测识别实际室外排放含CAS 107-02-8丙烯醛时纳入，不预设正排放量、收率或生成温度。计量控制后的排放，保留检出限，区分其他醛及捕集部分，不用校正流、室内或水介质流替代。

- 选定流：丙烯醛 `08a91e70-3ddc-11dd-91a4-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：每 1 kg 参考流的实测归属数量；cp_air。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`jrc-cww-bref-2016`

###### 水蒸气（`water_vapour_air`）

实际未捕集且进入室外空气未特指子介质的水蒸气。用一致水衡算或明示湿干、温压基准的气体含湿量及流量求得。随废水外送的冷凝水、供应方返凝水及内部回收水不是本排放。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：每 1 kg 参考流的实测归属数量；cp_air。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`cpm-glycerin-refining-2024`; `jrc-cww-bref-2016`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_single | refining | 基础画像只有一个可销售精制产品，精制负荷归于该产品。返工、捕集轻馏分、回收残脚和期末库存不是虚构的销售联产品，须计入处理及库存变化。外返冷凝水是已核对供应边界的公用工程返回，不自动给予抵扣。 | `cpm-glycerin-refining-2024`; `eu-pef-multifunctionality-2021` |
| a_joint | crude_glycerine | 上游水解及任何经审查的多输出扩展须先考察细分或系统扩展，再采用有依据的物理关系，最后采用如实际出厂经济价值等其他有依据关系。记录目标方法、理由、实测输出基准、价格及敏感性，不使用通用甘油份额或免费副产品假设。 | `eu-pef-multifunctionality-2021` |
| a_ledgers | all inventory rows | 未分配过程图及质量、水、碳账保留每笔完整实测实物输出及两端同量内部转移。仅在独立链接的负荷账内分配可归属的环境负荷池，不把联产品实物质量乘分配份额。废物处理按实际组成去向链接一次，不假设替代抵扣。 | `eu-pef-multifunctionality-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | refining | refined_glycerol | 装车及实验室记录 | SKU；批次；装车净质量；含量湿干基准；水；非甘油有机物；盐或灰分；验收；退回/再次验收；成品及在制品期初期末库存；库存结转负荷及生产历史 | 经校准秤或储罐质量与装车核对；代表性采样，记录经确认的含量水分方法及不确定性；保留证书和牌号要求 | kg | 每批及每次装车 | 完整声明周期，含启停、清洗、返工及库存 | 同一场址、路线及仪表边界 | 每 1 kg 参考流 | 校准、样本链、供方证据、守恒核对及不确定性 |
| cp_feed | refining | crude_glycerine | 接收及分析记录 | 供应方；油脂裂解路线；上游浓缩预处理；湿质量；甘油、水、非甘油有机物、盐、皂及脂肪组成；批次；库存 | 称量接收原料并逐批采样，保留经确认的分析定义；按同一供货混合物基准核对进料、储罐及上游负荷数据集 | kg | 每次接收及每批 | 完整声明周期，含启停、清洗、返工及库存 | 同一场址、路线及仪表边界 | 每 1 kg 参考流 | 校准、样本链、供方证据、守恒核对及不确定性 |
| cp_materials | refining | caustic_solution; activated_carbon; filter_medium | 采购及使用记录 | SKU；数量；浓度水分；聚合物牌号；炭原料；床层装填；更换；退回；库存；实际去向；中和或其他已观察转化的实际反应路径及独立实测反应物/产物数量 | 按单一物料称量或核对库存发票；溶液活性质量单独计算；按实际监测生产分摊更换周期，不假定寿命 | kg | 每批或每次更换 | 完整声明周期，含启停、清洗、返工及库存 | 同一场址、路线及仪表边界 | 每 1 kg 参考流 | 校准、样本链、供方证据、守恒核对及不确定性 |
| cp_utilities | refining | electricity; makeup_water | 阶段仪表记录 | 仪表ID；电压；供方地理损耗；kWh或MJ；水质量、体积、密度温度；去向；时间；工况 | 真空、泵、冷却、清洗及装车的经校准同步仪表总量；新水与循环水分开；核对全厂及阶段计量，不重复累加 | MJ; kg | 连续及期末核对 | 完整声明周期，含启停、清洗、返工及库存 | 同一场址、路线及仪表边界 | 每 1 kg 参考流 | 校准、样本链、供方证据、守恒核对及不确定性 |
| cp_steam | refining | heating_steam; stripping_steam; returned_condensate | 供应方及阶段计量记录 | 供汽、注入及返回独立质量；绝对压力；温度；相态干度；供应方焓和基准；状态方法；闪蒸损失；合同参考基准 | 经校准质量仪表及可追溯供方状态焓记录；核对间接加热返回及直接汽提去向。状态或净交付热量定义未知时不建立热基供方链接 | kg; kJ/kg | 连续及供方结算 | 完整声明周期，含启停、清洗、返工及库存 | 同一场址、路线及仪表边界 | 每 1 kg 参考流 | 校准、样本链、供方证据、守恒核对及不确定性 |
| cp_wastes | refining | still_residue; spent_carbon; discarded_glycerine; spent_filter | 称重、组成及接收记录 | 流ID；湿干质量；甘油、水、盐、碳及聚合物组成；批次；来源；接收方；处理；废物状态；返工；库存 | 分别称量废物出口并采样，核对转移单与内部回收；记录无外送时段及实际去向，缺项须有不存在的证据 | kg | 每次外送及代表性采样 | 完整声明周期，含启停、清洗、返工及库存 | 同一场址、路线及仪表边界 | 每 1 kg 参考流 | 校准、样本链、供方证据、守恒核对及不确定性 |
| cp_effluent | refining | offsite_effluent | 流量比例采样及外送记录 | 支流ID；质量体积密度；流量；pH；温度；甘油脂肪组成；盐；COD或TOC及分析基准；接收方；回收；采样时段 | 冷凝、真空洗涤及清洗的匹配流量和代表性浓度样本；按实测密度将体积转质量；分析污染负荷解释本废物，不另计直接排放 | kg; m3; mg/L | 连续流量及代表性运行清洗采样 | 完整声明周期，含启停、清洗、返工及库存 | 同一场址、路线及仪表边界 | 每 1 kg 参考流 | 校准、样本链、供方证据、守恒核对及不确定性 |
| cp_air | refining | glycerol_air; acrolein_air; water_vapour_air | 尾气分物种监测 | 排口；室外子介质；气流；温压；湿干基准；物种浓度；雾及蒸气捕集；含湿量；运行时长；检出限；控制性能 | 以经确认的分物种采样测量相关控制后排口及逸散；匹配流量浓度时间基准；室内暴露或已捕集液体不列室外排放，以水衡算核验蒸气 | kg; m3; mg/m3 | 代表性稳态、启停及清洗时段 | 完整声明周期，含启停、清洗、返工及库存 | 同一场址、路线及仪表边界 | 每 1 kg 参考流 | 校准、样本链、供方证据、守恒核对及不确定性 |

归一化账之外保留原始周期总量、期初期末库存、内部转移日志及阶段归属验收产出的记录。cp_release提供同周期验收净产出B。库存变化归属须有生产历史，不把不匹配生产周期直接除以出厂量。实验室验收用实际供需方规格及经确认的含量、水分、盐和非甘油有机物方法，声明样品处理及不确定性，绝不把目录限值当实测值。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_normalized | all inventory rows | N = sum(Q) / B；先汇总同一完整声明路线/状态/SKU周期的原始实物交换数量，包括可归属的失败或零产出区间、启停、清洗及返工，再仅相除一次。不得平均成功区间的单位比值或再次归一化每千克值。B必须为正，是cp_release提供、经退回、再次验收、成品库存及在制品核对后仅确认一次的验收散装甘油净千克数。内部返工一轮不是新增验收产出。保留原始实物总量，另将库存结转负荷与同一验收产出核对；负荷归属调整不得删除实物交换。B为零时保留总量并披露无单位结果，不得相除或删除负荷。 | Q; B; cp_release | 每 1 kg 参考流的交换数量 | `jrc-cww-bref-2016` |
| calc_composition | crude_glycerine; caustic_solution; refined_glycerol | component_mass = supplied_mass × measured_wet_fraction；仅当两项分析具有同一代表性样本基准时，dry_glycerol_fraction × (1 − measured_water_fraction)才给出湿基甘油分数。水、非甘油有机物、盐及活性物账不在母流质量之外另增交换。 | supplied_mass; measured_wet_fraction; dry_glycerol_fraction; measured_water_fraction | 组分及水账 | `efisc-oilseed-refining-v3-1` |
| calc_air_load | glycerol_air; acrolein_air | load_kg = sum(C_mg_per_m3 × gas_volume_m3 × 0.000001)，仅用于同物种且湿干温压测量条件匹配的浓度和气体体积。气体体积为同运行时段的积分流量，不假定捕集效率或缺测污染物。 | concentration; gas_volume; conditions; cp_air | 控制后实际物种负荷 | `jrc-cww-bref-2016` |
| calc_ledgers | all inventory rows | 对每个完整匹配周期按总质量及实际元素守恒核对：实物投入＋期初库存＝实物输出＋期末库存＋披露残差。实际外部损失计入输出，不重复计库存积累。按实测组成核对C/H/O及相关碱或盐元素，并保留生物/化石碳来源。水、甘油及干组分为物种或物料账，不是自动守恒量：在输入侧加入实际反应生成，在输出侧加入实际消耗，包括中和或有证据的其他转化。反应项须以实际反应式及独立实测反应物/产物数量和不确定性约束；不得用残差拟合未知反应水或干物质，不用COD当碳质量，也不在本精制厂界内套用酯交换或水解配方。仅在其他水项有独立界限时，才可用水平衡估计蒸气。内部转移仅在聚合厂界抵消，阶段日志仍两端同量；保留不确定性，不强迫残差为零。 | stage records; composition; stocks; actual reaction evidence; actual emissions; cp_feed; cp_materials; cp_release | 未分配实物衡算 | `jrc-cww-bref-2016`; `cpm-glycerin-refining-2024` |
| calc_steam | heating_steam; returned_condensate | 仅对稳态匹配的间接加热、完整实测返回且有记录证明功、储能及其他损失可忽略时：heat_MJ = steam_mass × (h_supply − h_return) / 1000，焓以kJ/kg计，供应方记录须可追溯、同一基准且状态方法有效。否则用包括闪蒸、泄漏、返回、积累及损失的完整实测能量衡算。直接汽提不使用该简式；保留实物质量行，链接前核对供方净、总及返回约定。 | steam_mass; traced enthalpies; same datum; state_method; complete_boundary; cp_steam | 条件成立时的供热补充账 | `ifc-oleochemicals-2007` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 复核实际物种CAS、混合物状态、路线、牌号、来源碳、受纳介质及参考属性单位；有效UUID不是供方数据集或配方，空UUID仍是明确链接缺口。 | 供应文件及身份记录 |
| dq_complete | refining | 使用完整代表性运行清洗周期并核对全厂阶段总量；缺测、接收方未知、单位不支持或衡算残差未解释均属未决，not_applicable须有实际不存在证据。 | 仪表、库存及采样记录 |
| dq_extend | refining | 物种调查须将额外实际挥发性有机物、碳排放、颗粒粒径、制冷剂、清洗化学品及处理流分别增列。颗粒粒径区间不得嵌套重复；已计总量内的化学组分不再重复累加，不用校正流替代。 | `jrc-cww-bref-2016` |
| dq_language | all inventory rows | 双语行身份、来源、公式定义、参考数量和归一化基准须一致；有数据库正式中文baseName时逐字使用。 | 双语核对 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_scope | refining | 核对油脂裂解原料历史、浓缩预处理上游覆盖、真空脱色路线及实际牌号；其他路线或外售技术级甘油须有经审查扩展后方可符合。 | `ifc-oleochemicals-2007`; `efisc-oilseed-refining-v3-1` |
| v_reference | refined_glycerol | 要求一个参考输出，为1千克验收散装商业物料净质量，并具备全部限定信息。清单分母、聚合及转换须使用同一验收周期基准；干基含量或纯活性质量不能替代整份供货质量。 | `efisc-oilseed-refining-v3-1` |
| v_balances | all inventory rows | 核验完整未分配质量、水、碳及能量衡算、内部两端同量、间接及直接供汽分开、参考产品及物种颗粒区间无重复，以及实物账负荷账分开。 | `cpm-glycerin-refining-2024`; `jrc-cww-bref-2016`; `eu-pef-multifunctionality-2021` |
| v_evidence | all inventory rows | 每笔实际交换须有可追溯测量及相容供方接收方定义。UUID、含量密度、蒸汽状态热量基准、污染物物种或采样完整性未知均保留为数据包缺口。有限计量投影检查通过不等于科学方法批准，也不解决这些缺口。 | `jrc-cww-bref-2016` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground process dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 在实际采集、上游链接、供方接收方核对及科学审查后，作为本路线组成限定的散装精制甘油采购数据 |
| excluded_use | 其他路线、未知混合物或纯活性替代、零负荷粗料、通用纯度收率默认、完整CPC覆盖或用工具检查代替方法批准 |
| required_metadata | 全部参考限定信息；过程阶段图；原始归一化实物账；供方接收方引用；采样校准；衡算及分配边界 |
| required_quality_disclosure | 未知身份数量、蒸汽背景兼容、碳来源不确定性、分析基准、衡算残差、排除操作、覆盖及审查状态 |
| update_trigger | 原料来源预处理、供方SKU含量、工艺公用工程状态、废物去向、监测覆盖、来源数据身份或分配改变 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc-glycerol-3-0 | official_guidance | [UNSD CPC 3.0, subclass 34570 Glycerol](https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/34570) | 仅用于分类身份，不规定制造路线或纯度 |
| ifc-oleochemicals-2007 | official_guidance | [IFC/WBG EHS Guidelines for Oleochemicals Manufacturing, 30 April 2007, pp. 1–4 and 15](https://www.ifc.org/content/dam/ifc/doc/2000/2007-oleochemicals-manufacturing-ehs-guidelines-en.pdf) | 天然甘油精制、公用工程、冷凝及真空废水、挥发性有机物清单；排除其他路线及示例性能数值 |
| jrc-cww-bref-2016 | official_guidance | [JRC103096 CWW BREF 2016, BAT 2–3, printed pp. 543–544 / PDF pp. 573–574](https://publications.jrc.ec.europa.eu/repository/bitstream/JRC103096/jrc103096_cww_bref_10_2016.pdf) | 化工行业流清单、相关物种及流量与浓度监测；BAT限值不是LCI因子 |
| efisc-oilseed-refining-v3-1 | official_guidance | [EFISC sector reference document for oilseed crushing/vegetable oil refining v3.1, p. 8 entries 13.8.1–13.8.2](https://food.ec.europa.eu/system/files/2020-08/animal-feed_fh_good-practice_eu-guide_oilseed-crushing_veg-oil-refining_v3-1.pdf) | 区分整份粗甘油与精制甘油，支持油脂裂解及甜水浓缩路线；目录干物质要求不是湿基化学品默认值 |
| cpm-glycerin-refining-2024 | handbook | [CPM Crown Glycerin Refining, July 2024 brochure, pp. 1–2](https://e1.nmcdn.io/assets/cpm/wp-content/uploads/2024/07/Liquids_Processing_Glycerin_Refining_2_pager_July_2024-1.pdf) | 真空主蒸馏及残脚蒸馏、内部回流、汽提、冷凝、脱色过滤及残液；不采用设备特定收率或排程默认值 |
| klk-personal-care-2025 | handbook | [KLK OLEO Personal Care Ingredients, May 2025 URL edition, PDF p. 1 Refined Glycerine table](https://www.klkoleo.com/wp-content/uploads/2025/05/English-KLK-OLEO-Personal-Care-Ingredients.pdf) | 商业精制甘油产品系列及CAS；不证明当前场址SKU、工艺或含量 |
| eu-pef-multifunctionality-2021 | official_guidance | [Commission Recommendation C(2021) 9332 final, Annex I §4.5, PDF pp. 63–64](https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf) | 通用细分或系统扩展、物理及其他有依据关系的分配层级；排除畜牧因子及自动抵扣 |
