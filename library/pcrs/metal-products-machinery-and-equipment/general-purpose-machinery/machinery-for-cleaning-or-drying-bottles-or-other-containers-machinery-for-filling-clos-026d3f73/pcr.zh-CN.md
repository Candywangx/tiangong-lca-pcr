---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.machinery-for-cleaning-or-drying-bottles-or-other-containers-machinery-for-filling-clos-026d3f73
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 瓶或其他容器的清洗或干燥机械；瓶、罐、箱、袋或其他容器的灌装、封闭、密封、加盖或贴标机械；饮料充气机械；其他包装或裹包机械

## 1. 范围与适用性

本PCR适用于下列完整工业机械及集成机械模块从摇篮到制造商工厂大门的生产：以清洗或干燥容器为主要功能的机械；用于容器灌装、封闭、密封、加盖或贴标的机械；饮料充气机械；产品包装或裹包机械。范围涵盖通过出厂验收的已配置机械，以及声明为可销售机械组成部分的控制系统、驱动装置、防护装置和附件。

本PCR不涵盖单独销售的备件、洗碗机、称量机械、喷射机械、被灌装或包装产品的生产、机械使用阶段消耗的包装材料生产、客户现场安装、运行、维护和报废。研究可扩展这些阶段，但须与本从摇篮到工厂大门结果分开报告。由于配置差异显著，仅在功能、能力、容器/产品兼容性、卫生等级、所含附件、设计寿命和边界相同的情况下方可比较。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.machinery-for-cleaning-or-drying-bottles-or-other-containers-machinery-for-filling-clos-026d3f73 |
| classification_refs | CPC 3.0：43921（精确映射语境） |
| covered_products | 完整的容器清洗或干燥机械；灌装、封闭、密封、加盖或贴标机械；饮料充气机械；其他包装或裹包机械；作为功能机械销售的集成模块 |
| excluded_products | 单独销售的零件；洗碗、称量或喷射机械；包装材料；已包装产品；现场安装服务 |
| representative_product | 一台通过出厂验收的电驱包装或灌装机械，含其已声明的机架、防护装置、驱动装置、控制系统和随附附件 |
| production_route | 采购产品特定材料和部件；适用时进行厂内制造或准备；最终装配；出厂验收测试；发运准备 |
| market_state | 制造商工厂大门处的完整已配置机械；若发运包装计入边界，则为已包装待发运状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一台能够实现所声明清洗、干燥、灌装、封闭、密封、加盖、贴标、饮料充气、包装或裹包功能的完整已配置机械 |
| How much | 通过出厂验收机械的净质量1,000 kg |
| How well | 满足所声明的出厂验收准则、生产能力、容器和产品兼容性、卫生/安全等级及控制规范 |
| How long or cycle | 制造商工厂大门交付状态；声明设计使用寿命，但不以其缩放从摇篮到工厂大门参考流 |
| reference_flow_link | 由必需限定信息描述的已配置且验收合格机械1,000 kg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 洗涤或干燥瓶或其他容器用机械，瓶、桶、箱、袋或其他容器的装填、闭合、封口、瓶帽密封或贴标签的机械，饮料充气机，其他包装机械 `ac3c39d8-9b77-4499-8188-02678f654b93` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 机械功能；制造商和型号/配置；机械净质量；额定生产能力和验收准则；容器形式和材料；所处理产品类别；适用时的产品接触材料牌号；所装驱动装置和控制架构；额定电力和辅助介质需求；适用时的卫生或无菌等级；设计使用寿命；制造场址和基准年；所含附件、备件和发运包装；出厂验收协议和结果 |

构建前景数据包时，全部必需限定信息须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少限定信息时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `measurement_01` | 参考产品和质量计量清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以不含发运包装的验收合格机械净质量作为参考数量；发运包装须单列。 |
| `measurement_02` | 归一化 | Mass | kg/1,000 kg机械 | 各项可归属交换量除以验收合格机械净质量后乘以1,000；保留未舍入的原始记录。 |
| `measurement_03` | 电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 前景记录保留计量kWh，并按1 kWh = 3.6 MJ换算；披露电网地域、电压和损耗。 |
| `measurement_04` | 按体积计量的气体 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明温度和压力基准条件；氧气、二氧化碳和天然气的体积不得合并。 |
| `measurement_05` | 重复使用的包装 | Mass | kg | 按有记录的使用次数分摊后，仅记录每次发运的可归属质量；不得每次重复计入托盘全质量。 |

## 5. 系统边界

纳入外购材料和部件的上游生产、前景研究包含时的入厂运输、厂内制造/准备、装配、质量保证、出厂验收测试、制造废物处理，以及直至制造商工厂大门的发运包装。可得时采用供应商特定上游数据集，不得重复计算外购部件中内含的材料。

| rule_id | 适用对象 | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_01` | 机械从摇篮到工厂大门生产 | 纳入从外购投入生产到验收合格机械发运准备期间与环境相关的材料、能源、产品、废物和直接排放。 | `eu-pef-method-2021`; `ecolean-filling-machines-epd-2021` |
| `boundary_02` | 可配置机械 | 对一个已声明配置建模；仅纳入适用的原子行，并说明每个未纳入代表性行的理由。 | `ecolean-filling-machines-epd-2021` |
| `boundary_03` | 外购总成 | 将外购总成数据集作为上游投入；除非总成数据集明确排除内含材料，否则不得在前景BOM中重复记录这些材料。 | `eu-pef-method-2021` |
| `boundary_04` | 排除的生命周期阶段 | 制造商工厂大门之后的配送、安装、使用耗材、维护和报废不计入本结果；如另行建模须单独报告。 | `ecolean-filling-machines-epd-2021` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 购入材料和已完成部件时附带上游生产数据集；前景工厂记录实际BOM和部件采购，且不重复计算内含材料。 |
| starting_condition_role | 已配置机械的从摇篮到工厂大门上游投入边界 |
| product_classification_scope | 实现CPC 43921语义边界内一种或多种功能的完整机械；单独销售的零件不在范围内。 |
| recursive_input_rule | 若购入同类别机械作为集成模块，仅将其作为有上游数据集的外购产品投入记录一次，不得在接收方前景过程中再次递归拆分。 |
| upstream_dataset_requirement | 上游数据集应尽可能匹配材料牌号或部件类型、生产技术、再生含量、供应商地域和基准年；使用替代数据须披露。 |
| disclosure | 声明配置、净质量、材料/部件边界、厂内与供应商作业、场址/年份、能源地域、测试介质、包装复用、废物去向及排除阶段。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication` | 材料和部件采购及制造 | required | 始终纳入；仅在厂内实施时纳入厂内制造交换，否则使用外购部件数据集 | 前景生产及上游投入接口 | 每1,000 kg净机械的验收BOM |
| `final_assembly` | 机械最终装配 | required | 始终纳入 | 前景装配 | 1,000 kg验收合格机械 |
| `factory_testing` | 质量保证和出厂验收测试 | required | 始终纳入；各测试介质仅在实际使用时适用 | 前景质量保证 | 每1,000 kg机械的验收测试协议 |
| `dispatch_packaging` | 发运准备和包装 | conditional | 包装在制造商工厂大门处随机械交付时纳入 | 前景发运准备 | 每1,000 kg机械可归属的包装 |

### 过程：材料和部件采购及制造（`component_fabrication`）

#### 输入

##### 产品流

###### 用于机架、外壳和产品接触部件制造的不锈钢板材（`stainless_steel_sheet`）

记录纳入所声明机械或加工成机械零件的外购不锈钢板材。

- 选定流：不锈钢板材
- 流属性/单位：Mass / kg
- 数量规则：采购质量减去有记录的未使用退料，按验收合格输出归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg净验收合格机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_mass`
- 来源：`ecolean-filling-machines-epd-2021`

###### 用于结构件或防护件的铝板材（`aluminium_sheet`）

记录机械中使用的铝板材；牌号和再生含量作为前景限定信息。

- 选定流：铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：净装入且可归属的采购质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg净验收合格机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_mass`
- 来源：`ecolean-filling-machines-epd-2021`

###### 电气系统中安装的铜线材（`copper_wire`）

记录裸铜线材质量；当绝缘材料达到实质性门槛时须另行记录。

- 选定流：铜线材 `da2d966d-fe62-44dc-ba0f-b1cd7c7cf33e`
- 流属性/单位：Mass / kg
- 数量规则：BOM中的已安装铜线材质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg净验收合格机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_mass`
- 来源：`ecolean-filling-machines-epd-2021`

###### 平板玻璃安全防护板（`plate_glass`）

适用时记录作为防护或观察窗安装的平板玻璃，并声明处理方式和厚度。

- 选定流：平板玻璃 `491a7940-d102-4981-a2b8-81bf183987df`
- 流属性/单位：Mass / kg
- 数量规则：已安装防护玻璃质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg净验收合格机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_mass`
- 来源：`ecolean-filling-machines-epd-2021`

###### 纳入机加工或模塑零件的聚丙烯树脂（`polypropylene_resin`）

仅在厂内制造零件时记录聚丙烯树脂；外购成品塑料零件仍作为部件投入。

- 选定流：聚丙烯树脂
- 流属性/单位：Mass / kg
- 数量规则：发放至可归属零件的树脂减去另行记录的废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg净验收合格机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_mass`
- 来源：`ecolean-filling-machines-epd-2021`

###### 驱动装置中安装的电动机（`electric_motor`）

完整外购电动机仅记录一次，不再记录其内含材料。

- 选定流：电动机 `014f80a3-c257-425b-9b75-3e5a18573695`
- 流属性/单位：Mass / kg
- 数量规则：配置BOM中全部已安装电动机质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg净验收合格机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_mass`
- 来源：`ecolean-filling-machines-epd-2021`

###### 厂内制造用电力（`fabrication_electricity`）

记录报告工厂内切割、成形、机加工和焊接的计量或分配电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：可归属计量电力由kWh换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg净验收合格机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meter`
- 来源：`eu-pef-method-2021`

###### 热切割用工业氧气（`industrial_oxygen`）

仅在前景边界内实施热切割时记录氧气。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：声明基准条件下计量或采购核算的氧气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1,000 kg净验收合格机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_gases`
- 来源：

###### 焊接用二氧化碳保护气（`carbon_dioxide_shielding_gas`）

使用该焊接路线时，记录作为保护气消耗的二氧化碳产品。

- 选定流：二氧化碳 `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- 流属性/单位：Mass / kg
- 数量规则：按机械分配的钢瓶或储罐供应消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1,000 kg净验收合格机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_gases`
- 来源：

###### 水洗零件用工艺用水（`fabrication_process_water`）

仅在零件装配前经过水洗时记录用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：可归属于清洗零件的补充水和单程用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1,000 kg净验收合格机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_chemicals`
- 来源：

###### 碱洗用氢氧化钠（`sodium_hydroxide`）

采用碱洗时记录活性氢氧化钠质量，并声明溶液浓度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：采购溶液质量乘以实测或供应商声明的NaOH质量分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1,000 kg净验收合格机械的活性NaOH kg
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_chemicals`
- 来源：

###### 工艺热用气态天然气（`natural_gas_process_heat`）

仅在干燥、固化或其他可归属工艺热直接消耗天然气时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：声明基准条件下可归属的计量燃气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1,000 kg净验收合格机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_meter`
- 来源：

#### 输出

##### 废物流

###### 制造产生的工业后钢废料（`steel_scrap`）

记录作为废物离开制造过程的已分拣含铁边角料和不合格品，不计回收信用。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：按机械分配的称量外运废钢
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg净验收合格机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

###### 水洗零件产生的废水（`parts_cleaning_wastewater`）

记录送往厂内或厂外处理的水相废物流，并披露组成和去向。

- 选定流：废水 `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- 流属性/单位：Mass / kg
- 数量规则：离开清洗过程的计量或质量平衡废水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1,000 kg净验收合格机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

##### 基本流

###### 工艺天然气燃烧产生的直接化石二氧化碳（`fossil_carbon_dioxide`）

仅记录前景边界内天然气燃烧的直接烟气二氧化碳；上游排放保留在燃料数据集中。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按机械分配的直接烟气实测排放或设施核证燃料碳计算量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg净验收合格机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：

### 过程：机械最终装配（`final_assembly`）

#### 输入

##### 产品流

###### 最终装配用电力（`assembly_electricity`）

记录装配工具、吊装、控制集成和可归属装配区服务的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表电力或装配区有记录的物理分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1,000 kg净验收合格机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meter`
- 来源：`ecolean-filling-machines-epd-2021`

### 过程：质量保证和出厂验收测试（`factory_testing`）

#### 输入

##### 产品流

###### 出厂测试用电力（`testing_electricity`）

记录完整出厂验收和安全测试循环及可归属测试辅助设备的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：所声明测试协议的计量能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg净验收合格机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_records`
- 来源：`ecolean-filling-machines-epd-2021`

###### 作为出厂测试介质的工艺用水（`testing_process_water`）

验收协议包含湿式容器清洗、灌装或泄漏测试循环时记录用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：测试水计量投入减去有记录的闭环结转量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg净验收合格机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_records`
- 来源：`ecolean-filling-machines-epd-2021`

###### 饮料充气设备测试用二氧化碳（`testing_carbon_dioxide`）

仅在所声明机械包含饮料充气功能且验收测试实际消耗二氧化碳时记录。

- 选定流：二氧化碳 `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- 流属性/单位：Mass / kg
- 数量规则：测试协议消耗的钢瓶或储罐供应质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg净验收合格机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_records`
- 来源：

### 过程：发运准备和包装（`dispatch_packaging`）

#### 输入

##### 产品流

###### 发运所用木托盘或装载板（`wooden_pallet`）

木托盘或装载板随机械供应时，记录其可归属质量。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass / kg
- 数量规则：供应托盘质量除以有记录的重复使用次数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg净验收合格机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 附件发运用瓦楞纸箱（`corrugated_board_boxes`）

记录与机械一同发运的控制器、换型件、工具或附件所用瓦楞纸箱。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：每次发运实称或供应商规定的瓦楞纸箱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1,000 kg净验收合格机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

#### 输出

##### 产品流

###### 通过出厂验收的已配置机械（`reference_machine`）

参考产品在完成所声明验收协议后跨越制造商工厂大门。

- 选定流：洗涤或干燥瓶或其他容器用机械，瓶、桶、箱、袋或其他容器的装填、闭合、封口、瓶帽密封或贴标签的机械，饮料充气机，其他包装机械 `ac3c39d8-9b77-4499-8188-02678f654b93`
- 流属性/单位：Mass / kg
- 数量规则：1,000 kg净验收合格机械质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1,000 kg参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`un-cpc-3-0-structure-2025`

## 7. 分配与共产品处理

| rule_id | 适用对象 | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_01` | 共用工厂过程 | 首先细分计量表、工单和废物记录，仅纳入可直接归属于所声明机械的交换。 | `eu-pef-method-2021` |
| `allocation_02` | 剩余共用公用工程 | 无法细分时，采用机械工时、焊接时间、测试时长、计量负荷或加工质量等因果物理驱动因素，并记录该因素。 | `eu-pef-method-2021` |
| `allocation_03` | 剩余多功能性 | 仅在细分、系统扩展和可辩护的物理关系均不可行时采用经济分配，并披露数值和敏感性。 | `eu-pef-method-2021` |
| `allocation_04` | 制造废料 | 单独报告废料质量和处理路线。除非所选上位LCA方法明确要求并记录，否则不得在从摇篮到工厂大门清单中扣除替代原生材料的避免负荷。 | `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_mass` | `component_fabrication` | 材料和已安装部件 | 批准BOM、采购和领料记录 | 物料id；材料/部件说明；牌号；供应商；采购质量；安装质量；废料/退料质量；总成边界 | 将已发布配置BOM与采购及仓储记录核对 | kg | 每一配置 | 生产批次和基准年 | 报告工厂和指定供应商 | 汇总可归属净投入；防止外购总成与内含材料重复 | 批准BOM版本；证书；称量单；采购记录 |
| `cp_energy_meter` | `component_fabrication`; `final_assembly` | 制造和装配电力 | 电表和工单日志 | 电表起止；kWh；区域/过程；工单；运行时间；分配因素 | 优先分表；否则对核证区域电表作物理分配 | kWh | 每工单或每月 | 含该批次的代表性年度 | 报告工厂 | 汇总可归属kWh，换算MJ并归一化 | 校准记录；公用事业账单核对 |
| `cp_process_gases` | `component_fabrication` | 氧气和保护气 | 流量计、钢瓶或储罐记录 | 气体身份；纯度；期初/期末质量或体积；基准条件；工单 | 将计量和库存变化与制造工单核对 | kg或m3 | 每瓶/每批 | 生产批次 | 报告工厂 | 按实测用量或记录的切割/焊接时间分配 | 供应商证书；秤/流量计校准；库存核对 |
| `cp_water_chemicals` | `component_fabrication` | 清洗水和氢氧化钠 | 批记录、计量表和化学品领料 | 用水；溶液质量；NaOH分数；槽液带出；批次；工单 | 计量水并核对化学品领料；计算活性NaOH | kg | 每槽或每批 | 生产批次 | 报告工厂 | 汇总可归属水；溶液质量×NaOH分数 | 计量校准；SDS/规格；槽液记录 |
| `cp_fuel_meter` | `component_fabrication` | 工艺天然气 | 燃气表和燃烧器工单 | 体积；温压基准；燃烧器/过程；运行时间；分配因素 | 分表或对核证工艺燃气表作物理分配 | m3 | 每批或每月 | 代表性年度 | 报告工厂 | 汇总可归属基准状态体积 | 仪表校准；账单核对 |
| `cp_waste_records` | `component_fabrication` | 废钢和废水 | 称量单、废水表和转移记录 | 废物身份；质量/体积；来源过程；日期；处理去向；回收状态 | 核对内部收集与外部转移文件 | kg | 每次转移 | 生产批次和基准年 | 报告工厂 | 汇总可归属输出，不计避免负荷信用 | 称量单；联单；处理凭证 |
| `cp_direct_emissions` | `component_fabrication` | 直接化石二氧化碳 | 烟气测试、连续计量或核证设施清单 | 排放质量；测量/计算方法；燃料记录链接；时间；分配因素 | 优先直接测量；采用计算时保留核证文件 | kg | 每次测试或报告期 | 代表性年度 | 前景燃烧源 | 仅分配直接前景排放 | 校准/测试报告或核证计算文件 |
| `cp_test_records` | `factory_testing` | 测试电力、水和二氧化碳 | 出厂验收日志和仪表 | 协议id；序列号/配置；测试时长；kWh；水质量；CO2质量；通过/返工结果 | 计量完整测试循环并关联验收序列号 | MJ、kg | 每台验收机械 | 生产批次 | 报告测试区 | 纳入可归属于验收输出的初次和重复测试 | 签字验收报告；计量记录 |
| `cp_packaging_records` | `dispatch_packaging` | 发运包装 | 装箱单、包装规格和称量 | 包装项；材料；单件质量；数量；复用次数；目的地 | 将装箱单与实称或供应商规定质量核对 | kg | 每次发运 | 生产批次 | 制造商工厂大门 | 汇总随附包装；重复使用项按核证次数分摊 | 装箱单；质量证据；复用记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculation_01` | 所有可变清单行 | 归一化量 = 可归属量 / 净验收合格机械质量 × 1,000 | 可归属交换；净机械kg | 每1,000 kg机械的交换 | `eu-pef-method-2021` |
| `calculation_02` | 电力行 | MJ = 计量kWh × 3.6 | 计量kWh | MJ电力 | `eu-pef-method-2021` |
| `calculation_03` | 氢氧化钠 | 活性NaOH kg = 溶液kg × 实测或供应商声明质量分数 | 溶液质量；NaOH分数 | 活性NaOH kg |  |
| `calculation_04` | 重复使用木托盘 | 可归属托盘kg = 托盘kg / 核证使用次数 | 托盘质量；复用次数 | 每次发运托盘kg |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_01` | 产品身份 | 配置和必需限定信息须与验收序列号及参考产品一致。 | 签字BOM发布和出厂验收记录 |
| `quality_02` | 完整性 | 将BOM质量与机械净质量核对，并说明排除、保密或内含部件质量。 | 质量平衡表和BOM核对 |
| `quality_03` | 时间代表性 | 能源、水、燃料和废物前景记录须覆盖生产批次或包含该批次的代表性十二个月。 | 带日期记录和代表性说明 |
| `quality_04` | 地域和技术 | 披露供应商和能源地域、材料牌号、再生含量、制造路线、测试协议及废物去向。 | 供应商声明和过程元数据 |
| `quality_05` | 不确定性 | 报告测量、分配和替代数据不确定性；将无来源的类别范围缺口标记出来，不得把单一EPD案例当作范围。 | 不确定性记录和未解决证据审查 |

## 9. 校验规则

| rule_id | 适用对象 | rule | source_ids |
| --- | --- | --- | --- |
| `validation_01` | 参考流 | 确认参考输出恰为1,000 kg净验收合格机械，且全部必需限定信息已填写。 | `eu-pef-method-2021` |
| `validation_02` | 清单身份 | 确认每行仅为一个原子交换，且所有带UUID的中英文名称、流类型、属性和单位与公开state-100审计一致。 |  |
| `validation_03` | BOM边界 | 确认外购总成未与其内含原材料重复计算。 | `eu-pef-method-2021` |
| `validation_04` | 过程完整性 | 确认采购/制造、最终装配和出厂测试均已表示；说明条件行和发运包装不适用的理由。 | `ecolean-filling-machines-epd-2021` |
| `validation_05` | 质量平衡 | 在所声明不确定性内核对机械净质量、装入材料/部件、制造损失和排除的保密质量。 |  |
| `validation_06` | 能源和气体 | 确认电力换算、气体基准条件、电网地域，以及氧气、二氧化碳和天然气的分列。 |  |
| `validation_07` | 废物和排放 | 确认废钢、清洗废水和直接化石二氧化碳仅在实际产生时报告，去向明确，且未重复计入上游排放。 |  |
| `validation_08` | 分配 | 确认先尝试细分，剩余分配因素均具因果性、有记录，并在重要时开展敏感性测试。 | `eu-pef-method-2021` |
| `validation_09` | 证据缺口 | 确认未从单一产品案例推断经验范围，所有未解决UUID和范围需求仍被披露。 |  |
| `validation_10` | 双语对齐 | 确认中英文文件的process id、row id、rule id、受控值、UUID和source id完全一致。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 产品特定的机械生产从摇篮到工厂大门数据集 |
| downstream_use | 配置和边界匹配时，可作为资本设备或机械生产建模的`secondary_dataset`或`background_dataset` |
| allowed_use | 对所声明已配置机械的生产建模；在披露供应商、能源、分配和包装假设后开展情景分析 |
| excluded_use | 直接比较不同功能/配置；表示单独销售的零件；替代机械使用、维护或报废数据；把单一灌装机案例当作全类别基准 |
| required_metadata | PCR id/版本；机械功能/型号/配置；序列号或配置引用；净质量；能力和验收准则；容器/产品兼容性；设计寿命；所含附件；场址/年份；BOM边界；供应商/地域；能源组合；分配；测试介质；发运包装；废物去向；未解决/替代数据披露 |
| required_quality_disclosure | 前景覆盖；BOM核对；测量和分配方法；时间/地域/技术代表性；数据缺口；不确定性；供应商特定数据比例；核证状态 |
| update_trigger | 设计/BOM、质量、驱动/控制系统、制造路线/场址、供应商地域、能源组合、测试协议、包装、分配方法、废物处理发生实质变化，或变化超过研究显著性阈值 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，《CPC第3.0版结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-06） | 正式分类身份和广义产品范围 |
| `ecolean-filling-machines-epd-2021` | `dataset` | EPD International，EPD-IES-0001057:002（S-P-01057），Ecolean Filling Machines EL1+ and EL2+，版本日期2021-09-30，https://www.environdec.com/library/epd1057（检索日期：2026-09-06） | 代表性灌装机组成；部件采购、装配、质量保证和测试的工序分解；范围区分；不用于推断经验类别范围 |
| `eu-pef-method-2021` | `official_guidance` | 欧盟委员会，Recommendation (EU) 2021/2279，Annexes 1-2: Product Environmental Footprint Method，2021-12-16，https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf（检索日期：2026-09-06） | 功能单位、参考流、系统边界、企业特定数据、分配和质量规则 |
