---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43142-including-regulators
language: zh-CN
status: candidate
translation_status: aligned
sync_with: pcr.en-US.md
---

# 水轮机及水轮的零件，包括调节器

## 1. 范围与适用性

本 PCR 适用于主要为水轮机或水轮设计的成品零件，以及专用水轮机调节设备（调节器或调速器）的工厂生产。涵盖产品包括转轮和叶片零件、导水与调节零件、作为水轮机专用零件供应的轴和壳体，以及作为 CPC 43154 产品供应的机械式、液压式、电液式或电子式调速单元。

前景边界从制造场址接收材料、毛坯、外购组件、消耗品和包装开始，到合格成品零件或调节器在工厂大门交付结束。上游生产由相连的供应商或背景数据集表示。本 PCR 不包括整机水轮机和水轮、发电机、土建工程、压力水管、现场安装、出厂后运输、使用、维护、修理和寿命终结。通用紧固件、阀门、泵、电子设备或金属制品，除非以文件证明其作为本类别专用零件供应，否则不属于本类别产品。

本类别高度异质。前景数据包必须识别具体零件或调节器、材料和制造路线，以及每项适用过程。不同机械功能的零件族或调节器设计不得在未披露产品组合、产出质量、分配方法和变异性的情况下合并平均。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43142-including-regulators |
| classification_refs | CPC 3.0：43154，精确映射语境 |
| covered_products | 水轮机或水轮专用成品零件；水轮机调节器或调速器；按照相同出厂产品规范新制造并验收的备件 |
| excluded_products | 整机水轮机或水轮；发电机；土建工程和输水结构；现场安装；维修和修复零件；未证明为本类别专用零件的通用组件 |
| representative_product | 以净质量表示的一件水轮机成品转轮、叶片、导水部件、轴、壳体或专用水轮机调节器 |
| production_route | 材料准备与成形、机加工与制造、视路线适用的热处理和表面处理、视路线适用的调节器装配与测试、最终检验和包装 |
| market_state | 工厂大门处新的合格成品零件或调节器；若包装随产品供应，则包括该包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一件可从制造场址发运的、新的合格水轮机或水轮专用零件，或专用水轮机调节器 |
| How much | 1 kg 合格成品净质量；随产品供应的包装单独列入清单，不计入产品净质量 |
| How well | 所声明的零件号或调节器型号符合适用图纸、材料牌号、尺寸、表面、平衡、压力、电气和功能验收要求 |
| How long or cycle | 工厂大门处一个生产批次的放行；使用寿命和使用循环不属于本参考流，须在下游另设情景 |
| reference_flow_link | `reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 合格成品净质量 |
| 参考产品流 | 43142次级所列制品的零件，包括调节器 `253ad616-0836-4ed6-a457-935c76a309a3` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件或调节器类型及零件号/型号；成品净质量；主要材料及牌号；成形和制造路线；热处理状态；表面处理或涂层体系；适用时的调节器控制与液压配置；验收试验；场址和国家；生产期间；包装状态；再生含量声明依据 |

构建前景数据包时，每项必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少必需限定信息将使参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量或计算合格成品，排除单独供应的包装、临时运输工装、发运前排出的试验液和不合格品；将批次产出与放行数量核对。 |
| `mass_input_normalization` | 材料、化学品、废物、排放和包装行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将跨越前景边界的净量归一化到 1 kg 合格产品。水分、浓度、固含量、重复使用和退回数量影响净质量时须分别记录。 |
| `electricity_conversion` | 电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留 kWh 电表读数，并以 1 kWh = 3.6 MJ 转换为 Tiangong 参考单位。前景电表值不得包含上游电网损耗。 |
| `gas_reference_conditions` | 天然气、工业氧气和 UUID 未解决的氩气行 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 报告计量体积的温度、压力、干湿基、组成或纯度，以及转换至供应商结算参考状态的方法。 |
| `product_mix_weighting` | 多产品报告期间 | Mass | kg | 仅在分离路线特定记录后，按合格产品质量加权过程投入和产出。披露纳入的零件族及调节器型号，并对实质不同产品进行敏感性分析。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景系统边界 | 纳入从材料、毛坯、组件和消耗品接收到成形、机加工、制造、适用的热处理与表面处理、调节器装配、测试、最终检验和包装，直至工厂大门放行的全部直接控制作业。 | `us-epa-mpm-development-document-2003`; `ridha-et-al-2023-hydraulic-turbine-failures` |
| `boundary_route_declaration` | 过程适用性 | 将每项过程声明为适用或不适用。不得用未披露的平均路线替代铸造、锻造、板材制造、机加工、焊接、热处理、涂层或调节器装配。 | `jrc-sf-bref-2024`; `ridha-et-al-2023-hydraulic-turbine-failures` |
| `boundary_upstream_links` | 外购投入 | 将每项外购材料、毛坯、组件、能源载体、化学品和包装交换连接到地理和技术代表性适当的上游数据集，并保留接收量作为可见产品投入。 | `ec-pef-method-2021` |
| `boundary_waste_and_emissions` | 前景释放 | 纳入适用前景作业产生的实测或计算废物、废水和直接大气排放；仅扣除有文件证明的内部回用或循环量。 | `us-epa-mpm-development-document-2003`; `jrc-sf-bref-2024` |
| `boundary_exclusions` | 下游及资本品 | 排除出厂后运输、现场安装、使用、维护、修理和寿命终结。除非研究目标明确纳入资本设备，否则将其排除；披露所有此类排除，且不得排除作为投入被消耗的生产工装。 | `ec-pef-method-2021` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 材料、毛坯、外购组件、能源载体、化学品和包装已在报告制造场址接收 |
| starting_condition_role | 以前景门到门为起点，上游负荷由相连的供应商或背景数据集承载 |
| product_classification_scope | CPC 43154 范围内的水轮机和水轮专用成品零件及专用水轮机调节器；分类仅是映射语境，不构成 PCR 身份 |
| recursive_input_rule | 若投入本身也是本 PCR 涵盖的 CPC 43154 零件，将其保留为可见外购产品投入并连接上游数据集；不得将其展开进入同一前景过程或重复计算制造 |
| upstream_dataset_requirement | 每项外购投入须有供应商特定或具有代表性的上游数据集，并声明地理、技术、产品状态和时间覆盖 |
| disclosure | 声明零件或调节器身份、路线、场址、期间、产品组合、上游数据集选择、截断、分配、内部循环、废物处理、包装和全部不适用过程决定 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `manufacturing_and_assembly` | 材料准备、机加工、制造和机械装配 | `required` | 始终纳入；只有生产记录证明不存在时，才可将具体原子交换标记为不适用 | 专用零件或调节器机械部分的前景制造 | 分配至参考产品的本过程合格产出质量 |
| `heat_treatment` | 热处理与淬火 | `conditional` | 产品图纸、材料规范、焊接工艺或消除应力路线要求场内热处理时纳入 | 前景热处理 | 处理产品质量和炉次 |
| `surface_treatment` | 清洗与防护表面处理 | `conditional` | 报告场址进行碱洗、漂洗、喷砂、涂装或其他防护处理时纳入 | 前景表面准备和涂装 | 处理面积和合格产品质量 |
| `governor_assembly_and_test` | 水轮机调节器装配、充液和功能试验 | `conditional` | 报告场址装配或测试机械式、液压式、电液式或电子式水轮机调节器时纳入 | 前景调节器生产和验收试验 | 合格调节器质量和受试台数 |
| `final_inspection_and_packaging` | 最终检验、放行与包装 | `required` | 始终纳入；包装行仅在所识别包装随产品跨越工厂大门时适用 | 参考产品的前景放行 | 1 kg 合格产品净质量 |

### 过程：材料准备、机加工、制造和机械装配（`manufacturing_and_assembly`）

#### 输入

##### 产品流

###### 钢板投入（`steel_plate`）

采用板材制造时，记录发放给本类别产品的钢板。

- 选定流：钢板 `421db3a5-394d-410b-8ebf-af23a37fc878`
- 流属性/单位：Mass / kg
- 数量规则：发放钢板净量扣除有文件证明的同牌号退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`ridha-et-al-2023-hydraulic-turbine-failures`

###### 不锈钢板投入（`stainless_steel_plate`）

仅当产品 BOM 和材质证明要求不锈钢板时记录；Tiangong 流 UUID 尚未解决。

- 选定流：不锈钢板
- 流属性/单位：Mass / kg
- 数量规则：发放不锈钢板净量扣除有文件证明的同牌号退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`ridha-et-al-2023-hydraulic-turbine-failures`

###### 制造用电（`electricity_fabrication`）

记录切割、机加工、磨削、焊接、平衡和机械装配设备用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配后的分表电量由 kWh 转换为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_energy_meters`
- 来源：`us-epa-mpm-development-document-2003`

###### 热切割用工业氧气（`industrial_oxygen`）

仅在采用热切割或其他有文件证明的耗氧作业时记录。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：按所声明参考状态计量或由钢瓶库存平衡得到的耗氧量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas_consumables`
- 来源：`us-epa-mpm-development-document-2003`

###### 氩气保护气（`argon_shielding_gas`）

仅在所声明焊接工艺使用氩气时记录；Tiangong 流 UUID 尚未解决。

- 选定流：氩气保护气
- 流属性/单位：Volume / m3
- 数量规则：按所声明参考状态计量或由钢瓶库存平衡得到的氩气消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas_consumables`
- 来源：`ridha-et-al-2023-hydraulic-turbine-failures`

###### 药芯焊丝（`flux_cored_wire`）

仅在所声明药芯焊丝焊接工艺中记录。

- 选定流：药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位：Mass / kg
- 数量规则：发放焊丝扣除退回量和可回收未使用焊丝
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`ridha-et-al-2023-hydraulic-turbine-failures`

###### 切削液补加（`cutting_fluid`）

记录机加工系统新补加的切削液，并扣除有文件证明的退库量。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass / kg
- 数量规则：归属于产品的外购或领用切削液补加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_consumables`
- 来源：`us-epa-mpm-development-document-2003`

###### 机加工工艺用水（`process_water_machining`）

记录本过程中加入机加工、清洗或水压试验系统的工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量补水量扣除有文件证明的内部循环量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 来源：`us-epa-mpm-development-document-2003`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 工业后钢废料（`post_industrial_steel_scrap`）

记录从前景系统转出的已分类含铁边角料、切屑和不合格金属。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：称量外运废料扣除有文件证明的内部重熔或回用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_transfers`
- 来源：`jrc-sf-bref-2024`

###### 废切削液（`spent_coolant`）

记录从机加工系统排出并送往处理或回收的废切削液。

- 选定流：废切削液 `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- 流属性/单位：Mass / kg
- 数量规则：称量或罐体平衡得到的前景系统外运量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_transfers`
- 来源：`us-epa-mpm-development-document-2003`

##### 基本流

###### 磨削或喷砂颗粒物（`particulate_matter`）

记录适用磨削、抛光或喷砂作业经治理后的有组织和无组织颗粒物释放。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：场址实测，或由采集的运行记录和有文件证明的场址特定因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`jrc-sf-bref-2024`

### 过程：热处理与淬火（`heat_treatment`）

#### 输入

##### 产品流

###### 炉用天然气（`natural_gas_heat_treatment`）

仅在场内燃气炉服务于本类别产品时记录气态天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：分配至处理批次的炉用天然气计量量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meters`
- 来源：`jrc-sf-bref-2024`

###### 热处理用电（`electricity_heat_treatment`）

记录处理批次的炉、淬火系统和辅助设备用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配后的分表电量由 kWh 转换为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_energy_meters`
- 来源：`jrc-sf-bref-2024`

###### 淬火工艺用水（`process_water_quench`）

记录水淬系统在内部循环后补加的新鲜工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：归属于处理批次的淬火补水计量量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 来源：`jrc-sf-bref-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 炉用天然气产生的化石二氧化碳（`carbon_dioxide_fossil_heat_treatment`）

记录场内天然气燃烧的直接化石二氧化碳；不包括上游供应链排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：烟道实测，或由采集的燃料用量和有文件证明的燃料碳含量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`jrc-sf-bref-2024`

### 过程：清洗与防护表面处理（`surface_treatment`）

#### 输入

##### 产品流

###### 碱洗用氢氧化钠（`sodium_hydroxide_surface_treatment`）

仅在碱洗或槽液处理使用氢氧化钠时记录。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：由产品质量和浓度换算的槽液活性氢氧化钠添加量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_surface_treatment`
- 来源：`us-epa-mpm-development-document-2003`

###### 表面处理工艺用水（`process_water_surface_treatment`）

记录内部循环后用于清洗和漂洗的新鲜补加工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：归属于产品的清洗和漂洗补水计量量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 来源：`us-epa-mpm-development-document-2003`

###### 工业维护涂料（`industrial_maintenance_coating`）

记录施加于产品的配制工业维护涂料；除非涂料配制发生在前景边界内，否则不得用树脂或颜料投入替代。

- 选定流：工业维护涂料 `46c99c8a-0ae9-4be8-972f-a2b9ab3baaf5`
- 流属性/单位：Mass / kg
- 数量规则：涂料领用量扣除退回量，并声明固含量及溶剂或水分数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment`
- 来源：`ridha-et-al-2023-hydraulic-turbine-failures`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 含油金属表面处理废水（`oily_metal_finishing_wastewater`）

记录适用清洗、漂洗或表面处理作业产生的含油独立水相废物流，并送往场内或场外处理；Tiangong 流 UUID 尚未解决。

- 选定流：含油金属表面处理废水
- 流属性/单位：Mass / kg
- 数量规则：计量排放量或由罐体平衡得到的处理转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_transfers`
- 来源：`us-epa-mpm-development-document-2003`

##### 基本流

### 过程：水轮机调节器装配、充液和功能试验（`governor_assembly_and_test`）

#### 输入

##### 产品流

###### 调节器控制用印制线路板（`printed_wire_board`）

仅在印制线路板装入本类别水轮机调节器时记录。

- 选定流：印制线路板 `a8bd954c-59b3-4317-b4de-02a17d6da5ca`
- 流属性/单位：Mass / kg
- 数量规则：根据调节器 BOM 装入的合格线路板质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`china-tax-scientific-import-list-2026`

###### 液压油充装（`hydraulic_fluid`）

记录发运时留在调节器中的液压油，以及跨越前景边界的有文件证明的试验液损失。

- 选定流：液压油 `eafff56c-3487-4345-9f24-00429f61c556`
- 流属性/单位：Mass / kg
- 数量规则：充装质量加不可回收试验损失，再扣除排出并回用的液体
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_regulator_assembly`
- 来源：`china-tax-scientific-import-list-2026`

###### 调节器装配与试验用电（`electricity_governor_test`）

记录调节器装配设备、液压动力单元、控制柜和验收试验用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配后的分表电量由 kWh 转换为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_energy_meters`
- 来源：`china-tax-scientific-import-list-2026`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：最终检验、放行与包装（`final_inspection_and_packaging`）

#### 输入

##### 产品流

###### 纸盒（`paper_box`）

仅当纸盒随本类别产品跨越工厂大门时记录。

- 选定流：纸盒 `12d5d744-7725-4dbc-b102-43c80547f777`
- 流属性/单位：Mass / kg
- 数量规则：发放给合格产品出货的纸盒质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：

###### 木托盘（`wooden_pallet`）

仅当欧标木托盘随产品跨越工厂大门时记录，并声明重复使用次数和所有权转移。

- 选定流：木托盘（欧标） `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- 流属性/单位：Mass / kg
- 数量规则：有文件证明重复使用时按运输次数分配托盘质量，否则计入外运托盘全质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：

###### 最终检验用电（`electricity_final_inspection`）

记录尚未分配至其他过程的最终尺寸检验、无损检测、压力试验、平衡和放行设备用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配后的分表电量由 kWh 转换为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_energy_meters`
- 来源：`us-epa-mpm-development-document-2003`; `ridha-et-al-2023-hydraulic-turbine-failures`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格成品零件或调节器（`reference_product`）

仅记录从工厂大门放行的合格成品净量；不合格品保留在废物或返工平衡中。

- 选定流：43142次级所列制品的零件，包括调节器 `253ad616-0836-4ed6-a457-935c76a309a3`
- 流属性/单位：Mass / kg
- 数量规则：1 kg 合格成品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共用过程 | 在记录允许直接归属时，通过分离生产订单、批次、设备、仪表、槽体和试验台避免分配。 | `ec-pef-method-2021` |
| `allocation_physical_driver` | 不可分离共用负荷 | 无法细分时，采用有文件证明的因果物理驱动因素：能源采用设备或炉子时间与功率，批处理采用处理质量，表面处理采用处理面积，公用工程采用实测吞吐量。证明该关系并一致应用。 | `ec-pef-method-2021` |
| `allocation_economic_last_resort` | 不存在物理关系 | 只有在证明无法细分且不存在相关物理关系时才使用经济分配。使用共生产点价格，披露期间和币种，并对物理替代方案进行敏感性分析。 | `ec-pef-method-2021` |
| `allocation_scrap_status` | 金属废料与返工 | 内部返工和内部重熔保留在前景平衡内。离场材料作为废物记录，除非有文件证明其产品状态和所有权转移足以构成共产品；披露所选回收或负荷约定并避免重复抵扣。 | `ec-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_materials` | `manufacturing_and_assembly`; `governor_assembly_and_test` | 金属、焊材和调节器线路板 | BOM、材料领用、退库、供应商证明 | 物料编号；牌号；领用质量；退回质量；批次；供应商；合格产出 | 将 ERP/BOM 数量与仓库领退记录核对 | kg | 每生产订单 | 完整报告期间 | 全部范围内产线 | 按原子流汇总净领用量，仅按第 7 节分配 | 签字领退记录和材质证明 |
| `cp_energy_meters` | 全部适用过程 | 电力与天然气 | 校准总表或分表 | 起止读数；单位；时间；设备；批次；燃气参考状态 | 读取专用仪表；共用时保留运行时间和额定或实测功率 | kWh；m3 | 每批次或班次 | 完整报告期间 | 全部范围内设备 | 扣除有文件证明的非生产用量，应用第 7 节，并将电力转换为 MJ | 仪表编号、校准状态和账单核对 |
| `cp_gas_consumables` | `manufacturing_and_assembly` | 工业氧气与氩气 | 总表或钢瓶库存 | 气体身份；纯度；期初库存；接收；期末库存；退回；温度；压力 | 按气体身份进行质量或体积平衡 | m3 | 每批次并按月核对 | 完整报告期间 | 焊接和切割工位 | 转换至所声明供应商参考状态并按有文件证明的用量分配 | 供应商证明、钢瓶记录和仪表检查 |
| `cp_process_consumables` | `manufacturing_and_assembly` | 切削液 | 采购、领用、补加、退回和库存记录 | 产品编号；配方；浓度；期初库存；接收；期末库存；退回 | 消耗品质量平衡 | kg | 每批次并按月核对 | 完整报告期间 | 全部机加工系统 | 净补加量等于期初加接收减期末和退回 | 库存核对和浓度测量 |
| `cp_process_water` | 制造、热处理和表面处理 | 工艺补水 | 水表和批次记录 | 表读数；水源；水质；密度；过程；批次；循环量 | 校准水表或罐体平衡 | kg 或 m3 | 每批次或班次 | 完整报告期间 | 全部范围内水系统 | 用实测或披露密度换算体积，仅扣除有文件证明的内部循环量 | 仪表校准和水量平衡 |
| `cp_surface_treatment` | `surface_treatment` | 氢氧化钠和涂料 | 槽液和涂装批次记录 | 产品编号；浓度或固含量；添加量；退回量；槽容积；处理面积；批次 | 核对配方、补加、领用和退回记录 | kg | 每次槽液添加和产品批次 | 完整报告期间 | 全部范围内处理线 | 计算活性氢氧化钠和配制涂料净投入 | 批次单、浓度测试和库存核对 |
| `cp_regulator_assembly` | `governor_assembly_and_test` | 液压油充装 | BOM、充装、排出、回用和试验记录 | 液体编号；牌号；充装质量；排出质量；回用质量；试验损失；调节器序列号 | 称量或计量每次充排 | kg | 每台调节器 | 完整报告期间 | 全部范围内调节器产线 | 跨界净量等于充装加损失减排出回用 | 校准充液装置和序列号级试验记录 |
| `cp_waste_transfers` | 全部适用过程 | 钢废料、废切削液和含油废水 | 地磅单、罐体平衡、联单、处理收据 | 废物编号；质量或体积；组成；危险类别；日期；去向；内部回用 | 称量外运量或核对校准罐体 | kg | 每次转移 | 完整报告期间 | 全部范围内废物收集点 | 按原子废物流汇总，仅扣除有文件证明的内部回用 | 秤具校准、联单和处理收据 |
| `cp_direct_emissions` | `manufacturing_and_assembly`; `heat_treatment` | 颗粒物和化石二氧化碳 | 烟气测试、连续监测、燃料记录或场址因子计算 | 污染物；浓度；流量；时长；燃料；碳含量；治理；运行小时 | 优先直接测量；否则由采集的活动量和有文件证明的场址特定因子计算 | kg | 每次测试或连续记录并关联批次 | 覆盖报告期间的代表性运行 | 全部范围内排放点 | 只有回收有文件证明时才扣除捕集物；按分配后的合格产出归一化 | 方法、检出限、校准、因子来源和不确定性 |
| `cp_packaging` | `final_inspection_and_packaging` | 纸盒和木托盘 | 装箱单、领用、退回和复用记录 | 包装编号；质量；数量；出货；复用次数；所有权转移 | 将包装领用与合格出货核对 | kg | 每次出货 | 完整报告期间 | 全部发运点 | 仅纳入跨越工厂大门的包装；按有文件证明的周转次数分配复用托盘质量 | 装箱单、皮重测量和复用证明 |
| `cp_product_output` | `final_inspection_and_packaging` | 合格参考产品 | 放行、检验和称量记录 | 零件/型号；序列号或批次；毛重；包装皮重；净重；验收状态；日期 | 称量合格产出，或将经验证的工程质量与放行记录核对 | kg | 每件或每批 | 完整报告期间 | 全部本类别产品 | 汇总合格净质量；排除包装、不合格品和未放行在制品 | 秤具校准、放行证明和不合格记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_input` | 材料和消耗品行 | 净投入 = 期初库存 + 接收 - 期末库存 - 有文件证明的退还供应商或退库 - 有文件证明的转移至其他产品 | 库存、采购、领用、退回和转移记录 | 归属于本类别产品的原子投入 kg |  |
| `calc_reference_normalization` | 全部清单行 | 归一化量 = 分配后的流量 / 合格产品净质量 | 流量；分配结果；合格产品质量 | 每 1 kg 参考产品的数量 |  |
| `calc_electricity_mj` | 电力行 | 电力（MJ）= 电表电量（kWh）× 3.6 | 分配后的电表读数 | 每 1 kg 参考产品的 MJ |  |
| `calc_fossil_co2` | `carbon_dioxide_fossil_heat_treatment` | 优先采用直接实测 CO2；否则由采集的燃料量、供应商碳含量和分子质量比计算完全氧化的化石碳，并披露氧化假设和不确定性。 | 燃料量；碳含量；氧化依据；合格产出 | 每 1 kg 参考产品的化石 CO2 kg | `jrc-sf-bref-2024` |
| `calc_mass_reconciliation` | 金属制造 | 在扣除有文件证明的内部回用后，核对金属投入 = 产品中的合格金属 + 工业后金属废料 + 其他实测废物中的金属 + 库存变化。 | 净金属投入；合格产品组成；废料；其他废物；库存变化 | 质量平衡闭合和未解释差额 | `jrc-sf-bref-2024` |
| `calc_pallet_reuse` | `wooden_pallet` | 当所有权和复用记录证明重复使用时，分配托盘质量 = 托盘质量 / 经验证周转次数；否则计入外运托盘全质量。 | 托盘质量；复用记录；所有权转移 | 每 1 kg 参考产品的托盘 kg |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 识别零件或调节器类型、图纸或型号、材料牌号、制造路线、验收标准、净质量、包装状态、场址和期间。 | 放行证明、图纸/BOM 版本、材质证明和称量记录 |
| `dq_route_completeness` | 过程图 | 将每项所列过程声明为适用或不适用，并用生产记录证明每项排除。实际存在但未列入最低清单的外购组件、化学品、气体、包装物、废物和直接排放须另建原子行。 | 路线卡、工单、过程流程和环境台账 |
| `dq_temporal_coverage` | 前景记录 | 使用代表正常运行的连续期间，并纳入归属于生产的开停机、返工、不合格品和维护消耗；说明记录缺口和外推。 | 带日期记录和覆盖核对 |
| `dq_meter_quality` | 能源、水、气体和排放 | 适用时报告仪表编号、校准状态、读数频率、分配驱动因素、参考状态、检出限和不确定性。 | 校准证明、仪表记录和计算工作簿 |
| `dq_mass_balance` | 材料与废物 | 核对主要金属投入、合格产品、内部回用、废料和其他废物；调查并披露未解释差额。 | 签字质量平衡表和库存记录 |
| `dq_upstream_representativeness` | 外购产品投入 | 记录每项上游数据集的供应商、地理、技术、产品状态、时间覆盖、再生含量和所用代理。 | 供应商数据和数据集选择记录 |
| `dq_no_double_counting` | 共用过程和再生材料 | 防止前景投入、内部循环、外运废料、上游再生含量数据集和任何回收抵扣之间重复计算。 | 分配和回收约定说明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考产品 | 确认参考产出采用准确的 CPC 43154 Tiangong 流，等于 1 kg 合格产品净质量，排除单独供应的包装，并带有全部必需限定信息。 | `un-cpc-3-0-structure-2025` |
| `validate_process_applicability` | 过程图 | 确认所有必需过程均已表示，且每项条件过程都有与路线记录一致的适用或不适用决定。 | `us-epa-mpm-development-document-2003`; `ridha-et-al-2023-hydraulic-turbine-failures` |
| `validate_atomic_inventory` | 过程清单 | 确认每行仅代表一种产品、废物、能源或基本流交换，且选定流不使用合并材料、公用工程、包装、废物或排放集合。 |  |
| `validate_inventory_accounting` | 过程清单 | 确认每个带 UUID 的流采用经审计的身份和单位，每个无 UUID 的流均明确标记未解决，且中英文行的 id、顺序、流类型和 UUID 完全相同。 |  |
| `validate_mass_balance` | 材料与产出 | 确认合格产品、废料、废物、内部回用和库存变化与主要材料投入在场址定义容差内平衡，并披露容差和未解决差额。 | `jrc-sf-bref-2024` |
| `validate_energy_and_emissions` | 能源与直接排放 | 确认电力换算、气体参考状态、燃料分配、直接化石 CO2 范围、颗粒物治理，以及直接前景行排除上游排放。 | `jrc-sf-bref-2024` |
| `validate_allocation` | 多产品设施 | 确认首先尝试细分，所选物理驱动因素具有因果相关性，任何经济分配备选均有理由并进行了敏感性分析。 | `ec-pef-method-2021` |
| `validate_source_and_range_status` | 证据 | 确认未将文献个案值表示为经验范围。只有至少两个独立、边界兼容的原始来源或经审查前景数据集支持范围后，才可关闭范围证据需求。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 对所声明水轮机或水轮零件或专用水轮机调节器的前景出厂生产数据集 |
| downstream_use | 可与有代表性的上游数据集连接以构建从摇篮到工厂大门的产品系统，并可用于过程或生命周期模型投影 |
| allowed_use | 产品身份、材料、路线、调节器配置、地理、技术、期间、包装状态、分配和上游数据集相匹配的产品特定研究，或披露产品组合的研究 |
| excluded_use | 整机水轮机、发电机、土建工程、现场安装、使用、修理、维护、寿命终结，或未披露地对不同零件和调节器族进行通用平均 |
| required_metadata | PCR id 和版本状态；产品流 UUID；零件/型号和图纸版本；净质量；材料和牌号；过程路线；场址和地理；报告期间；产量；验收试验；包装；分配；上游数据集；截断；数据质量证据 |
| required_quality_disclosure | 初级数据占比；时间、地理和技术代表性；仪表和秤具校准；质量平衡闭合；分配敏感性；缺失记录；代理数据集；未解决 UUID；不确定性；适用和不适用过程 |
| update_trigger | 产品设计、材料牌号、制造或调节器技术、能源结构、场址、供应链、分配、废物处理、包装、验收规范或报告期间发生实质变化；或未解决 UUID 或范围证据需求得到解决 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，《CPC 3.0 结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-05） | CPC 43154 正式身份与层级 |
| `china-tax-scientific-import-list-2026` | `official_guidance` | 国家税务总局上海市税务局，《免税科研货物清单》，https://shanghai.chinatax.gov.cn/zcfw/zcfgk/jckss/202601/P020260121496216221695.pdf（检索于 2026-09-05） | 区分水轮机及水轮调节器与其他零件的专业中文税则术语 |
| `us-epa-mpm-development-document-2003` | `official_guidance` | 美国环境保护署，《金属制品与机械点源类别最终排放限值指南与标准编制文件》，2003，https://www.epa.gov/sites/default/files/2015-11/documents/mp-m_dd_2003.pdf（检索于 2026-09-05） | 金属零件作业分解；含油作业废水；机加工、清洗、涂层、测试和焊接边界 |
| `jrc-sf-bref-2024` | `official_guidance` | 欧盟委员会联合研究中心，《锻造与铸造行业最佳可行技术参考文件》，JRC140209，2024，https://publications.jrc.ec.europa.eu/repository/bitstream/JRC140209/JRC140209_01.pdf（检索于 2026-09-05） | 成形、铸造、热处理、资源、废物和排放过程结构 |
| `ridha-et-al-2023-hydraulic-turbine-failures` | `literature` | Ridha, W. K. M.; Kashyzadeh, K. R.; Ghorbani, S.，《卡普兰水轮机叶片的常见失效与实用解决方案》，Materials 16 (2023) 3303，https://doi.org/10.3390/ma16093303 | 水轮机部件铸造、数控加工、锻造、磨削、抛光、平衡、焊接、涂层、装配和质量控制 |
| `ec-pef-method-2021` | `standard` | 欧盟委员会建议 (EU) 2021/2279，附件 I，产品环境足迹方法，https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32021H2279（检索于 2026-09-05） | 系统边界披露和分配层级 |
