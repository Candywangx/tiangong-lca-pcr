---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-pile-fabrics-and-chenille-fabrics-other-than-terry-towelling-and-narrow-fabrics-of-cotton
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 棉制机织绒头织物和绳绒织物（毛巾织物和狭幅织物除外）

## 1. 范围与适用性

本 PCR 适用于作为成品织物供应的棉制机织绒头织物或棉制绳绒织物的前景制造。范围包括制造场址内的纱线准备、织物成形、路线适用的湿法加工、机械整理、检验和包装。数据包始于采购棉纱及其他采购投入到达场址大门，止于可发运的净成品织物。

毛巾织物及类似机织毛圈织物、狭幅织物、簇绒织物、以人造纤维为定义纤维的织物和制成纺织品不在本 PCR 范围内。棉花种植、轧花、纺纱、采购公用工程的生产、采购化学品制造、场外运输、服装或制品制造、使用和生命周期末端应以独立上下游数据集表示，不得在本前景清单内重复构建。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-pile-fabrics-and-chenille-fabrics-other-than-terry-towelling-and-narrow-fabrics-of-cotton |
| classification_refs | CPC 3.0: 26810, exact |
| covered_products | 棉制机织绒头织物和棉制绳绒织物，不包括毛巾织物和狭幅织物 |
| excluded_products | 毛巾织物及类似机织毛圈织物；狭幅织物；簇绒织物；人造纤维制绒头或绳绒织物；制成纺织品 |
| representative_product | 工厂大门处的棉制机织绒头织物成品或棉制绳绒织物成品生产混合 |
| production_route | 采购棉制地纱加路线特定的棉制绒头纱或棉制绳绒纱；纱线准备和织造；可选湿法预处理/染色；机械整理、检验和包装 |
| market_state | 工厂大门处已制造的成品织物，按净干织物质量报告，包装单独报告 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合声明销售规格的棉制机织绒头织物成品或棉制绳绒织物成品 |
| How much | 1 kg 净成品织物，不含包装 |
| How well | 声明棉纤维身份、绒头或绳绒路线、组织结构、幅宽、单位面积质量、颜色/整理状态、含湿基准和质量等级 |
| How long or cycle | 声明报告期内所代表的一个制造批次或生产周期 |
| reference_flow_link | `reference_fabric_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净成品织物 |
| 参考产品流 | 机织棉绒头织物及棉绳绒织物（毛巾织物和狭幅毛圈织物除外） `4dba0da8-c16f-4b12-8563-bc1ff5fee1c2` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 绒头或绳绒组织；棉纤维组成及混纺允差；坯布、漂白、染色、印花或其他整理状态；织物幅宽；单位面积质量；含湿基准；质量等级；生产地域；报告期；包装排除 |

构建前景数据包时，每项必需限定信息均须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失任何限定信息将使该数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有交换归一化至声明含湿基准下 1 kg 合格净成品织物；参考质量不包括纸板卷芯、包裹薄膜和其他包装。 |
| `mass_basis_disclosure` | 纱线、织物中间体、化学品和废物 | Mass | kg | 记录实测质量，并声明数值是收货态、干基、溶液质量还是活性物质量；没有记录浓度时不得转换含浓度化学产品。 |
| `water_conversion` | 工艺水和废水 | Volume，实测时亦可为 Mass | m3 和 kg | 保留实测体积；若使用质量，须记录转换采用的密度和温度假设。 |
| `energy_conversion` | 电力和采购蒸汽 | Energy | kWh 或 MJ | 保留仪表或发票原始单位，并记录转换至统一能量单位所用的换算因子；不得把电力和蒸汽合并为一个交换。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采购棉制地纱及路线特定的棉制绒头纱或棉制绳绒纱到达制造场址，并声明供应商身份、纤维组成、纱线规格、含湿基准和进料质量 |
| starting_condition_role | purchased_material_at_site_gate |
| product_classification_scope | 仅 CPC 3.0 子类 26810；分类是范围参考，不能替代语义产品身份 |
| recursive_input_rule | 若投入已是本 PCR 范围内的成品织物，则将其一次性记录为带上游数据集的采购产品投入，不得在接收过程中重复构建其制造清单 |
| upstream_dataset_requirement | 棉纱、化学品、电力、蒸汽、供水、包装材料和场外废物或废水处理分别链接上游数据集 |
| disclosure | 声明纳入的工序、绒头或绳绒路线、湿法加工状态、外包步骤、截断决定、内部回收/回用流，以及场内与场外处理边界 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_site_gate` | 前景数据包 | 纳入发运前发生的所有场内纱线准备、织造、路线适用湿法加工、整理、检验、包装、内部搬运以及直接相关的废水或废物作业；采购投入和场外服务用链接数据集表示。 | `jrc-textiles-bref-2023`; `iso-14044-2006` |
| `boundary_route_disclosure` | 过程覆盖 | 只有湿法加工确实不存在或被外包时，才能将其标为条件过程；须声明外包步骤的供应商数据集，并防止供应商清单与前景清单重复计数。 | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `boundary_input_output_inventory` | 场址清单 | 维持过程级纺织材料、工艺化学品、水、能源、废水、废物和相关排放投入产出清单；可行时直接测量，否则保留发票或计算证据。 | `eu-textiles-bat-2022` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `yarn_preparation_and_weaving` | 纱线准备和织造 | `required` | 从采购纱线开展前景制造时始终要求 | 坯态绒头或绳绒织物的前景成形 | kg 路线特定坯布输出 |
| `wet_processing` | 湿法预处理和染色 | `conditional` | 当交付产品在场内经过退浆、煮练、漂白、染色、水洗或相关湿法处理时纳入 | 前景湿法加工 | kg 路线特定湿法加工织物输出 |
| `finishing_inspection_and_packing` | 机械整理、检验和包装 | `required` | 始终要求；使用适用的坯态或湿法加工中间体投入，且只记录场内实施的工序 | 前景成品准备 | kg 合格净成品织物输出 |

### 过程：纱线准备和织造（`yarn_preparation_and_weaving`）

#### 输入

##### 产品流

###### 供应织机的棉制地纱（`ground_cotton_yarn_input`）

棉制地纱形成织物的结构经纱和/或纬纱，并作为采购材料跨越场址边界。

- 选定流：Cotton ground yarn
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量减去退回的未使用纱线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 路线特定坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_issue_records`
- 来源：`jrc-textiles-bref-2023`

###### 机织绒头路线使用的棉制绒头纱（`pile_cotton_yarn_input`）

棉制绒头纱形成凸起绒头，只在采用机织绒头组织路线的批次中记录。

- 选定流：Cotton pile yarn
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量减去退回的未使用纱线；声明机织绒头路线时不得为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 棉制机织绒头坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_issue_records`
- 来源：`jrc-textiles-bref-2023`

###### 绳绒路线使用的棉制绳绒纱（`chenille_cotton_yarn_input`）

棉制绳绒纱形成绳绒表面，只在采用绳绒织物路线的批次中记录。

- 选定流：Cotton chenille yarn
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量减去退回的未使用纱线；声明绳绒路线时不得为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 棉制绳绒坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_issue_records`
- 来源：`jrc-textiles-bref-2023`

###### 供应纱线准备的玉米淀粉（`corn_starch_size_input`）

场内使用玉米淀粉配制浆液时，将其作为一个化学品投入记录；任何其他上浆化学品须作为独立交换记录，不得合并于此。

- 选定流：Corn starch
- 流属性/单位：Mass / kg
- 数量规则：实测发往批次的配方质量，并声明干固体浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 路线特定坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_dosing_records`
- 来源：`jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

###### 供应上浆的工艺水（`weaving_process_water_input`）

在场内配制或稀释浆浴时，记录加入的工艺水。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：进入上浆工序的计量或批槽体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 路线特定坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_meter_records`
- 来源：`eu-textiles-bat-2022`

###### 供应准备和织造的电力（`weaving_electricity_input`）

电力驱动本过程边界内的整经、上浆辅助设备、织机、抽风和内部物料搬运。

- 选定流：Electricity, medium voltage, at manufacturing site
- 流属性/单位：Energy / kWh
- 数量规则：分表计量；若使用共享仪表，则按有记录的机器运行时间和额定负荷分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 路线特定坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meter_records`
- 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 棉制机织绒头坯布中间体（`greige_pile_fabric_output`）

棉制机织绒头坯布是绒头路线在任何场内湿法处理或最终整理前的实测过程输出。

- 选定流：Greige woven cotton pile fabric
- 流属性/单位：Mass / kg
- 数量规则：实测离开织造的合格加可回收中间体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程输出质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_output_records`
- 来源：`jrc-textiles-bref-2023`

###### 棉制绳绒坯布中间体（`greige_chenille_fabric_output`）

棉制绳绒坯布是绳绒路线在任何场内湿法处理或最终整理前的实测过程输出。

- 选定流：Greige cotton chenille fabric
- 流属性/单位：Mass / kg
- 数量规则：实测离开织造的合格加可回收中间体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程输出质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_output_records`
- 来源：`jrc-textiles-bref-2023`

##### 废物流

###### 准备和织造产生的棉纱废料（`cotton_yarn_waste_output`）

棉纱废料包括本过程产生并送往声明回收或处理路线的断头、开机和不可用纱线实测质量。

- 选定流：Cotton yarn waste
- 流属性/单位：Mass / kg
- 数量规则：离开过程的称量废物，扣除返回同一批次的材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 路线特定坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass_records`
- 来源：`eu-textiles-bat-2022`

###### 纱线准备产生的上浆废水（`sizing_wastewater_output`）

浆浴配制、生产线清洗或上浆设备清洗产生排水时，将上浆废水作为单独水性废物流记录。

- 选定流：Sizing wastewater
- 流属性/单位：Volume / m3
- 数量规则：分配至上浆工序的实测排放体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 路线特定坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-textiles-bat-2022`

##### 基本流

### 过程：湿法预处理和染色（`wet_processing`）

#### 输入

##### 产品流

###### 进入湿法加工的棉制机织绒头坯布（`wet_greige_pile_input`）

只有绒头路线批次在场内处理时，棉制机织绒头坯布才进入湿法加工。

- 选定流：Greige woven cotton pile fabric
- 流属性/单位：Mass / kg
- 数量规则：声明含湿基准下的实测批次投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 湿法加工棉制机织绒头织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_input_records`
- 来源：`jrc-textiles-bref-2023`

###### 进入湿法加工的棉制绳绒坯布（`wet_greige_chenille_input`）

只有绳绒路线批次在场内处理时，棉制绳绒坯布才进入湿法加工。

- 选定流：Greige cotton chenille fabric
- 流属性/单位：Mass / kg
- 数量规则：声明含湿基准下的实测批次投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 湿法加工棉制绳绒织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_input_records`
- 来源：`jrc-textiles-bref-2023`

###### 供应湿法处理的工艺水（`wet_process_water_input`）

记录批次路线内退浆、煮练、漂白、配制染浴、水洗和漂洗使用的工艺水。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：进入湿法加工设备的计量补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 路线特定湿法加工织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_meter_records`
- 来源：`jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

###### 供应湿法处理的氢氧化钠（`sodium_hydroxide_input`）

当氢氧化钠用于煮练、丝光、pH 调节或其他声明棉处理配方步骤时记录。

- 选定流：氢氧化钠
- 流属性/单位：Mass / kg
- 数量规则：实测加入的采购溶液质量，并保留浓度和活性物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 路线特定湿法加工织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_dosing_records`
- 来源：`jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

###### 供应漂白的过氧化氢（`hydrogen_peroxide_input`）

声明湿法加工配方包含过氧化物漂白时记录过氧化氢。

- 选定流：过氧化氢
- 流属性/单位：Mass / kg
- 数量规则：实测加入的采购溶液质量，并保留浓度和活性物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 路线特定湿法加工织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_dosing_records`
- 来源：`jrc-textiles-bref-2023`

###### 供应染色的活性蓝 19 染料（`reactive_blue_19_input`）

只有批次实际领用活性蓝 19 时，才将其作为一个染料交换记录；实际配方中的其他每种染料须分别表示为自身的原子交换。

- 选定流：Reactive Blue 19 dyestuff
- 流属性/单位：Mass / kg
- 数量规则：声明颜色配方中实测加入的配制品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 路线特定染色织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_dosing_records`
- 来源：`jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

###### 供应染色的氯化钠（`sodium_chloride_input`）

声明棉染色配方将氯化钠作为单独采购化学品使用时记录。

- 选定流：氯化钠
- 流属性/单位：Mass / kg
- 数量规则：实测加入的干物质或溶液质量，并声明质量基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 路线特定染色织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_dosing_records`
- 来源：`jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

###### 供应湿法处理的采购蒸汽（`wet_steam_input`）

采购蒸汽跨越场址边界用于湿法加工中的浴液加热、水洗或干燥时，作为一个公用工程交换记录。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：分配至湿法加工的实测或发票蒸汽能量，并声明压力和冷凝水处理
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 路线特定湿法加工织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meter_records`
- 来源：`eu-textiles-bat-2022`

###### 供应湿法处理的电力（`wet_electricity_input`）

电力驱动声明路线内的泵、投料、控制、水洗、脱水和其他湿法加工设备。

- 选定流：Electricity, medium voltage, at manufacturing site
- 流属性/单位：Energy / kWh
- 数量规则：分表计量耗电量或从共享仪表按有记录的方法分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 路线特定湿法加工织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meter_records`
- 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 湿法加工棉制机织绒头织物中间体（`wet_pile_fabric_output`）

湿法加工棉制机织绒头织物是绒头路线完成声明预处理、染色、水洗和脱水步骤后的实测输出。

- 选定流：Wet-processed woven cotton pile fabric
- 流属性/单位：Mass / kg
- 数量规则：记录含湿基准的实测输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程输出质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_output_records`
- 来源：`jrc-textiles-bref-2023`

###### 湿法加工棉制绳绒织物中间体（`wet_chenille_fabric_output`）

湿法加工棉制绳绒织物是绳绒路线完成声明预处理、染色、水洗和脱水步骤后的实测输出。

- 选定流：Wet-processed cotton chenille fabric
- 流属性/单位：Mass / kg
- 数量规则：记录含湿基准的实测输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程输出质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_output_records`
- 来源：`jrc-textiles-bref-2023`

##### 废物流

###### 湿法处理产生的纺织工艺废水（`textile_wastewater_output`）

纺织工艺废水是声明湿法加工步骤产生的合并水性排放，已扣除内部回用水和单独收集的浴液。

- 选定流：Textile process wastewater
- 流属性/单位：Volume / m3
- 数量规则：分配至批次或报告期的实测排放体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 路线特定湿法加工织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-textiles-bat-2022`

###### 单独收集的废活性染浴（`spent_dye_bath_output`）

只有浓缩染浴与合并废水分流并送往回用、预处理或场外管理时，才记录废活性染浴。

- 选定流：Spent reactive dye bath
- 流属性/单位：Volume / m3
- 数量规则：实测分流浴液体积；该体积不得同时计入合并纺织工艺废水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 路线特定染色织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-textiles-bat-2022`

##### 基本流

### 过程：机械整理、检验和包装（`finishing_inspection_and_packing`）

#### 输入

##### 产品流

###### 进入直接整理的棉制机织绒头坯布（`finish_greige_pile_input`）

只有销售规格不要求场内湿法加工时，棉制机织绒头坯布才进入本过程。

- 选定流：Greige woven cotton pile fabric
- 流属性/单位：Mass / kg
- 数量规则：声明含湿基准下的实测中间体投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格净成品织物输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_input_records`
- 来源：`jrc-textiles-bref-2023`

###### 进入直接整理的棉制绳绒坯布（`finish_greige_chenille_input`）

只有销售规格不要求场内湿法加工时，棉制绳绒坯布才进入本过程。

- 选定流：Greige cotton chenille fabric
- 流属性/单位：Mass / kg
- 数量规则：声明含湿基准下的实测中间体投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格净成品织物输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_input_records`
- 来源：`jrc-textiles-bref-2023`

###### 进入整理的湿法加工棉制机织绒头织物（`finish_wet_pile_input`）

只有绒头路线批次在场内完成湿法加工时，湿法加工棉制机织绒头织物才进入本过程。

- 选定流：Wet-processed woven cotton pile fabric
- 流属性/单位：Mass / kg
- 数量规则：声明含湿基准下的实测中间体投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格净成品织物输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_input_records`
- 来源：`jrc-textiles-bref-2023`

###### 进入整理的湿法加工棉制绳绒织物（`finish_wet_chenille_input`）

只有绳绒路线批次在场内完成湿法加工时，湿法加工棉制绳绒织物才进入本过程。

- 选定流：Wet-processed cotton chenille fabric
- 流属性/单位：Mass / kg
- 数量规则：声明含湿基准下的实测中间体投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格净成品织物输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_input_records`
- 来源：`jrc-textiles-bref-2023`

###### 供应整理和包装的电力（`finishing_electricity_input`）

电力驱动声明产品路线所用的起绒、剪毛、刷毛、检验、卷装、抽风和包装设备。

- 选定流：Electricity, medium voltage, at manufacturing site
- 流属性/单位：Energy / kWh
- 数量规则：分表计量耗电量或从共享仪表按有记录的方法分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格净成品织物输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meter_records`
- 来源：`jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

###### 供应整理的采购蒸汽（`finishing_steam_input`）

采购蒸汽跨越场址边界用于干燥、调湿或其他声明整理操作时记录。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：分配至整理的实测或发票蒸汽能量，并声明压力和冷凝水处理
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格净成品织物输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meter_records`
- 来源：`jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

###### 供应包装的纸板卷芯（`paperboard_core_input`）

纸板卷芯作为一个包装组件记录，并从净织物参考质量中排除。

- 选定流：Paperboard winding core
- 流属性/单位：Mass / kg
- 数量规则：纳入发运布卷的实测质量或采购与库存核对质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格净成品织物输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_issue_records`
- 来源：`eu-textiles-bat-2022`

###### 供应包装的聚乙烯包裹薄膜（`polyethylene_film_input`）

聚乙烯包裹薄膜与纸板卷芯分开记录，并从净织物参考质量中排除。

- 选定流：Polyethylene wrapping film
- 流属性/单位：Mass / kg
- 数量规则：纳入发运布卷的实测质量或采购与库存核对质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格净成品织物输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_issue_records`
- 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格成品织物参考产品（`reference_fabric_output`）

合格净成品织物是完成声明机械整理、检验和包装步骤后的参考输出，其数量不包括包装质量。

- 选定流：机织棉绒头织物及棉绳绒织物（毛巾织物和狭幅毛圈织物除外） `4dba0da8-c16f-4b12-8563-bc1ff5fee1c2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测合格净织物质量，归一化为恰好 1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格净成品织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reference_output_records`
- 来源：`unsd-cpc-v3-2025`

##### 废物流

###### 不合格棉制机织绒头成品织物（`rejected_pile_fabric_output`）

绒头路线中经检验不能作为参考产品销售并送往声明回收或处理路线的材料记录为不合格棉制机织绒头成品织物。

- 选定流：Rejected woven cotton pile fabric
- 流属性/单位：Mass / kg
- 数量规则：离开过程的称量不合格织物，扣除返回生产的返工材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格净成品织物输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass_records`
- 来源：`eu-textiles-bat-2022`

###### 不合格棉制绳绒成品织物（`rejected_chenille_fabric_output`）

绳绒路线中经检验不能作为参考产品销售并送往声明回收或处理路线的材料记录为不合格棉制绳绒成品织物。

- 选定流：Rejected cotton chenille fabric
- 流属性/单位：Mass / kg
- 数量规则：离开过程的称量不合格织物，扣除返回生产的返工材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格净成品织物输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass_records`
- 来源：`eu-textiles-bat-2022`

###### 机械整理产生的棉绒废料（`cotton_lint_waste_output`）

起绒、剪毛、刷毛或抽风捕集的棉绒作为单独固体废物记录，并送往其声明去向。

- 选定流：Cotton lint waste
- 流属性/单位：Mass / kg
- 数量规则：离开过程的捕集棉绒称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格净成品织物输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass_records`
- 来源：`jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_subdivision` | 多产品场址作业 | 首先采用过程细分、路线特定批次记录和专用仪表或领料记录，避免在绒头织物、绳绒织物及其他纺织产品间分配。 | `iso-14044-2006`; `eu-textiles-bat-2022` |
| `allocation_shared_utilities` | 共享电力、蒸汽、水和处理系统 | 无法细分时，使用反映因果关系且有记录的物理驱动因子分配每项共享交换，例如计量机器时间、蒸汽需求、浴液体积或处理废水体积；若能合理建立物理关系，不得采用收入分配。 | `iso-14044-2006`; `eu-textiles-bat-2022` |
| `allocation_reuse_and_recovery` | 内部回用纱线、水、浴液或回收材料 | 内部循环只记录一次，并仅报告补充投入和离开前景边界的材料；披露输出回收材料的任何负荷转移或抵扣并保持一致。 | `iso-14044-2006`; `eu-textiles-bat-2022` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_issue_records` | `yarn_preparation_and_weaving` | 各棉纱投入分别记录 | 批次领退料记录 | material_id; supplier; fibre_composition; yarn_specification; issued_mass; returned_mass; moisture_basis; batch_id | 校准秤及库存领退料记录 | kg | 每批次 | 完整报告期 | 所有前景织机和准备生产线 | 按 row_id 和批次汇总领用质量减退回质量 | 秤校准；签字领料记录；库存核对 |
| `cp_chemical_dosing_records` | `yarn_preparation_and_weaving`; `wet_processing` | 各配制品或化学品分别记录 | 配方和投料日志 | chemical_id; supplier; formulation_or_grade; concentration; batch_id; gross_dose; active_mass_if_available; returned_mass | 校准投料系统或称量领料记录 | kg | 每个配方批次 | 完整报告期 | 所有场内上浆和湿法加工生产线 | 按 row_id 汇总净投料量；保留毛质量和活性物质量基准 | 投料校准；配方审批；采购核对 |
| `cp_water_meter_records` | `yarn_preparation_and_weaving`; `wet_processing` | 工艺水交换 | 仪表和批次日志 | meter_id; opening_reading; closing_reading; batch_id; reused_volume; source | 校准仪表或经核验的槽体积测量 | m3 | 每批次或每日仪表间隔 | 完整报告期 | 所有纳入的工艺水点位 | 将计量补充水体积分配至批次；声明共享仪表分配 | 仪表校准；水平衡；异常日志 |
| `cp_energy_meter_records` | all | 各电力或采购蒸汽交换分别记录 | 分表、发票和运行日志 | utility_type; meter_id; opening_reading; closing_reading; native_unit; pressure_or_voltage; batch_id; machine_hours | 优先使用校准分表；否则将发票与有记录的物理分配核对 | kWh 或 MJ | 每批次，或按月计量并分配至批次 | 完整报告期 | 所有纳入设备和采购公用工程 | 按计量规则转换原始单位并按 row_id 汇总 | 仪表校准；发票核对；分配工作表 |
| `cp_intermediate_input_records` | `wet_processing`; `finishing_inspection_and_packing` | 各路线特定中间体投入 | 批次转移记录 | row_id; batch_id; route; finish_state; gross_mass; moisture_basis | 过程转移点校准秤 | kg | 每次批次转移 | 完整报告期 | 所有纳入路线转移 | 按 row_id 和接收过程汇总 | 秤校准；链接上游批次 id |
| `cp_intermediate_output_records` | `yarn_preparation_and_weaving`; `wet_processing` | 各路线特定中间体输出 | 批次完工记录 | row_id; batch_id; route; finish_state; accepted_mass; recoverable_mass; moisture_basis | 过程完工点校准秤 | kg | 每批次 | 完整报告期 | 所有纳入路线输出 | 按 row_id 汇总合格加可回收质量 | 秤校准；批次放行记录；质量平衡复核 |
| `cp_wastewater_records` | `yarn_preparation_and_weaving`; `wet_processing` | 各废水或分流废浴交换分别记录 | 流量计和处理转移记录 | row_id; batch_id; volume; pH; temperature; conductivity; destination; reused_volume | 校准流量计或经核验的槽体积测量 | m3 | 连续/每日并按每次分流转移 | 完整报告期 | 所有纳入排放和分流浴液点位 | 按 row_id 汇总净排放体积；防止分流浴液与合并废水重叠 | 仪表校准；废水平衡；适用时保留实验室记录 |
| `cp_waste_mass_records` | `yarn_preparation_and_weaving`; `finishing_inspection_and_packing` | 各固体废物交换分别记录 | 称重票和去向记录 | row_id; batch_or_period; gross_mass; tare; net_mass; destination; rework_return | 校准秤或承包商称重票 | kg | 每次移出 | 完整报告期 | 所有纳入废物收集点 | 按 row_id 和去向汇总净质量；排除返回生产的返工料 | 秤校准；转移联单；承包商收据 |
| `cp_packaging_issue_records` | `finishing_inspection_and_packing` | 各包装组件分别记录 | 采购、库存和布卷包装记录 | row_id; packaging_specification; opening_stock; receipts; closing_stock; roll_count; issued_mass | 直接称量或库存核对 | kg | 每个包装批次及报告期核对 | 完整报告期 | 范围内所有成品布卷 | 按 row_id 汇总净领用质量并与发运布卷核对 | 采购记录；库存盘点；代表性组件称量 |
| `cp_reference_output_records` | `finishing_inspection_and_packing` | 合格成品织物参考输出 | 质量放行和发运质量记录 | batch_id; route; product_specification; gross_roll_mass; core_mass; wrapping_mass; net_fabric_mass; moisture_basis; accepted_status | 校准布卷秤、包装扣除及质量放行 | kg | 每卷成品或每批次 | 完整报告期 | 场址发运的所有合格产品 | 汇总合格净织物质量并按 `calc_reference_normalization` 归一化交换 | 秤校准；包装记录；质量证明；发运核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单交换 | normalized_exchange = recorded_exchange / accepted_net_finished_fabric_mass；分母不包括包装和不合格织物 | 行级前景记录；合格净成品织物质量 | 每 1 kg 参考产品的交换量 | `iso-14044-2006` |
| `calc_net_fabric_mass` | 参考输出 | net_fabric_mass = gross_roll_mass - paperboard_core_mass - wrapping_film_mass - other_separately_recorded_packaging_mass | 布卷毛质量；包装组件质量 | 合格净成品织物质量 | `iso-14044-2006` |
| `calc_active_chemical_disclosure` | 含浓度化学品投入 | active_mass = gross_solution_mass × recorded_mass_fraction；除非链接流身份明确表示活性物，否则保留溶液毛质量作为清单交换 | 毛投料质量；浓度 | 活性物质量披露和采购产品毛质量交换 | `eu-textiles-bat-2022` |
| `calc_shared_utility_allocation` | 共享公用工程仪表 | assigned_exchange = metered_period_total × documented_physical_driver_for_batch / sum_of_driver_for_all_products_in_period | 仪表总量；批次机器时间、蒸汽需求或浴液体积 | 分配至各 row_id 和批次的公用工程量 | `iso-14044-2006`; `eu-textiles-bat-2022` |
| `calc_process_mass_balance` | 各过程和路线 | 核对实测产品投入与产品输出、单独记录废物、库存变化、保留水分变化及有记录损失；调查差异，不得强制闭合 | 投入、输出、废物、库存和水分记录 | 质量平衡差异及复核标记 | `eu-textiles-bat-2022` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和中间体 | 保留绒头或绳绒路线、棉组成、组织结构、幅宽、单位面积质量、整理状态、含湿基准、等级和批次链接。 | 产品规格；质量放行；批次流转单 |
| `dq_temporal_coverage` | 所有前景记录 | 覆盖有代表性的连续报告期，并披露停机、换产、异常运行、缺失区间和外包步骤。 | 报告日历；运行日志；异常登记 |
| `dq_measurement` | 质量、水、电力、蒸汽和投料记录 | 可行时使用校准仪器；记录原始单位、校准状态、估算方法和共享仪表分配。 | 校准证书；仪表日志；发票核对；分配工作表 |
| `dq_completeness` | 过程清单 | 在过程级核对纱线、化学品、水、能源、中间产品、参考产品、废水和各固体废物交换；解释遗漏和质量平衡差异。 | 投入产出清单；质量平衡；遗漏登记 |
| `dq_wastewater_characterization` | 湿法加工废水 | 保留排放路线及实际配方和许可相关参数，包括流量及适用的 pH、温度、电导率、污染物和处理信息。 | 流量记录；实验室报告；处理转移记录；许可适用性复核 |
| `dq_source_lineage` | 计算值和分配值 | 保留原始记录、公式版本、源 row_ids、分配驱动因子、操作人和计算时间，使每个归一化数值均可复现。 | 计算工作簿或机器可读转换日志 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 确认参考输出使用准确的公开 CPC 26810 产品流 UUID、Mass 属性 UUID、kg 单位及全部必需产品限定信息；拒绝含包装的参考质量。 | `unsd-cpc-v3-2025` |
| `validate_route_exclusivity` | 路线特定行 | 每个批次须恰好声明一种组织路线（机织绒头或绳绒）和一种整理投入状态（坯布直接整理或湿法加工后整理）；除非分别建模批次输出，否则拒绝同时出现替代性中间体投入。 | `jrc-textiles-bref-2023` |
| `validate_atomic_exchanges` | 过程清单 | 每张卡必须表示一个产品流、废物流或基本流交换；拒绝合并公用工程、合并化学品、合并包装、合并废物或选择指令。 | `eu-textiles-bat-2022` |
| `validate_wet_processing` | 条件湿法加工过程 | 若场内实施湿法加工，须按适用情况记录工艺水、每项实际化学品配制品、电力、热源、输出织物、废水和单独收集浴液；若外包或不存在，须声明并链接供应商数据。 | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `validate_mass_balance` | 各过程和报告期 | 要求有记录的质量平衡复核并调查无法解释的差异；不得臆造平衡流或覆盖实测前景记录。 | `eu-textiles-bat-2022` |
| `validate_allocation_and_completeness` | 共享作业 | 确认已优先尝试细分、每个剩余分配均使用披露的物理驱动因子，且采集交换总量与场址仪表、采购、生产、排放和废物记录核对一致。 | `iso-14044-2006`; `eu-textiles-bat-2022` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 工厂大门处棉制机织绒头织物成品或棉制绳绒织物成品的前景制造数据集 |
| downstream_use | `secondary_dataset`；当代表性和链接上游数据集经审查后可作为 `background_dataset` |
| allowed_use | 地域、技术、整理状态、含湿基准和报告期与数据集元数据相容的产品特定或路线特定 LCI 研究 |
| excluded_use | 毛巾织物、狭幅织物、簇绒织物、人造纤维制绒头或绳绒织物、制成品，或未增加上下游阶段的摇篮到坟墓声明 |
| required_metadata | PCR id；数据集版本；场址地域；报告期；绒头或绳绒路线；棉组成；组织结构；幅宽；单位面积质量；整理状态；含湿基准；质量等级；纳入和外包过程；分配驱动因子；上游数据集引用 |
| required_quality_disclosure | 前景份额；原始数据期；仪表和秤覆盖；化学品配方覆盖；质量平衡差异；缺失数据；估算和分配方法；废水路线；废物去向；UUID 缺口；来源版本 |
| update_trigger | 纱线组成、组织路线、织机或整理技术、湿法加工配方、场址公用工程供应、废水处理、分配方法、产品规格发生实质变化，或数据超过声明代表性期限 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-v3-2025` | `official_guidance` | 联合国统计司，CPC Version 3.0 Explanatory Notes，代码 26810，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（访问于 2026-08-12） | 准确产品类别范围和排除项 |
| `jrc-textiles-bref-2023` | `official_guidance` | 欧盟委员会联合研究中心，Best Available Techniques Reference Document for the Textiles Industry，2023-01，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry（访问于 2026-08-12） | 纺织工艺分解、湿法预处理、染色、整理和直接相关作业 |
| `eu-textiles-bat-2022` | `official_guidance` | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry，OJ L 325，2022-12-20，https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32022D2508（访问于 2026-08-12） | 过程级投入产出清单、监测、水、能源、化学品、废水、废物和处理披露 |
| `iso-14044-2006` | `standard` | ISO 14044:2006，Environmental management — Life cycle assessment — Requirements and guidelines，2022 年确认，https://www.iso.org/standard/38498.html（访问于 2026-08-12） | LCI 边界、归一化、分配层级、数据质量和报告原则 |
