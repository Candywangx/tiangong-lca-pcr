---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.straw-or-fodder-balers-including-pickup-balers
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 秸秆或饲料打捆机，包括捡拾式打捆机

## 1. 范围与适用性

本 PCR 支持构建一台完整秸秆或饲料打捆机（包括捡拾式打捆机）在制造厂厂门完成验收时的前景数据包。其涵盖所声明配置的部件制造、外购部件、焊接、条件性表面处理和涂装、总装、验收试验及相应的实测废物流和直接排放。

本 PCR 不涵盖农业打捆服务、作物或饲料生产、田间使用燃料、维护、备件、厂门外配送、使用或生命周期终结。捡拾装置仅在安装于所声明成品打捆机配置时纳入。打包裹膜机、装捆机和未完成的打捆机子总成不在范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.straw-or-fodder-balers-including-pickup-balers |
| classification_refs | CPC 3.0 44125，Straw or fodder balers, including pickup balers |
| covered_products | 作为一台完整成品机械制造的秸秆打捆机、饲料打捆机和捡拾式打捆机 |
| excluded_products | 打捆服务；打捆后的秸秆或饲料；独立裹膜机或装捆机；备件；未完成子总成 |
| representative_product | 一台完整的已配置打捆机，适用时包括捡拾机构 |
| production_route | 金属部件制造、外购部件、焊接、条件性涂装、总装和厂门验收 |
| market_state | 制造厂厂门的新制、已验收成品机械；须声明配置、净质量、捡拾装置和交付状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造并验收一台完整的秸秆或饲料打捆机，适用时包括捡拾设备 |
| How much | 一台成品打捆机 |
| How well | 所声明配置通过文件化制造商验收检查；须声明净质量和捡拾状态 |
| How long or cycle | 一个止于厂门验收的制造周期；使用寿命和田间使用不在本 PCR 范围内 |
| reference_flow_link | `finished_baler` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 成品秸秆或饲料打捆机（UUID 未解决） |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造商和工厂；型号/配置；打捆机类型；是否配备捡拾装置；验收净质量；物料清单；涂装路线；验收试验边界；地理范围；生产期间 |

缺失必需限定信息会使参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录完整打捆机的验收净质量，并将前景交换归一化到该确切验收单位。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留计量电力的原始能量单位，并记录归一化前转换为 MJ 的换算。 |
| `gas_volume_condition` | 固化用天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明计量基准或参考状态；无文件化因子时不得换算气体体积。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购材料、部件、能源、气体、水和涂料产品跨越工厂边界。 |
| starting_condition_role | 前景制造始于收货或产生点；上游开采和生产采用链接数据集。 |
| product_classification_scope | 仅限 CPC 3.0 44125 的完整新制机械；子总成不得替代参考产品。 |
| recursive_input_rule | 记录同类别实际供应投入及其配置，并要求独立上游数据集；不得递归代入本 PCR 的参考流。 |
| upstream_dataset_requirement | 为每种外购产品、电力、天然气、二氧化碳、水和废物路线链接上游数据；披露地理范围、技术和供应状态。 |
| disclosure | 声明排除项、条件性路线、外包作业、分配选择、直接排放控制边界和缺失记录。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_gate` | 前景制造边界 | 纳入工厂边界投入、最终产品、制造废物和实测直接排放；明确上游数据集，不得默默吸收其负荷。 | `iso-14044-2006` |
| `boundary_conditional_coating` | 表面处理和涂装 | 仅在所声明路线使用时纳入预处理、施涂、流平、固化和直接排放；保留涂层化学品和排放控制边界。 | `epa-metal-parts-surface-coating-tsd-2001` |
| `boundary_welding_emissions` | 电弧焊 | 存在电弧焊时，在所声明排气边界采集耗材和直接颗粒物或气态排放；无路线限定信息时不得套用通用因子。 | `epa-ap42-electric-arc-welding-1995` |
| `boundary_representative_bom` | 完整打捆机配置 | 以一个制造商受控的型号、序列号范围以及捆扎、制动和预切碎配置作为报告配置。John Deere 568/578 手册以有界代表性部件架构确立了捡拾、捆室辊及轴承、传动、液压、轮毂、捆扎、润滑和电气控制系统；实例化时须以报告制造商的受控 BOM 替代该示例架构，且不得混合备选配置。 | `john-deere-tm3300-2010` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication` | 部件制造和焊接 | required | — | 制造和连接结构件，并组合外购机械部件 | 每台验收成品打捆机 |
| `surface_finish` | 表面处理和涂装 | conditional | 仅当所声明配置在报告工厂涂装时纳入。 | 准备、涂装、固化并管理涂装排放 | 每台已涂装验收成品打捆机 |
| `final_assembly_acceptance` | 总装和验收 | required | — | 装配完整机械并确定厂门验收输出 | 一台成品打捆机 |

### 过程：部件制造和焊接（`component_fabrication`）

#### 输入

##### 产品流

###### 打捆机部件用碳钢板（`steel_plate`）

记录切割或成形为部件的进厂钢板；钢级、厚度、镀层状态和供应路线须与型材分开记录。

- 选定流：碳钢板（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：称量发放至制造订单的合格钢板减去有记录的退回量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_issue`
- 来源：

###### 打捆机机架用碳钢结构型材（`steel_structural_sections`）

记录用于机架的进厂型材；不得与钢板合并，因为几何形状和供应状态可能不同。

- 选定流：碳钢结构型材（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：称量或取得所安装型材的可追溯物料发放记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_issue`
- 来源：

###### 安装于打捆机的外购液压缸（`hydraulic_cylinder`）

- 选定流：液压缸（UUID 未解决）
- 流属性/单位：Number / item
- 数量规则：计数安装于验收单元的液压缸并保留供应商部件记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_installation`
- 来源：

###### 部件制造和焊接用外购电力（`fabrication_electricity`）

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：分配至制造订单的计量部件制造和焊接电力。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：

###### 钢焊丝（`welding_wire`）

- 选定流：钢焊丝（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：按制造订单和焊接路线称量发放焊丝减去有记录的退回量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_welding_records`
- 来源：`epa-ap42-electric-arc-welding-1995`

###### 焊接保护气用二氧化碳（`welding_carbon_dioxide`）

仅当所声明气体保护金属极电弧焊路线使用外供二氧化碳保护气时记录；保留气体组成和计量基准。

- 选定流：二氧化碳 `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按制造订单计量或按钢瓶核算的保护气用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_welding_records`
- 来源：`epa-ap42-electric-arc-welding-1995`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 分类收集的钢制造废料（`steel_scrap`）

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按接收路线称量从制造订单发出的废料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：

##### 基本流

###### 电弧焊产生的 PM10 颗粒物（`welding_pm10`）

仅当存在电弧焊且所声明排气边界释放实测直接颗粒物时记录。

- 选定流：电弧焊产生的 PM10 颗粒物（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：在所声明焊接排气控制措施之后实测或通过物料平衡得到的直接颗粒物释放量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`epa-ap42-electric-arc-welding-1995`

### 过程：表面处理和涂装（`surface_finish`）

#### 输入

##### 产品流

###### 表面处理用工艺用水（`coating_process_water`）

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：所声明表面处理作业使用的计量水量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台已涂装验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_records`
- 来源：`epa-metal-parts-surface-coating-tsd-2001`

###### 粉末涂料配方（`powder_coating`）

- 选定流：粉末涂层 `0c581697-0eed-4b86-a070-b94966eb7344`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量发放的新涂料减去退回至有文件记录的再用或废物路线的回收涂料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台已涂装验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_records`
- 来源：`epa-metal-parts-surface-coating-tsd-2001`

###### 涂装用外购电力（`coating_electricity`）

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：分配至已涂装制造订单的计量涂装电力。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台已涂装验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：

###### 涂层固化用气态天然气（`coating_natural_gas`）

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：所声明涂层固化设备使用的计量气态天然气。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台已涂装验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`epa-metal-parts-surface-coating-tsd-2001`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 水性表面预处理废水（`coating_wastewater`）

仅当所声明水性预处理路线排放或外送一个物理上独立的废水流时记录；保留处理去向和实测质量。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按路线和报告期间测量离开前景预处理工序、扣除有记录内部回用量后的废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台已涂装验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_outputs`
- 来源：`epa-metal-parts-surface-coating-tsd-2001`

###### 废粉末涂料过喷粉（`powder_overspray_waste`）

仅当粉末过喷粉不返回同一涂装批次、而是作为独立管理的废物离开时记录。

- 选定流：粉末涂装废弃物 `9aa53a82-5462-400e-9096-efab7718201f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量送往所声明接收路线的未回收粉末；排除返回使用的回收粉末。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台已涂装验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_outputs`
- 来源：`epa-metal-parts-surface-coating-tsd-2001`

##### 基本流

###### 厂内天然气固化产生的化石源二氧化碳（`coating_fossil_co2`）

仅当报告工厂燃烧天然气进行涂层固化时记录。这是直接燃烧排放，不包括天然气供应和电力的上游排放。

- 选定流：二氧化碳（化石源）`08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测控制后烟囱排放，或根据声明参考状态下的计量气量、供应商气体组成或实测化石碳含量、文件化氧化率以及碳至二氧化碳分子质量比计算；不得使用无文件依据的默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台已涂装验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emissions`
- 来源：`epa-metal-parts-surface-coating-tsd-2001`

###### 涂装产生的非甲烷挥发性有机化合物（`coating_nmvoc`）

仅当所声明预处理或涂装路线使用有机溶剂并在控制措施后释放实测非甲烷挥发性有机化合物时记录。

- 选定流：非甲烷挥发性有机化合物 `08a91e70-3ddc-11dd-a302-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在所声明排放控制边界处测量烟囱或无组织释放，并保留溶剂组成。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台已涂装验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`epa-metal-parts-surface-coating-tsd-2001`

### 过程：总装和验收（`final_assembly_acceptance`）

#### 输入

##### 产品流

以下部件交换构成 John Deere 568/578 技术手册所支持的有界圆捆捡拾式打捆机架构。须依据制造商受控 BOM 实例化一个确切报告配置。只记录已安装的外购部件，将厂内制造部件归入 `component_fabrication`，且不得混合序列号、制动、预切碎、网捆或绳捆备选配置。

###### 外购捡拾机构（`pickup_assembly`）

仅当所选 BOM 将完整捡拾机构作为一个收货部件时，记录该外购机构。

- 选定流：打捆机捡拾机构（UUID 未解决）
- 流属性/单位：Number / item
- 数量规则：计数安装于验收单元的完整外购捡拾机构；若捡拾机构在厂内制造，则改为记录其原子材料和部件投入，并将本行标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_installation`
- 来源：`john-deere-tm3300-2010`

###### 外购捆室辊（`bale_chamber_roll`）

记录所选配置中构成或支承捆室的每个外购辊。

- 选定流：捆室辊（UUID 未解决）
- 流属性/单位：Number / item
- 数量规则：计数安装于受控配置的外购捆室辊；厂内制造的辊改由其原子制造投入表示。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_installation`
- 来源：`john-deere-tm3300-2010`

###### 外购动力输出轴传动轴（`pto_driveline`）

记录安装在牵引接口与打捆机传动系统之间的外购拖拉机动力输出轴传动轴。

- 选定流：打捆机动力输出轴传动轴（UUID 未解决）
- 流属性/单位：Number / item
- 数量规则：计数安装于验收配置的外购传动轴，并保留部件号、离合器类型和供应商。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_installation`
- 来源：`john-deere-tm3300-2010`

###### 外购齿轮箱（`gear_case`）

记录安装于所选传动和预切碎配置的每个外购齿轮箱。

- 选定流：打捆机齿轮箱（UUID 未解决）
- 流属性/单位：Number / item
- 数量规则：计数安装于所选配置的外购齿轮箱；区分配置的预切碎状态和供应商部件号。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_installation`
- 来源：`john-deere-tm3300-2010`

###### 外购传动链（`drive_chain`）

记录作为独立传动部件安装的外购钢制传动链。

- 选定流：钢制传动链（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：按部件号和链条规格记录已安装外购传动链的净接收质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_installation`
- 来源：`john-deere-tm3300-2010`

###### 外购滚动轴承（`rolling_element_bearing`）

记录安装于捆室辊和其他已声明轴上的外购滚动轴承。

- 选定流：捆室辊用滚动轴承（UUID 未解决）
- 流属性/单位：Number / item
- 数量规则：根据配置受控 BOM 计数已安装的外购轴承，并保留轴承类型、尺寸和供应商部件号。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_installation`
- 来源：`john-deere-tm3300-2010`

###### 外购车轮与轮胎总成（`wheel_tire_assembly`）

记录支承验收打捆机的每个外购车轮与轮胎总成。

- 选定流：打捆机车轮与轮胎总成（UUID 未解决）
- 流属性/单位：Number / item
- 数量规则：计数已安装的外购车轮与轮胎总成，并保留车轮、轮胎、轮毂和制动配置标识。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_installation`
- 来源：`john-deere-tm3300-2010`

###### 外购电子捆扎控制器（`electronic_controller`）

记录在所选配置中执行捆扎控制功能的外购电子控制单元。

- 选定流：打捆机捆扎功能电子控制器（UUID 未解决）
- 流属性/单位：Number / item
- 数量规则：对所选手动或电子捆扎控制配置，计数已安装的外购控制器；不得将监视器、线束、传感器或执行器汇总到本行。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_installation`
- 来源：`john-deere-tm3300-2010`

###### 外购网捆机构（`net_tying_mechanism`）

记录有界代表性配置中的外购网捆机构。若报告配置改用绳捆，则须用其原子绳捆机构 BOM 交换替代本行，且不得同时保留两种备选路线。

- 选定流：打捆机网捆机构（UUID 未解决）
- 流属性/单位：Number / item
- 数量规则：计数所选受控配置中安装的网捆机构，并保留供应商部件号。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_installation`
- 来源：`john-deere-tm3300-2010`

###### 出厂加注的传动链润滑油（`factory_fill_lubricant`）

记录在工厂加入且保留于验收产品或前景设备边界内的传动链润滑油。

- 选定流：传动链润滑油（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：称量厂门验收前加入的润滑油减去有记录回收量；仅包括出厂加注，不包括田间使用维护润滑油。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_installation`
- 来源：`john-deere-tm3300-2010`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 完整验收秸秆或饲料打捆机（`finished_baler`）

记录厂门验收的完整成品机械。不得以已装配或已涂装子总成替代该参考产品状态。

- 选定流：成品秸秆或饲料打捆机（UUID 未解决）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：一台具有所声明净质量和配置的验收成品打捆机。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：一台验收成品打捆机
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共用制造作业 | 可行时，优先将仪表、物料发放和废物记录细分至制造订单，从而避免分配。 | `iso-14044-2006` |
| `allocation_causal_basis` | 剩余共用作业 | 不能细分时，使用在报告期间保持一致的、已文件化的因果物理驱动因素分配共用记录；披露驱动因素和计算。 | `iso-14044-2006` |
| `allocation_scrap_route` | 钢废料 | 将分类收集的钢废料记录至所声明接收处理路线；除非披露下游建模和接收路线，不得对回收抵扣。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_issue` | component_fabrication | 钢板和结构型材 | 物料发放和退回记录 | 订单号；材料等级；规格；发放质量；退回质量；供应路线 | 经校准秤和可追溯库存记录 | kg | 每个订单 | 报告生产期间 | 报告工厂 | 净发放质量/声明配置的验收打捆机数 | 发放、退回和库存核对记录 |
| `cp_component_installation` | component_fabrication_and_final_assembly_acceptance | 所声明外购部件和出厂加注润滑油 | 受控 BOM、收货、安装和加注记录 | 制造商；型号；序列号范围；配置选项；订单号；部件号；供应商；安装数量或质量；不合格或退回数量 | 将配置受控 BOM 与可追溯总装及发放记录核对 | item 或 kg | 每个订单 | 报告生产期间 | 报告工厂 | 安装数量或净加注量/确切配置的验收打捆机数 | 经签署 BOM 修订版、部件追溯、发放/退回记录和验收记录 |
| `cp_energy_records` | component_fabrication | 电力和天然气 | 仪表记录和分配工作表 | 仪表号；读数；能量单位；气体状态；运行时间；订单分配驱动因素 | 经校准仪表和分配工作表 | MJ 或 m3 | 每个间隔 | 报告生产期间 | 报告工厂 | 可归属仪表总量/验收打捆机数 | 仪表校准和公用工程核对 |
| `cp_welding_records` | component_fabrication | 焊丝和保护气 | 耗材发放记录 | 焊接路线；焊丝规格；气体组成；发放量；退回量；订单号 | 可追溯耗材记录 | kg | 每个订单 | 报告生产期间 | 报告工厂 | 净耗材/验收打捆机数 | 批次和工单核对 |
| `cp_coating_records` | surface_finish | 水和粉末涂料 | 涂装批次和仪表记录 | 路线；水质；涂料化学品；发放质量；回收质量；仪表读数；订单号 | 批次记录、秤和仪表 | kg | 每个涂装批次 | 报告生产期间 | 报告工厂 | 净投入/已涂装验收打捆机数 | 批次核对和涂装过程记录 |
| `cp_coating_outputs` | surface_finish | 预处理废水和废粉末过喷粉 | 流量计、秤、物料平衡和出库记录 | 涂装路线；水投入；回用水；排放或外送废水；粉末发放；返回使用的回收粉；废粉；接收路线；订单分配 | 经校准仪表和秤与批次及出库记录核对 | kg | 每个批次或每次出库 | 报告生产期间 | 报告工厂 | 实测输出/采用文件化分配的已涂装验收打捆机数 | 批次平衡、内部回用记录和接收记录 |
| `cp_combustion_emissions` | surface_finish | 固化气体燃烧产生的化石源二氧化碳 | 烟囱测量或计量燃气碳核算 | 燃气仪表读数和参考状态；供应商组成或实测化石碳含量；氧化率基准；控制边界；已验收涂装单元 | 文件化烟囱测量或碳物料平衡 | kg | 每次测量或报告间隔 | 报告生产期间 | 报告工厂 | 直接化石源 CO2/与燃气分配相匹配的已涂装验收打捆机数 | 测量报告或与燃气仪表核对的计算表 |
| `cp_waste_and_emissions` | component_fabrication 和 surface_finish | 钢废料、焊接 PM10 和涂装 NMVOC | 出库记录或排放测量 | 流身份；质量；控制装置；采样方法；接收路线；分配 | 秤、出库记录或文件化排放试验 | kg | 每次出库或测量 | 报告期间和测试日期 | 报告工厂 | 记录量/采用文件化分配的验收打捆机数 | 接收记录、控制日志和测试报告 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material_issue` | 钢、焊丝和粉末涂料 | 净发放 = 发放质量 − 有记录的退回或回收质量；除以声明配置的验收打捆机数。 | 发放、退回、回收、验收记录 | 归一化物料投入 | |
| `calc_metered_energy` | 电力和天然气 | 无专用仪表时，使用已文件化因果驱动因素归属计量消耗；除以验收打捆机数。 | 仪表读数、气体状态、运行时间、分配驱动因素、验收记录 | 归一化能源或气体投入 | `iso-14044-2006` |
| `calc_direct_release` | 直接颗粒物和 NMVOC | 将控制边界后的实测或物料平衡排放按对应期间和路线归一化至验收打捆机。 | 排放测量或物料平衡、控制边界、验收记录 | 归一化基本流排放 | `epa-ap42-electric-arc-welding-1995`; `epa-metal-parts-surface-coating-tsd-2001` |
| `calc_controlled_bom` | 外购部件和出厂加注润滑油 | 仅选择一个型号、序列号范围和路线配置；每个适用原子 BOM 行只纳入一次，以材料交换替代厂内制造部件行，扣除有记录退回量，并除以同一配置的验收单元数。 | 经签署 BOM 修订版、部件收货、安装或加注记录、退回记录、验收单元 | 归一化配置部件或耗材投入 | `john-deere-tm3300-2010` |
| `calc_coating_residuals` | 废水和粉末过喷粉 | 对每个声明涂装批次，报告离开前景边界并扣除内部回用量的实测废水，以及外送并扣除返回同一工序粉末后的实测废粉；不得把未经核验的差额推断为任一输出。 | 水和粉末批次投入、回用/回收记录、输出测量、出库记录、已验收涂装单元 | 归一化废水和废粉输出 | `epa-metal-parts-surface-coating-tsd-2001` |
| `calc_natural_gas_co2` | 固化直接化石源 CO2 | 采用直接测量，或按“声明状态下计量燃气体积 × 文件化单位燃气体积化石碳质量 × 文件化氧化率 × 44/12”计算化石源 CO2；按共享燃气分配的已涂装验收单元归一化。不得使用无文件依据的默认组成或氧化率。 | 燃气体积和状态、供应商组成或实测化石碳含量、氧化证据、已涂装验收单元 | 归一化直接化石源 CO2 排放 | |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_configuration` | 参考产品和部件 | 保留配置、打捆机类型、捡拾装置、净质量和部件规格；不得不披露地合并不同配置。 | 验收记录和受控物料清单 |
| `dq_bom_instantiation` | 完整打捆机部件投入 | 将验收单元核对到一个经签署 BOM 修订版和一条序列号/配置记录。说明与代表性 568/578 架构的每项差异，并证明捡拾、捆室、传动、液压、轴承、车轮/制动、捆扎、控制和出厂加注耗材均已纳入、通过其他行在厂内制造，或明确不适用。 | BOM 核对表和配置偏差日志 |
| `dq_temporal` | 所有前景记录 | 使用一个声明的报告期间，并保留记录和排放测量日期。 | 注明日期的原始记录 |
| `dq_boundary` | 条件性焊接和涂装 | 说明焊接、预处理、涂装、流平、固化和控制措施是否在报告工厂发生。 | 过程图、作业指导书和控制日志 |
| `dq_completeness` | 所有清单行 | 披露缺失流、UUID 缺口、遗漏路线、分配驱动因素和上游数据集。 | 数据包完整性声明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考产品 | 确认输出是一台完整验收打捆机，而非农业秸秆流或未完成打捆机子总成。 | `un-cpc-3-0-structure-2025` |
| `validation_mass_and_configuration` | 参考流 | 归一化前检查验收净质量、打捆机类型、捡拾状态、工厂和生产期间。 | |
| `validation_route_conditions` | 条件性行 | 仅在路线适用时纳入涂装和焊接行；核验关联的仪表、物料、废物和排放记录。 | `epa-ap42-electric-arc-welding-1995`; `epa-metal-parts-surface-coating-tsd-2001` |
| `validation_bom_closure` | 总装投入 | 核验一个受控型号/序列号/配置，并将每个已安装外购部件和出厂加注耗材与验收单元核对；若同一清单混入备选配置则不通过。 | `john-deere-tm3300-2010` |
| `validation_coating_output_closure` | 表面预处理和涂装 | 适用水性预处理、粉末涂装或天然气固化时，要求相应实测废水、实测废粉和直接化石源 CO2 行，或由实际路线支持的文件化零值/不适用判定。 | `epa-metal-parts-surface-coating-tsd-2001` |
| `validation_uuid_resolution` | UUID 未解决流行 | 不得以代理替代未解决 UUID；仅在确认确切流身份、产品状态、属性和单位后解决。 | |
| `validation_balance` | 物料和废物记录 | 核对物料发放、退回、成品输出和废料出库；调查无法解释的差异。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 可投影为 secondary_dataset 或 background_dataset 的前景数据包 |
| downstream_use | 所声明打捆机配置的制造阶段 process 和 lifecyclemodel 投影 |
| allowed_use | 保留配置、工厂、期间、上游数据集和排除项的从摇篮到工厂大门或制造阶段研究 |
| excluded_use | 打捆服务、作物生产、田间使用性能，或没有额外前景数据的不同配置比较 |
| required_metadata | 制造商；工厂；地理范围；期间；打捆机类型；捡拾状态；净质量；部件规格；涂装和焊接路线；能源基准；上游数据集；分配；排放控制边界 |
| required_quality_disclosure | 记录覆盖度、缺失 UUID、未解决范围证据、分配驱动因素、计量基准、条件性路线适用性和质量例外 |
| update_trigger | 配置、材料规格、捡拾设计、供应路线、焊接或涂装技术、能源、排放控制、工厂或计量方法变更 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 structure CSV, row 44125, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 产品分类身份和范围 |
| `epa-ap42-electric-arc-welding-1995` | official_guidance | U.S. EPA, AP-42 Chapter 12.19, Electric Arc Welding, January 1995, https://www.epa.gov/sites/production/files/2020-11/documents/c12s19.pdf | 焊接过程、耗材、排放和限定信息采集规则 |
| `epa-metal-parts-surface-coating-tsd-2001` | official_guidance | U.S. EPA, National Emission Standards for Hazardous Air Pollutants for Miscellaneous Metal Parts and Products Surface Coating Operations: Technical Support Document, https://nepis.epa.gov/Exe/ZyPDF.cgi?Dockey=P1006FDO.PDF | 条件性农业机械涂装边界和潜在排放点 |
| `iso-14044-2006` | standard | ISO 14044:2006 Environmental management — Life cycle assessment — Requirements and guidelines, confirmed 2022, https://committee.iso.org/standard/38498.html | LCA 范围、清单、报告和分配规则基础 |
| `john-deere-tm3300-2010` | official_guidance | Deere & Company, 568 and 578 Round Balers Technical Manual, TM3300 (31MAR10), official preview, https://techpubs.deere.com/api/preview/get/TM3300 | 有界代表性捡拾式打捆机部件架构、配置备选项和受控 BOM 实例化要求 |
