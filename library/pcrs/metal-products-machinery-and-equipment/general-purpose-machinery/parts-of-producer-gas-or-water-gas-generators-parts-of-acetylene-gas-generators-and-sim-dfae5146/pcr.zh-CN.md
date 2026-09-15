---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-of-producer-gas-or-water-gas-generators-parts-of-acetylene-gas-generators-and-sim-dfae5146
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 工业气体发生器、空气调节设备、制冷设备、热泵及温度处理机械的零件

## 1. 范围与适用性

本 PCR 适用于专为发生炉煤气或水煤气发生器、乙炔及类似水解气体发生器、空气调节设备、制冷或冷冻设备、热泵以及通过温度变化处理材料的机械制造的成品零件。边界涵盖一个已声明的代表性零件从采购材料和组件入厂，到材料准备、成形、机加工、连接、清洗、精整、装配、测试及工厂大门交付。

本类别仅涵盖零件。完整机械、未声明机械零件身份的通用紧固件或独立销售的原料管材、家用制冷器具、作为完整机械分类的压缩机、客户现场安装、使用、维护和报废均不在范围内。前景数据包必须声明零件族、图样或规范、适用设备、物料清单、制造路线、制冷剂状态和出厂产品状态。CPC 3.0 正式描述仅作为分类身份依据（`un-cpc-3-0-structure-2025`），不提供清单数量或范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-of-producer-gas-or-water-gas-generators-parts-of-acetylene-gas-generators-and-sim-dfae5146 |
| classification_refs | CPC 3.0：43941（完全一致的分类语境；映射接受仍须单独治理决定） |
| covered_products | 为所列工业气体发生、空气调节、制冷、热泵或温度处理机械而设计并单独供应的成品零件 |
| excluded_products | 完整设备；家用制冷器具；无已声明机械零件身份的通用材料和标准紧固件；现场安装；使用；维护；报废 |
| representative_product | 制造商工厂大门处一个已声明且质量合格的成品机械零件 |
| production_route | 采购材料和组件接收；按路线进行切割、成形、机加工、连接、清洗或精整；装配；检验和放行 |
| market_state | 成品零件；按规定为干燥状态或含已声明的保留制冷剂充注量；按出厂规格包装或不包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供可装入已声明涵盖机械或用于其更换的质量合格零件 |
| How much | 1 kg 成品零件 |
| How well | 符合已声明的图样、材料牌号、尺寸公差、压力或检漏要求、表面状态、清洁度和验收规范 |
| How long or cycle | 一次零件工厂大门交付；使用寿命不属于本从摇篮到工厂大门的参考 |
| reference_flow_link | 检验后合格 `finished_machinery_part` 输出的实测质量；单独报告的运输包装不计入，但销售规范规定包装为产品组成部分时除外 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 发生炉煤气或水煤气发生器零件，乙炔发生器及类似水法气体发生器零件，43912次级所列制品的零件，冷藏和冷冻设备及热泵的零件，利用改变温度的方法处理材料的机械用零件 `cdee7105-36d3-4fd3-8418-f9498bf159bc` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件族及功能；适用设备族；图样或规范标识；主要材料和牌号；成品质量；制造路线；连接和表面处理路线；制冷剂类型及保留充注量或干燥状态；测试方法；地理范围；参考期；包装纳入情况 |

构建前景数据包时，`必需限定信息` 中的项目必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及质量计量行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量合格成品输出，并将所有交换归一化为恰好 1 kg 该输出；保留未舍入批次总量和归一化因子。 |
| `energy_measurement` | 电力行 | Net calorific value | MJ | 保留原始电表单位和时间间隔，采用明确记录的精确单位换算转换为 MJ，不得将购入电力与燃料能量合并。 |
| `gas_volume_conditions` | 天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明计量温度、压力、干湿基准以及向供应商或场址参考条件的换算。 |
| `water_mass_conversion` | 工艺用水和废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用体积表时，在转为质量前记录密度和测量条件；不得假定用水输入等于废水输出。 |
| `refrigerant_mass_balance` | R404A 输入、保留、回收和释放 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对购入或回收制冷剂、保留充注量、回收返还及测得或算得的释放量进行批次平衡，并声明纳入的钢瓶和回路。 |

## 5. 系统边界

前景边界始于采购材料、组件、工艺化学品、燃料、水和电力跨入制造场址，终于合格零件在工厂大门放行。供应商生产采用上游数据集表征。已声明路线中发生的场内材料准备、成形、机加工、连接、清洗、精整、装配、检验、测试、返工、直接排放和废物均应纳入。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 符合规范的外购板、片、管、组件、化学品、公用工程及任何制冷剂已运抵制造场址 |
| starting_condition_role | 零件制造可审计的前景起点 |
| product_classification_scope | 专为涵盖机械制造的零件；分类身份遵循 `un-cpc-3-0-structure-2025` |
| recursive_input_rule | 同类别外购成品零件仅作为一项外部产品输入记录一次，并配置其上游数据集和质量；不得在本前景过程中递归重现其制造 |
| upstream_dataset_requirement | 优先采用供应商特定数据；否则选择地理、技术、材料和时间代表性相符的上游数据集并披露替代 |
| disclosure | 声明场址、期间、零件族、BOM、材料牌号、路线步骤、废品、返工、制冷剂状态、测试边界、包装纳入、排除的资本品和未纳入运输 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_parts_only` | 产品范围 | 仅纳入所列设备族的已声明成品零件在工厂大门前的制造；完整设备不属于本 PCR。 | un-cpc-3-0-structure-2025 |
| `boundary_route_steps` | 前景作业 | 纳入所有对零件进行物理或化学改变、连接、清洗、精整、测试或放行的场内作业及其直接废物和排放。 |  |
| `boundary_upstream_inputs` | 采购输入 | 采用上游数据集表征采购材料、组件、公用工程、化学品、燃料和制冷剂，不得在前景清单中重复上游过程。 |  |
| `boundary_capital_transport` | 排除项 | 默认排除资本设备和员工出行；仅当研究目标纳入运输时才扩展边界，并单独披露。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `material_preparation` | 材料准备、成形和机加工 | required | 所有路线均适用；仅当 BOM 含指定材料时使用相应材料卡 | 将采购金属形态转化为零件几何形状 | 每 1 kg 合格成品零件的交换 |
| `joining_cleaning_finishing` | 连接、清洗和精整 | conditional | 发生焊接、钎焊、工艺供热、水洗或精整时纳入 | 连接并形成所需表面状态 | 每 1 kg 合格成品零件的路线特定交换 |
| `assembly_testing_release` | 装配、测试、检验和工厂大门放行 | required | 适用于已声明零件；仅当 R404A 跨越边界时使用其卡片 | 最终装配、测试、验收和输出 | 1 kg 合格成品零件 |

### 过程：材料准备、成形和机加工（`material_preparation`）

#### 输入

##### 产品流

###### 钢板材投入（`steel_plate_materials`）

当钢板被切割、成形或机加工时记录。BOM 和收货记录应确定牌号、尺寸、涂层、供应商和质量。

- 选定流：钢板材 `818105f5-d33e-4dd8-bbc0-fc1ad29d9173`
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量减去有记录的未开封退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_waste_mass`

###### 不锈钢板材投入（`stainless_steel_sheet`）

BOM 含不锈钢板材时记录一种化学牌号明确的交换。在获得内部一致的精确 state-100 身份前保持 UUID 未解决。

- 选定流：不锈钢板材
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量减去有记录的未开封退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_waste_mass`

###### 初级铝合金板材投入（`primary_aluminium_alloy_sheet`）

仅在实际指定初级铝合金板材时记录；不得用于替代再生铝或铝箔。

- 选定流：初级铝合金板材 `2a9549cc-dc9e-43a7-9379-7a0c0a0e4832`
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量减去有记录的未开封退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_waste_mass`

###### 铜管材投入（`copper_tubing`）

零件含成形、扩口、钎焊或以其他方式加工的铜管时记录。

- 选定流：铜管材 `0d80f4b8-8f26-4eee-8b81-df499c4c9dff`
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量减去有记录的未开封退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_waste_mass`

###### 切削液（`cutting_fluid`）

记录机加工使用的新鲜切削液补加量，并声明配方、稀释基准和内部循环。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass / kg
- 数量规则：加入生产批次的新鲜补加液实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_waste_mass`

###### 机加工和成形用电（`electricity_machining`）

记录切割、成形、机加工、抽排及直接相关辅助系统消耗的购入电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表电量或由共用电表按因果驱动分配的电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_metering`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废钢（`steel_scrap`）

记录钢板路线单独收集的含铁废料；本卡不含不锈钢废料。

- 选定流：废钢 `c3fc5605-baa3-4b25-9934-ecf7fcbc72da`
- 流属性/单位：Mass / kg
- 数量规则：离开过程的废钢实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_waste_mass`

###### 不锈钢废料（`stainless_steel_scrap`）

将新产生的不锈钢边角料和切屑与其他钢材分开记录。不得将外部供应废料身份用于本输出。

- 选定流：不锈钢废料
- 流属性/单位：Mass / kg
- 数量规则：作为新产生不锈钢废料离开过程的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_waste_mass`

###### 铝废料（`aluminium_scrap`）

记录本路线单独收集的铝边角料和切屑。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：作为铝废料离开过程的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_waste_mass`

###### 废铜（`copper_scrap`）

记录本路线单独收集的铜管边角料和切屑。

- 选定流：废铜 `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- 流属性/单位：Mass / kg
- 数量规则：作为铜废料离开过程的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_waste_mass`

###### 废切削油（`waste_cutting_oil`）

记录从机加工系统移出并送往场外回收、处理或处置的废切削油。

- 选定流：废切削油 `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- 流属性/单位：Mass / kg
- 数量规则：移出循环系统的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_waste_mass`

##### 基本流

### 过程：连接、清洗和精整（`joining_cleaning_finishing`）

#### 输入

##### 产品流

###### 连接和精整用电（`electricity_joining`）

记录焊接、钎焊辅助、清洗、干燥和精整的购入电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表电量或由共用电表按因果驱动分配的电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_metering`

###### 二氧化碳保护气（`carbon_dioxide_shielding_gas`）

仅当焊接路线实际使用二氧化碳保护气时记录。

- 选定流：二氧化碳 `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- 流属性/单位：Mass / kg
- 数量规则：供应商质量、钢瓶质量差或按已声明条件由计量体积换算的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_gas`

###### 工艺供热用气态天然气（`natural_gas`）

仅当已声明路线的场内炉、燃烧器、干燥器或连接作业消耗天然气时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：已声明参考条件下的计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_gas`

###### 工艺用水（`process_water`）

记录水洗、漂洗、检漏或精整用水，并声明来源和水质。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量或批次记录的用水输入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`

###### 碱洗用氢氧化钠（`sodium_hydroxide`）

碱性清洗槽使用氢氧化钠时记录其活性质量，并区分新鲜补加与循环槽液。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：新鲜补加液中的氢氧化钠活性质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_chemistry`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废水（`wastewater`）

记录清洗、漂洗或测试产生的水性废水，并表征油、金属、洗涤剂、pH、处理状态和去向。

- 选定流：废水 `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- 流属性/单位：Mass / kg
- 数量规则：排放或转移废水的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`

##### 基本流

###### 化石源二氧化碳直接排放（`carbon_dioxide_fossil`）

记录场内天然气燃烧直接排放到空气的化石源二氧化碳；不得纳入电力上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：分配至生产批次的烟道实测排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission`

### 过程：装配、测试、检验和工厂大门放行（`assembly_testing_release`）

#### 输入

##### 产品流

###### 装配和测试用电（`electricity_testing`）

记录装配工具、压力或检漏设备、抽空、充注和检验的购入电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表电量或由共用电表按因果驱动分配的电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_metering`

###### R404A 制冷剂（`refrigerant_r404a`）

仅当 R404A 因充注或测试跨越场址边界时记录，并分别声明购入、回收、保留和返还量。

- 选定流：制冷剂，R404A `33db0143-ba65-4036-a57b-e32dcdecb779`
- 流属性/单位：Mass / kg
- 数量规则：引入范围内系统的 R404A 实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_balance`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成品机械零件（`finished_machinery_part`）

仅记录符合图样和放行准则的合格输出。

- 选定流：发生炉煤气或水煤气发生器零件，乙炔发生器及类似水法气体发生器零件，43912次级所列制品的零件，冷藏和冷冻设备及热泵的零件，利用改变温度的方法处理材料的机械用零件 `cdee7105-36d3-4fd3-8418-f9498bf159bc`
- 流属性/单位：Mass / kg
- 数量规则：合格成品实测质量归一化为恰好 1 kg 参考输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_product_release`

##### 废物流

##### 基本流

###### 排放至空气的 R404A 制冷剂（`r404a_to_air`）

仅记录充注、回收或测试释放到空气的 R404A。在获得精确 state-100 空气排放身份前保持 UUID 未解决。

- 选定流：排放至空气的 R404A 制冷剂
- 流属性/单位：Mass / kg
- 数量规则：期初库存加购入量和回收入量，减保留充注量、回收出量及期末库存
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 独立计量作业 | 通过将 BOM 材料、计量能源、化学品、制冷剂、废物和排放直接归属于零件族或批次来避免分配。 |  |
| `allocation_shared_operations` | 共用公用工程或设备 | 无法直接计量时，采用造成交换的物理驱动因素，例如机时、处理面积、焊缝长度、槽液补加量或测试时长；披露驱动因素和敏感性。 |  |
| `allocation_scrap` | 金属废料输出 | 各分选废料在离开前景边界时作为废物记录，不在本前景清单中扣除避免生产收益；回收替代属于另行声明的下游情景。 |  |
| `allocation_rework` | 返工和废品 | 将返工投入和废品归属于产生它们的批次，不得从合格输出分母中移除其负荷。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_and_waste_mass` | `material_preparation` | 指定金属输入、切削液和分选废物 | BOM 领用、退料、称量和转移记录 | part_id; batch_id; material_grade; flow_name; issued_mass; returned_mass; waste_mass; disposition; timestamp | 按每个流核对领用和退料与校准秤或转移记录 | kg | 每批或订单 | 连续代表性生产期 | 每个场址和路线 | 按原子流和批次求和，再按合格输出归一化 | BOM 版本；证书；秤校准；转移单；核对记录 |
| `cp_energy_metering` | 所有过程 | 电力 | 分表或共用表分配记录 | meter_id; opening; closing; unit; interval; process_id; machine_time; batch_id | 优先分表，否则按因果驱动分配 | 原表单位和 MJ | 每批或最短区间 | 与生产同期 | 每个场址 | 读数差扣除非生产负荷，按过程分配、换算并归一化 | 校准；分配表；生产日志 |
| `cp_process_gas` | `joining_cleaning_finishing` | 天然气和二氧化碳 | 仪表、钢瓶或供应商记录 | gas_identity; opening; closing; delivered; returned; temperature; pressure; moisture_basis; batch_id | 表差或钢瓶/供应商记录核对 | m3 或 kg | 每批或交付区间 | 与作业同期 | 每个场址 | 仅按声明条件换算、分配并归一化 | 校准；交付单；钢瓶核对 |
| `cp_water_balance` | `joining_cleaning_finishing` | 工艺用水和废水 | 输入、排放和转移记录 | source; input; discharge; density; oil; metals; detergent; pH; treatment; destination; batch_id | 分别测量输入和排放并表征 | kg | 每批或每日 | 与作业同期 | 每个场址 | 按记录密度换算，输入输出分别求和并归一化 | 校准；实验室结果；排放记录 |
| `cp_cleaning_chemistry` | `joining_cleaning_finishing` | 氢氧化钠 | 采购、浓度和槽液补加记录 | product_mass; sodium_hydroxide_fraction; make_up_mass; returned_mass; bath_id; batch_id | 由补加质量和已验证浓度计算活性质量 | kg 活性物 | 每次补加和批次 | 与清洗同期 | 每条线 | 按批次汇总新鲜补加活性质量并归一化 | 供应商证书；浓度检测；秤；槽液日志 |
| `cp_direct_emission` | `joining_cleaning_finishing` | 化石源二氧化碳 | 烟道测量记录 | period; concentration; exhaust_flow; temperature; pressure; moisture; operating_time; batch_id | 代表性运行下场址测量 | kg | 每次代表性测试和批次 | 与燃烧同期 | 每个排放点 | 积分质量、分配并归一化 | 采样报告；校准；运行日志 |
| `cp_refrigerant_balance` | `assembly_testing_release` | R404A 输入、保留、回收、库存和释放 | 钢瓶及充注系统平衡 | identity; opening_inventory; purchased; recovered_in; retained; recovered_out; closing_inventory; batch_id | 在完整回路内用校准秤或充注机记录 | kg | 每批及换瓶 | 与测试同期 | 每个回路 | 按身份和批次闭合，由核对差计算释放 | 校准；钢瓶日志；充注记录；核对 |
| `cp_product_release` | `assembly_testing_release` | 合格输出 | 放行、检验和称量记录 | part_id; drawing_revision; batch_id; gross_mass; excluded_packaging_mass; conforming; reject; rework; release_time | 称量合格输出并核对废品和返工 | kg | 每批 | 与输入同期 | 每个场址 | 汇总合格质量，扣除排除包装并归一化为 1 kg | 校准；检验；放行；废品返工日志 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | 所有交换 | 归一化量 = 批次交换量 / 合格成品质量 | 交换总量；合格输出质量 | 每 1 kg 成品零件的量 |  |
| `calc_sodium_hydroxide_active` | `sodium_hydroxide` | 活性质量 = 新鲜溶液补加质量 × 已验证氢氧化钠质量分数 | 补加质量；浓度 | kg 活性氢氧化钠 |  |
| `calc_refrigerant_release` | `r404a_to_air` | 释放量 = 期初库存 + 购入 + 回收入 - 保留充注 - 回收出 - 期末库存；调查负值或无法解释的结果 | 制冷剂平衡字段 | kg R404A 释放 |  |
| `calc_material_reconciliation` | 各金属路线 | 核对领用材料、退料、产品含量、分选废料、在制品和有记录损失；不得把未识别差额强制计入指定流。 | BOM 和质量记录 | 路线核对及残差 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 产品和所有流 | 保留流身份、牌号、状态、方向和 UUID 状态；不得合并不同材料、废物、公用工程或排放。 | BOM；证书；state-100 审计；清单未解决项 |
| `dq_temporal` | 前景数据 | 使用一致期间并对齐能源、材料、废物、排放和输出记录。 | 有日期记录 |
| `dq_measurement` | 测量值 | 保留校准、原始单位、读数、换算条件和分配工作表。 | 证书；日志；工作表 |
| `dq_completeness` | 路线覆盖 | 将过程图与路线核对，并记录不适用的条件过程和原子行。 | 工艺流转卡；清单；BOM |
| `dq_range_evidence` | 重要流 | 前景采集始终为必需；在至少两项相互独立、原文已核实且边界兼容的来源支持经审查综合前，不应用外部范围。 | 清单范围证据需求及后续审查 |
| `dq_classification` | 产品范围 | 验证输出确为所列设备族专用零件，而非完整机械。 | un-cpc-3-0-structure-2025；图样；销售规范 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_output` | 参考流 | 确认分母恰为 1 kg 合格输出实测质量，排除包装未混入分母。 |  |
| `validate_part_scope` | 产品身份 | 确认图样将输出关联至涵盖设备族，且输出为零件而非完整设备。 | un-cpc-3-0-structure-2025 |
| `validate_process_coverage` | 系统边界 | 将路线与过程图对比；纳入每个适用作业并记录各条件项目不适用的原因。 |  |
| `validate_atomic_inventory` | 过程清单 | 拒绝合并的材料、能源、燃料、化学品、制冷剂、废物或排放标签；每行保留一个流身份。 |  |
| `validate_mass_reconciliation` | 材料路线 | 检查各金属和制冷剂核对；调查残差并披露在制品、返工、废品、回收和不确定性。 |  |
| `validate_uuid_state` | Tiangong 引用 | 已填写 UUID 必须为公开 state_code=100 且属性/单位兼容；保留未解决行，不得用代理替代。 |  |
| `validate_bilingual_identity` | 中文呈现 | 确认行 ID、UUID、受控值和顺序与英文一致，且带 UUID 选定流采用 Tiangong 精确中文 baseName。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查后为 secondary_dataset 或 background_dataset |
| downstream_use | 用于已声明零件制造的前景数据包及下游 process 或 lifecyclemodel 投影 |
| allowed_use | BOM、路线、地理、期间、测试边界和制冷剂状态相符的代表性零件从摇篮到工厂大门建模 |
| excluded_use | 完整设备；家用器具；安装；使用阶段性能或泄漏；维护；报废；无功能等效研究的不同功能比较 |
| required_metadata | 规范 PCR id；零件族；设备族；图样；BOM 和牌号；成品质量；路线；场址；地理；期间；分配驱动；制冷剂状态；测试边界；包装和运输纳入；上游替代 |
| required_quality_disclosure | UUID 和范围缺口；数据年限；计量覆盖；分配；材料和制冷剂核对；返工废品；废水表征；遗漏；不确定性 |
| update_trigger | 设计、主要材料、路线、连接或清洗技术、制冷剂、测试、场址、能源、分配驱动、上游数据集或代表期发生变化 |

## 11. 数据源

| 来源 ID | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《产品总分类》第 3.0 版结构，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-06） | CPC 43941 正式英文分类身份和所列设备零件范围；不支持清单数量或范围 |
