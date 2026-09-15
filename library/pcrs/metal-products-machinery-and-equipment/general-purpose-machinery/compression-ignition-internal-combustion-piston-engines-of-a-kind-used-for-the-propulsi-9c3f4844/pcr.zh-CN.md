---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.compression-ignition-internal-combustion-piston-engines-of-a-kind-used-for-the-propulsi-9c3f4844
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 车辆用压燃式活塞内燃机（铁路或有轨电车车辆除外）

## 1. 范围与适用性

本 PCR 适用于道路车辆及其他非铁路车辆推进用新制压燃式活塞内燃机的前景制造数据包。边界包括发动机生产企业实施的零部件制造与机械加工、装配与表面处理，以及出厂验收试验，终点为制造商厂门。外购材料、零部件、电力、热能、水、燃料和化学品均作为可见产品投入，并链接上游数据集。

本 PCR 不涵盖点燃式发动机、铁路或有轨电车推进发动机、航空发动机、船用或固定式发动机、单独销售的零部件、再制造、整车集成、车辆运行、维护及报废阶段。生产者应披露外包工序；上游投入缺少有效链接数据集时，不得宣称清单达到从摇篮到厂门的完整性。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.compression-ignition-internal-combustion-piston-engines-of-a-kind-used-for-the-propulsi-9c3f4844 |
| classification_refs | CPC 3.0：43123（产品类别精确对应） |
| covered_products | 为道路车辆或其他非铁路车辆推进而设计，并以完整、通过出厂试验状态交付的新制压燃式活塞内燃机 |
| excluded_products | 点燃式发动机；铁路或有轨电车推进发动机；航空、船用或固定式发动机；单独销售的发动机零部件；再制造发动机 |
| representative_product | 发动机制造商厂门处的完整柴油循环车辆推进发动机 |
| production_route | 零部件制造或机械加工、发动机装配与表面处理、出厂验收试验；外包阶段须披露并链接 |
| market_state | 整车装配前的新制、完整、通过出厂试验的发动机；须声明干重或湿重状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一台适用于非铁路车辆推进的新制、完整、通过出厂试验的压燃式活塞内燃机 |
| How much | 发动机制造商厂门处 1 kg 完整发动机质量 |
| How well | 满足所声明发动机系列规范、额定功率与转速、适用排放阶段，以及附件和后处理配置 |
| How long or cycle | 一个制造及出厂验收周期；本厂门到厂门参考不表示发动机使用寿命 |
| reference_flow_link | `reference_engine_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 车辆用压燃式活塞内燃机 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 发动机型号或系列；排量；额定功率与额定转速；适用排放阶段和市场；干重或湿重状态；是否包括涡轮增压器、燃油系统、控制系统、后处理装置、起动机、发电机及其他附件；制造地域和基准期；新制而非再制造状态 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 完整发动机参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在所声明干重或湿重状态下称量交付发动机；所有交换均按相同状态的 1 kg 发动机归一化。 |
| `material_mass` | 材料、化学品、燃料、废金属、废油、废水、废涂料以及气态或颗粒物排放 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用校准的质量记录；由体积换算时，应在重要情况下记录密度、温度和浓度。 |
| `energy_quantity` | 电力和外购热能 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 按 1 kWh = 3.6 MJ 将电表读数换算为 MJ，并保留电表边界；无证据时不得把外购热能换算成燃料。 |
| `exhaust_test_basis` | 验收试验排放 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 汇总所声明试验循环内测得的排放质量，并仅分配给实际由该试验代表的发动机；披露循环、采样位置、检出限及低于检出限数据的处理。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 发动机前景制造 | 纳入生产者控制的零部件制造或加工、装配、表面处理、验收试验、厂内物料移动、返工，以及前景废物在制造商厂门前的处理。 | `rouhento-2018-diesel-engine-lca` |
| `boundary_upstream_links` | 外购投入 | 将每种外购材料、零部件、能源、水、燃料和化学品分别作为产品投入，并链接地域与技术适宜的上游数据集。 | `jrc-2025-ef-method-key-aspects` |
| `boundary_outsourced_operations` | 外包制造 | 通过明确的服务或中间产品链接纳入外包工序，并披露其地域和数据质量；不得隐性遗漏。 | `jrc-2025-ef-method-key-aspects` |
| `boundary_exclusions` | 下游生命周期 | 除非在不改变本制造清单的独立下游模型中另行增加，否则排除整车装配、发动机运行、维护、更换、车辆使用及报废。 | `un-cpc-3-0-structure-2025` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购材料、零部件、能源、水、燃料和化学品到达发动机制造前景边界；其上游数据集单独链接 |
| starting_condition_role | 界定前景起点，防止把上游生产嵌入无法追溯的汇总量 |
| product_classification_scope | 仅限完整 CPC 43123 发动机；零部件及同类中间发动机在并入前均保留为单独投入 |
| recursive_input_rule | 若以 CPC 43123 发动机作为投入，应按供应商、质量状态及上游数据集记录为独立产品投入，不在同一过程内递归套用本 PCR |
| upstream_dataset_requirement | 每项外购投入均须有具代表性的上游数据集，或明确记录数据缺口 |
| disclosure | 声明自营与外包阶段、参考干重或湿重状态、所含发动机附件、试验比例、分配、截断、地域、技术和基准期 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_manufacturing` | 零部件制造与机械加工 | required | 纳入生产者控制的铸造、成形、热处理、机械加工和清洗；外包零部件作为链接的外购投入表示 | 将金属原料转化为发动机零部件 | 每 1 kg 完整发动机输出 |
| `assembly_and_finishing` | 发动机装配与表面处理 | required | 纳入实际实施的机械装配、清洗、涂装、干燥、加注、防锈、返工和厂内搬运 | 产出待试验的成品发动机 | 每 1 kg 完整发动机输出 |
| `factory_acceptance_test` | 出厂验收试验 | required | 纳入有记录的逐台或抽样试验，并把抽样试验负荷分配至其代表的生产批次 | 确认发动机符合性并产出参考产品 | 每 1 kg 完整发动机输出 |

### 过程：零部件制造与机械加工（`component_manufacturing`）

#### 输入

##### 产品流

###### 铸铁原料（`cast_iron`）

根据采购和库存记录，记录用于企业自制缸体、缸盖、壳体或其他铸件的铸铁。

- 选定流：铸铁
- 流属性/单位：Mass / kg
- 数量规则：纳入零部件制造的净采购质量，经库存变化校正，废料另行记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_materials`
- 来源：`rouhento-2018-diesel-engine-lca`

###### 合金钢原料（`alloy_steel`）

记录用于企业自制轴、齿轮、紧固件或其他机加工件的合金钢。

- 选定流：合金钢
- 流属性/单位：Mass / kg
- 数量规则：纳入零部件制造的净采购质量，经库存变化校正，废料另行记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_materials`
- 来源：`rouhento-2018-diesel-engine-lca`

###### 铝合金（`aluminium_alloy`）

记录用于企业自制铸造或机加工发动机零部件的铝合金原料。

- 选定流：铝合金 `28b47d6d-68b4-4810-b764-01a1fc1352dc`
- 流属性/单位：Mass / kg
- 数量规则：纳入零部件制造的净采购质量，经库存变化校正，废料另行记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_materials`
- 来源：`rouhento-2018-diesel-engine-lca`

###### 切削液（`cutting_fluid`）

记录进入机械加工的补充切削液，不记录系统内部循环液体存量。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass / kg
- 数量规则：采购补充量加期初库存减期末库存，排除内部回收循环量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_consumables`
- 来源：`rouhento-2018-diesel-engine-lca`

###### 电力（`component_electricity`）

记录纳入的零部件工序及其分配辅助设施的计量电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：将计量电力换算为 MJ，并按有记录的设备时间或生产质量分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_water`
- 来源：`rouhento-2018-diesel-engine-lca`

###### 工艺用水（`component_process_water`）

记录供给本过程企业自控机械加工和零件清洗的工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：进入本过程的计量或账单水量；按体积计量时用有记录的密度换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_water`
- 来源：`rouhento-2018-diesel-engine-lca`

###### 热能（`component_heat`）

记录输送至纳入热处理或零部件工序的外购热能；场内直接燃料应分别记录为原子投入。

- 选定流：热能 `260672cc-62f0-48c3-b09e-22e71519be74`
- 流属性/单位：Net calorific value / MJ
- 数量规则：可归属本过程的计量外购热能；供应账单以净能量计费时扣除有记录的回流能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_water`
- 来源：`rouhento-2018-diesel-engine-lca`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 回收用废钢（`steel_scrap`）

记录分类收集并送往回收的黑色金属加工和成形废料。

- 选定流：废钢 `6b1343f5-929b-4a1b-8459-f741ed19ebd2`
- 流属性/单位：Mass / kg
- 数量规则：称量并归属于纳入发动机生产的外运黑色金属废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_wastes`
- 来源：`rouhento-2018-diesel-engine-lca`

###### 铝废料（`aluminium_scrap`）

记录离开前景系统的分类铝加工或铸造废料。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：称量并归属于纳入发动机生产的外运铝废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_wastes`
- 来源：`rouhento-2018-diesel-engine-lca`

###### 废切削油（`waste_cutting_oil`）

记录从循环加工系统排出并送往外部处理的废切削油。

- 选定流：废切削油 `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- 流属性/单位：Mass / kg
- 数量规则：离开前景边界的废切削油称量或转移联单质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_wastes`
- 来源：`rouhento-2018-diesel-engine-lca`

##### 基本流

### 过程：发动机装配与表面处理（`assembly_and_finishing`）

#### 输入

##### 产品流

###### 液体洗涤剂（`liquid_detergent`）

记录用于发动机零部件或总成水基清洗的液体洗涤剂。

- 选定流：液体洗涤剂 `c1214ed0-28a4-4273-a8c9-a4f29351747a`
- 流属性/单位：Mass / kg
- 数量规则：采购补充量经库存变化校正，稀释用水另行记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_materials`
- 来源：`rouhento-2018-diesel-engine-lca`

###### 工业维护涂料（`industrial_maintenance_coating`）

将作为采购产品跨越表面处理边界的保护涂料固体及载体一并记录。

- 选定流：工业维护涂料 `46c99c8a-0ae9-4be8-972f-a2b9ab3baaf5`
- 流属性/单位：Mass / kg
- 数量规则：涂装线领用量减可回收退料，并声明配方和固体分数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_materials`
- 来源：`rouhento-2018-diesel-engine-lca`

###### 防锈油（`rust_preventive_oil`）

记录装运前专用于临时防腐保护的油品。

- 选定流：防锈油
- 流属性/单位：Mass / kg
- 数量规则：领用质量减可回收退料；仅在有记录证明代表产品未使用时填报零值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_materials`
- 来源：`rouhento-2018-diesel-engine-lca`

###### 润滑油（`lubricating_oil`）

记录出厂试验和装运前加注到发动机中的润滑油。

- 选定流：润滑油 `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- 流属性/单位：Mass / kg
- 数量规则：净加注质量，包括试验补充量，减去单独计量的回收油
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fluid_filling`
- 来源：`rouhento-2018-diesel-engine-lca`

###### 冷却液（`coolant`）

记录跨越过程边界并加注到发动机或封闭出厂试验回路的冷却液。

- 选定流：冷却液 `92c6fd56-f8a2-45ed-bb52-c4238cf8927c`
- 流属性/单位：Mass / kg
- 数量规则：新冷却液净补充量；排除内部循环存量，并声明配方和浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fluid_filling`
- 来源：`rouhento-2018-diesel-engine-lca`

###### 电力（`assembly_electricity`）

记录装配、清洗、涂装、干燥、搬运及所分配辅助设施的计量电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：将计量电力换算为 MJ，并按有记录的设备时间或生产质量分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_water`
- 来源：`rouhento-2018-diesel-engine-lca`

###### 工艺用水（`assembly_process_water`）

记录供给清洗、涂料配制和表面处理的水，不包括闭路循环量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：进入装配与表面处理的计量或账单水量，并以有记录的密度换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_water`
- 来源：`rouhento-2018-diesel-engine-lca`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 含油工业废水（`oily_industrial_wastewater`）

记录清洗或表面处理产生、受油污染且离开边界送往处理的水相废物流。

- 选定流：含油工业废水
- 流属性/单位：Mass / kg
- 数量规则：可归属于发动机生产的计量排放质量，并声明含油浓度及处理去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_wastes`
- 来源：`rouhento-2018-diesel-engine-lca`

###### 废涂料残渣（`waste_paint`）

记录由混料、施工、过喷捕集或设备清洗产生并送往外部处理的涂料残渣。

- 选定流：废涂料残渣 `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
- 流属性/单位：Mass / kg
- 数量规则：离开前景边界的废涂料称量或转移联单质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_wastes`
- 来源：`rouhento-2018-diesel-engine-lca`

##### 基本流

### 过程：出厂验收试验（`factory_acceptance_test`）

#### 输入

##### 产品流

###### 柴油（`test_diesel_fuel`）

记录逐台或抽样出厂验收试验中燃烧的柴油。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：代表性试验循环期间试验台燃料表差值，并分配至有记录的生产批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance_test`
- 来源：`rouhento-2018-diesel-engine-lca`

###### 电力（`test_electricity`）

记录试验台设备、控制系统、通风、泵及所分配辅助设施的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：将计量的试验台电力换算为 MJ，并分配至代表的生产批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance_test`
- 来源：`rouhento-2018-diesel-engine-lca`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 完整车辆用压燃式发动机（`reference_engine_output`）

记录制造商厂门处处于所声明干重或湿重状态的完整合格发动机。

- 选定流：车辆用压燃式活塞内燃机
- 流属性/单位：Mass / kg
- 数量规则：按称量的合格发动机质量缩放，固定归一化输出为 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reference_product`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

##### 基本流

###### 二氧化碳（化石源）（`test_carbon_dioxide_fossil`）

记录代表性验收试验循环中试验发动机尾气排放的化石源二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：代表循环内的尾气实测质量；无直接测量时可采用已声明且基于实测燃料碳的碳平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_emissions`
- 来源：`eu-reg-582-2011-consolidated-2021`

###### 一氧化碳（化石源）（`test_carbon_monoxide_fossil`）

记录代表性验收试验循环中试验发动机尾气排放的化石源一氧化碳。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：由分析仪数据对代表性试验循环积分得到质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_emissions`
- 来源：`eu-reg-582-2011-consolidated-2021`

###### 排放至空气的氮氧化物（`nitrogen_oxides_to_air`）

按所声明法规或工厂试验约定，记录试验发动机尾气中的氮氧化物。

- 选定流：氮氧化物（排放至空气）
- 流属性/单位：Mass / kg
- 数量规则：由分析仪数据对代表性循环积分得到质量；声明是否以二氧化氮当量报告
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_emissions`
- 来源：`eu-reg-582-2011-consolidated-2021`

###### 颗粒物，粒径未特指（`particulate_matter_to_air`）

记录试验发动机尾气的颗粒物实测质量；无有记录的换算方法时，不得以颗粒数量替代质量。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：由滤膜或仪器数据对代表性试验循环积分得到颗粒物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_emissions`
- 来源：`eu-reg-582-2011-consolidated-2021`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 可分离的发动机型号、生产线或工序 | 首先在技术可行时细分计量表、批次、生产线、试验台、返工和废物记录。 | `jrc-2025-ef-method-key-aspects` |
| `allocation_physical` | 无法避免的共享负荷 | 无法细分时，采用设备时间、试验时长、计量能源、处理质量或发动机台数等具有因果关系的物理驱动量，并记录驱动量及计算。 | `jrc-2025-ef-method-key-aspects` |
| `allocation_recycling` | 金属废料和回收材料 | 在前景边界把废料记录为废物输出，并在本清单之外一致采用所选下游回收方法；不得从前景投入量中扣减所避免的原生生产。 | `jrc-2025-ef-method-key-aspects` |
| `allocation_test_sampling` | 抽样验收试验 | 按抽样方案代表的准确生产批次分配抽样试验燃料、电力和排放，并保留不合格发动机及复试负荷。 | `rouhento-2018-diesel-engine-lca` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_materials` | component_manufacturing | 金属原料 | 采购、库存、配方及废料记录 | 材料牌号；期初库存；入库；期末库存；废料；发动机型号；合格输出质量 | 将材料台账与生产订单核对，并称量代表性零部件 | kg | 每月或每批 | 至少 12 个代表性月份或完整生产周期 | 所有纳入的零部件区域 | 按牌号汇总净材料量并除以合格参考产品质量 | 发票；库存台账；衡器；材料清单；核对记录 |
| `cp_machining_consumables` | component_manufacturing | 切削液 | 领用及槽液库存记录 | 产品；浓度；期初库存；补充量；期末库存；回收量 | 核对采购补充量与槽液库存，排除内部循环 | kg | 每批或每月 | 与生产相同期间 | 纳入的机械加工系统 | 净补充量除以合格输出质量 | 采购记录；槽液日志；浓度检测 |
| `cp_energy_water` | component_manufacturing; assembly_and_finishing | 电力、热能和工艺用水 | 计量表及账单 | 表计编号；起止读数；单位；时间；区域；分配驱动量；生产质量 | 读取校准分表；使用账单时须记录分配 | MJ; kg | 每班、每批或每月 | 分子与产出采用同一代表期间 | 所有纳入生产及辅助区域 | 按过程汇总、换算单位、扣除有记录的非发动机负荷，并按输出质量归一化 | 表计校准；账单；分配工作表 |
| `cp_manufacturing_wastes` | component_manufacturing | 分类废料和废切削油 | 衡器及废物联单 | 废物身份；质量；日期；来源；去向；回收或处理路线 | 称量各项外运废物流并核对储存变化 | kg | 每次外运及每月 | 与生产相同期间 | 纳入的零部件区域 | 外运量加期末库存减期初库存，按输出质量归一化 | 地磅单；联单；废物库台账 |
| `cp_finishing_materials` | assembly_and_finishing | 洗涤剂、涂料和防锈油 | 领用、退料及配方记录 | 产品；领用质量；退料质量；浓度；固体分数；发动机系列 | 核对生产线领用与退料，用水另记 | kg | 每批或每月 | 与生产相同期间 | 纳入的清洗及涂装线 | 净领用产品除以合格输出质量 | 配方表；领用记录；采购记录 |
| `cp_fluid_filling` | assembly_and_finishing | 润滑油和冷却液 | 加注站计量及库存 | 流体身份；配方；浓度；加注；回收；补充；发动机序列号 | 计量跨越边界的新流体并排除闭路库存 | kg | 每台或每批 | 与生产相同期间 | 纳入的加注及试验回路 | 新流体净量除以合格输出质量 | 校准加注器；序列号记录；库存核对 |
| `cp_finishing_wastes` | assembly_and_finishing | 含油废水和废涂料 | 废水表、采样、衡器及联单 | 质量或体积；密度；含油浓度；涂料残渣质量；去向 | 计量排放、称量残渣并核对储槽库存 | kg | 每次排放或外运 | 与生产相同期间 | 纳入的清洗及表面处理区域 | 净边界输出除以合格输出质量 | 表计校准；实验室报告；联单；储槽台账 |
| `cp_acceptance_test` | factory_acceptance_test | 试验燃料和电力 | 试验台表计及日志 | 发动机序列号；型号；循环；时长；燃料读数；电力读数；代表批次 | 将校准表计与每次试验和抽样方案关联 | kg; MJ | 每次试验 | 与代表生产相同期间 | 所有纳入的试验台及辅助设施 | 汇总试验、纳入复试、分配至代表批次并按输出质量归一化 | 试验日志；表计校准；抽样方案 |
| `cp_reference_product` | factory_acceptance_test | 合格发动机输出 | 生产及称量记录 | 发动机序列号；干重或湿重状态；所含附件；实测质量；符合性状态 | 称量合格发动机并核对生产数量 | kg | 每种型号或代表批次 | 与清单相同期间 | 制造商厂门 | 汇总合格发动机质量；排除不合格输出但保留其负荷 | 校准衡器；材料清单；符合性记录 |
| `cp_test_emissions` | factory_acceptance_test | 尾气排放 | 分析仪及颗粒物测量文件 | 发动机序列号；循环；污染物；浓度或质量；尾气流量；检出限；校准；代表批次 | 对每个试验循环的校准测量积分并链接抽样方案 | kg | 每次测量试验 | 与代表生产相同期间 | 试验台尾气边界 | 汇总实测质量并纳入复试，分配至代表批次后按输出质量归一化 | 分析仪原始文件；滤膜记录；校准；试验报告 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有交换 | 归一化交换量 = 同一期间交换量 / 相同期间、相同质量状态的合格完整发动机质量 | 期间交换量；合格发动机质量 | 每 kg 参考产品的 kg、MJ 或 kg 排放 | `jrc-2025-ef-method-key-aspects` |
| `calc_electricity_conversion` | 电力 | electricity_MJ = metered_kWh × 3.6 | 计量 kWh | 电力 MJ | `jrc-2025-ef-method-key-aspects` |
| `calc_stock_reconciliation` | 材料、化学品、流体及储存废物 | 边界量 = 采购或产生量 + 期初库存 - 期末库存 - 有记录的可回收退料 | 发票；期初和期末库存；退料 | 净边界质量 | `jrc-2025-ef-method-key-aspects` |
| `calc_test_allocation` | 抽样验收试验 | 分配试验量 = 纳入的试验总量 / 有记录抽样方案所代表的合格发动机总质量 | 试验总量；代表批次；输出质量 | 每 kg 发动机的试验交换量 | `rouhento-2018-diesel-engine-lca` |
| `calc_exhaust_mass` | 气态及颗粒物尾气 | 对试验循环中的有效分析仪或滤膜质量积分；使用浓度与尾气流量时，保留时间对齐、干湿基修正和参考状态 | 校准测量序列；尾气流量；循环时长 | 代表生产批次的污染物质量 | `eu-reg-582-2011-consolidated-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_temporal_alignment` | 所有前景交换 | 分子与合格发动机输出须采用同一代表期间，并披露停机、爬坡及异常生产。 | 带日期记录及期间核对 |
| `dq_technology_geography` | 所有投入和过程 | 声明发动机系列、制造技术、场址地域、已知供应商地域及上游数据集代表性。 | 数据集元数据及供应商记录 |
| `dq_meter_traceability` | 计量能源、水、流体及排放 | 标识表计和分析仪、校准状态、分辨率、缺失数据处理及对纳入设备的分配。 | 校准证书及原始日志 |
| `dq_mass_balance` | 材料及废物 | 核对材料投入、产品并入、库存变化、废料、废物及有记录损失，并调查差异。 | 签署的质量平衡工作表 |
| `dq_cutoff_disclosure` | 所有交换 | 避免截断；每项未量化投入或输出均须记录身份、原因、预期偏差方向及改进计划。 | 数据缺口登记表 |
| `dq_verification` | 完整数据包 | 独立审查者须把抽样发布归一化交换追溯至原始记录和计算。 | 验证日志及抽样审计轨迹 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | 参考产品 | 产品须为用于非铁路车辆推进的新制完整 CPC 43123 压燃式活塞内燃机，并声明全部必需限定信息。 | `un-cpc-3-0-structure-2025` |
| `validation_reference_mass` | 参考流 | 归一化后输出 `reference_engine_output` 应等于 1 kg，并与所有分母采用相同的干重或湿重状态。 | `jrc-2025-ef-method-key-aspects` |
| `validation_inventory_atomicity` | 过程清单 | 每项交换仅表示一种原子材料、化学品、能源、废物或排放；合并公用工程、燃料、废物或排放组不符合要求。 | `jrc-2025-ef-method-key-aspects` |
| `validation_boundary_completeness` | 系统边界 | 所有生产者控制及外包制造阶段均须纳入，或连同上游链接和量化数据缺口明确披露。 | `jrc-2025-ef-method-key-aspects` |
| `validation_test_traceability` | 出厂验收试验 | 燃料、电力、排放测量、抽样方案、复试及所代表生产质量须按发动机序列号或批次核对。 | `eu-reg-582-2011-consolidated-2021` |
| `validation_allocation` | 共享负荷 | 须记录细分尝试、所选物理驱动量、分配计算及材料替代方案敏感性。 | `jrc-2025-ef-method-key-aspects` |
| `validation_no_unverified_ranges` | 所有交换 | 除非后续增加边界、功能单位和产品状态兼容且有至少两项独立原文来源的经审查范围，否则仍须进行场址特定采集。 | `jrc-2025-ef-method-key-aspects` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个所声明压燃式车辆发动机系列及制造配置的前景制造数据包 |
| downstream_use | 投影为天工 flow、process 和 lifecyclemodel 记录，并连接上游材料及能源数据集 |
| allowed_use | 在参考状态、发动机规格、地域、技术、时间和边界兼容时，用于制造商厂门比较及下游整车模型 |
| excluded_use | 不得直接表示固定式、铁路、航空、船用、点燃式、再制造、使用、维护或报废系统 |
| required_metadata | PCR 标识和版本；发动机系列和型号；排量；额定功率与转速；排放阶段和市场；干重或湿重状态；所含附件及后处理；场址地域；基准期；过程归属；上游数据集；试验抽样；分配 |
| required_quality_disclosure | 初级数据占比；表计和分析仪校准；时间覆盖；数据缺口；截断；质量平衡闭合；分配；上游代表性；不确定性及验证状态 |
| update_trigger | 发动机设计、质量状态、排放阶段、制造路线、场址、供应商组合、能源结构、试验方法、分配或数据源超出声明有效期发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，CPC 3.0 结构，2025-06-30，官方 CSV，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 43123 精确产品类别身份，以及排除铁路或有轨电车推进发动机 |
| `rouhento-2018-diesel-engine-lca` | literature | Rouhento，Manufacturing of a Non-road Diesel Engine from the Life Cycle Perspective，坦佩雷理工大学，2018，https://urn.fi/URN:NBN:fi:tty-201808142130 | 经原文核验的制造阶段划分，以及机械加工、装配、清洗、涂装、干燥、试验、流体、能源、水和废物交换识别 |
| `eu-reg-582-2011-consolidated-2021` | standard | 欧盟委员会，Regulation (EU) No 582/2011，2021-01-01 合并文本，https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:02011R0582-20210101 | 经原文核验的压燃式发动机出厂试验尾气测量语境及污染物覆盖 |
| `jrc-2025-ef-method-key-aspects` | official_guidance | 欧盟委员会联合研究中心，Key aspects of the product and organisation environmental footprint methods，JRC129907，https://publications.jrc.ec.europa.eu/repository/bitstream/JRC129907/JRC129907_01.pdf | 经原文核验的功能单位维度、数据质量与验证要求、避免截断及分配层级 |
