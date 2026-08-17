---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.other-terry-towelling-and-similar-woven-terry-fabrics-other-than-narrow-fabrics
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他毛巾毛圈织物和类似的毛圈织物（狭幅织物除外）

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 子类 26850 所列的非狭幅毛巾毛圈织物和类似机织毛圈织物。产品可按坯布、染色、漂白、机械整理、化学整理或其他明确规格的毛圈织物状态交付至生产厂门；其产品形态仍须为织物，而非制成品。

产品边界包括归入 CPC 26850 的非棉纤维或混纺毛圈织物。排除归入 CPC 26840 的棉质毛圈织物、狭幅织物、非毛圈的机织绒头或雪尼尔织物、针织绒类织物、簇绒织物以及毛巾等纺织制成品。必须声明纤维组成、毛圈结构、成品幅宽、单位面积质量、颜色或坯布状态、整理方式和调湿基准，因为这些信息会实质影响产品身份及生产路线。

前景门到门生产边界从织物厂接收外购地经纱、毛经纱和纬纱开始，包括纱线准备与毛圈织造；适用时的前处理、染色、水洗和漂洗；整理与干燥；检验及包装。纱线、化学品、水、电力、燃料、蒸汽和包装的上游生产通过上游数据集连接。使用、洗涤、加工为制成品、厂门外分销和寿命终止不属于本前景数据集。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.other-terry-towelling-and-similar-woven-terry-fabrics-other-than-narrow-fabrics |
| classification_refs | CPC 3.0:26850，其他毛巾毛圈织物和类似机织毛圈织物（狭幅织物除外） |
| covered_products | 归入 CPC 26850 的非狭幅毛巾毛圈织物和类似机织毛圈织物，包括坯布和湿法加工后的市场状态 |
| excluded_products | 归入 CPC 26840 的棉质毛圈织物；狭幅织物；非毛圈的机织绒头和雪尼尔织物；针织或簇绒绒类织物；毛巾等纺织制成品 |
| representative_product | 生产厂门处 1 kg 符合规格的可销售机织毛圈织物 |
| production_route | 外购纱线准备与毛圈织造，随后按适用路线进行前处理、染色、水洗、漂洗、整理、干燥、检验和包装 |
| market_state | 生产厂门处成卷或以其他方式包装的坯布或成品机织毛圈织物 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供符合规格、用于后续加工或使用的非狭幅机织毛圈织物 |
| How much | 1 kg 可销售织物 |
| How well | 符合声明的纤维组成、毛圈结构、成品幅宽、单位面积质量、颜色或坯布状态、整理方式、调湿基准和质量等级 |
| How long or cycle | 生产厂门处一个生产批次；不表示使用阶段寿命 |
| reference_flow_link | `final_terry_fabric_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量（reference_amount） | 1 kg |
| 参考产品流（reference_product_flow） | Other terry towelling and similar woven terry fabrics (other than narrow fabrics) `93944c2a-106d-4c2d-9785-58ec3fc17a42` |
| 参考流属性（reference_flow_property） | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组（reference_unit_group） | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位（reference_unit） | kg |
| 必需限定信息（required_qualifiers） | 纤维组成及混纺比例; 地经结构; 毛经结构; 纬纱结构; 成品幅宽; 单位面积质量; 颜色或坯布状态; 整理路线; 调湿基准; 质量等级; 生产地理; 报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及按质量归一化的交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考数量按可销售织物净质量报告，不计纸板芯、包装膜、托盘和不合格织物。 |
| `mass_condition` | 纱线、中间织物、成品织物和纺织废物 | Mass | kg | 记录称量条件和调湿基准；使用一致基准，或记录换算至成品织物基准的实测换算。 |
| `area_to_mass` | 仅有织物面积的记录 | Mass and area | kg and m2 | 使用批次特定的实测单位面积质量换算，并保留原始面积和测量证据。 |
| `water_units` | 工艺水和废水记录 | Volume | m3 | 保留计量体积；若使用质量，须记录密度和换算方法，不得默认等同。 |
| `energy_units` | 电力和热能记录 | Energy | kWh or MJ | 保留仪表或账单单位，并记录归一化到参考流时使用的每个换算因子。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_gate_to_gate` | 前景织物生产 | 从纱线到厂的起始条件到厂门可销售织物，纳入纱线准备、毛圈织造、路线适用的湿法加工、整理、干燥、检验、包装、场内废物处理和直接排放。 | `un-cpc-3-26850`; `eu-textiles-bat-2022`; `jrc-textiles-bref-2023` |
| `boundary_route_specificity` | 条件性生产步骤 | 仅在声明产品实际采用时纳入前处理、染色、水洗、漂洗、化学整理、直接加热和热定形；明确说明未采用的路线步骤。 | `eu-textiles-bat-2022`; `gutarowska-et-al-2020-terry` |
| `boundary_upstream_links` | 外购投入 | 每项外购纱线、工艺化学品、公用工程、燃料、蒸汽、水和包装投入均须连接兼容上游数据集；不得并入未报告残差。 | `eu-pef-2021` |
| `boundary_no_silent_cutoff` | 前景清单 | 识别所有已知前景投入、产品、共产品、废物和排放；任何排除均须说明理由并评估重要性。 | `eu-pef-2021`; `eu-textiles-bat-2022` |
| `boundary_outside_scope` | 下游生命周期 | 本前景数据集排除加工为制成品、厂门外分销、使用与洗涤及寿命终止；下游研究应另行补充。 | `eu-pef-2021` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 织物厂接收的外购地经纱、毛经纱和纬纱，并声明组成、质量条件、供应商和上游数据集引用 |
| starting_condition_role | 纱线到厂条件为前景采集起点；纤维生产、纺纱和供应商运输由连接的上游数据集表示 |
| product_classification_scope | 仅限 CPC 3.0 子类 26850，并受第 1 节纳入及排除规则约束 |
| recursive_input_rule | 若投入同一类别的机织毛圈织物，将其作为带独立上游数据集的产品投入记录一次，不在消费过程中递归重建其生产 |
| upstream_dataset_requirement | 为所有外购纱线、化学品、水、能源载体、蒸汽、包装和外部处理废物使用兼容上游数据集，并匹配声明的地理、技术和时期 |
| disclosure | 声明纤维与织物结构、起始纱线条件、采用的路线步骤、外包作业、湿法配方类别、能源供应、水源、废水去向、废物去向、分配、排除项和数据缺口 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `terry_weaving` | 纱线准备与毛圈织造 | required | 使用外购纱线生产织物时始终纳入 | 前景织物成形 | 离开过程的坯毛圈织物 kg |
| `pretreatment_dyeing` | 前处理、染色、水洗与漂洗 | conditional | 报告场址自行或委托进行退浆、煮练、漂白、染色、水洗或漂洗时纳入 | 前景湿法加工 | 离开过程的湿法加工毛圈织物 kg |
| `finishing_packing` | 整理、干燥、检验与包装 | required | 始终纳入；仅在实际使用时记录路线特定的化学品和热能交换 | 前景最终产品准备 | 厂门可销售参考产品 kg |

### 过程：纱线准备与毛圈织造（`terry_weaving`）

#### 输入

##### 产品流

###### 地经纱（`ground_warp_yarn_input`）

地经纱构成毛圈织物的承载地组织，并作为外购材料跨越织物厂边界。数量由批次领料记录结合库存变化和退回纱线核算。

- 选定流：Ground-warp yarn
- 流属性/单位：Mass / kg
- 数量规则：生产批次实际净领用的地经纱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 坯毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_input`
- 来源：`eu-textiles-bat-2022`; `jrc-textiles-bref-2023`; `gutarowska-et-al-2020-terry`

###### 毛经纱（`pile_warp_yarn_input`）

毛经纱形成毛圈，与地经纱为不同交换。数量取自毛经纱批次领用和退回记录。

- 选定流：Pile-warp yarn
- 流属性/单位：Mass / kg
- 数量规则：生产批次实际净领用的毛经纱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 坯毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_input`
- 来源：`eu-textiles-bat-2022`; `jrc-textiles-bref-2023`; `gutarowska-et-al-2020-terry`

###### 纬纱（`weft_yarn_input`）

纬纱与经纱系统交织形成机织毛圈结构。数量由扣除退回纱包后的批次领料记录获得。

- 选定流：Weft yarn
- 流属性/单位：Mass / kg
- 数量规则：生产批次实际净领用的纬纱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 坯毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_input`
- 来源：`eu-textiles-bat-2022`; `jrc-textiles-bref-2023`; `gutarowska-et-al-2020-terry`

###### 经纱上浆剂（`warp_sizing_agent_input`）

仅当前景过程内进行上浆时记录经纱上浆剂。须声明具体商业配方，数量取自配方投加或库存领用记录。

- 选定流：Warp sizing agent
- 流属性/单位：Mass / kg
- 数量规则：为声明产品批次实际投加的上浆剂配方质量；采购已上浆纱且场内不上浆时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 坯毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_recipe`
- 来源：`eu-textiles-bat-2022`; `jrc-textiles-bref-2023`

###### 织造过程电力（`weaving_electricity_input`）

电力驱动纱线准备、织机、通风和可直接归属的辅助设备。数量取自过程分表或可审计的总表分配。

- 选定流：Electricity supplied to the weaving process
- 流属性/单位：Energy / kWh
- 数量规则：报告期内归属于纱线准备和毛圈织造的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 坯毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`eu-textiles-bat-2022`; `eu-pef-2021`

##### 废物流

无输入废物流。

##### 基本流

无输入基本流。

#### 输出

##### 产品流

###### 坯毛圈织物（`greige_terry_fabric_output`）

坯毛圈织物是送往湿法加工或直接送往最终整理的机织中间产品。数量在织造后、下游处理前按声明调湿基准测量。

- 选定流：Greige terry fabric
- 流属性/单位：Mass / kg
- 数量规则：离开织造过程的符合要求坯毛圈织物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程输出质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_output`
- 来源：`un-cpc-3-26850`; `jrc-textiles-bref-2023`

##### 废物流

###### 织造纱线废物（`weaving_yarn_waste_output`）

纱线废物包括准备、断头处理和批次结束时产生的实测不可用纱线。数量取自分类称重记录。

- 选定流：Textile yarn waste
- 流属性/单位：Mass / kg
- 数量规则：离开织造过程的实测纺织纱线废物，并按去向分开记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 坯毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_output`
- 来源：`eu-textiles-bat-2022`; `eu-pef-2021`

##### 基本流

###### 织造纺织粉尘排放到空气（`weaving_textile_dust_output`）

纱线准备或织造产生的有组织或量化无组织纺织粉尘跨越环境边界时记录。数量来自排放监测，或由实测活动数据和有据因子进行场址特定计算。

- 选定流：Textile dust to air
- 流属性/单位：Mass / kg
- 数量规则：织造过程排放到空气的实测或场址特定计算纺织粉尘
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 坯毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emission`
- 来源：`eu-textiles-bat-2022`

### 过程：前处理、染色、水洗与漂洗（`pretreatment_dyeing`）

#### 输入

##### 产品流

###### 送入湿法加工的坯毛圈织物（`pretreatment_greige_fabric_input`）

当声明路线包含前处理、染色、水洗或漂洗时，坯毛圈织物进入湿法加工。数量取自湿法加工批次装载记录。

- 选定流：Greige terry fabric
- 流属性/单位：Mass / kg
- 数量规则：装入湿法加工的坯毛圈织物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 湿法加工毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_input`
- 来源：`eu-textiles-bat-2022`; `gutarowska-et-al-2020-terry`

###### 湿法加工工艺水（`wet_process_water_input`）

实际进行退浆、煮练、漂白、染色、水洗、漂洗和设备清洗时，工艺水进入相应作业。数量取自过程水表或可审计的批次体积记录。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：进入声明湿法作业的计量用水，扣除同一过程记录中的内部回用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿法加工毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`eu-textiles-bat-2022`; `eu-pef-2021`

###### 湿法加工氢氧化钠（`sodium_hydroxide_input`）

氢氧化钠出现在煮练、漂白、染色或中和配方中时作为独立交换记录。数量来自批次投加记录，并按产品质量记录浓度。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：批次实际投加的氢氧化钠产品质量，并保留产品浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 湿法加工毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_recipe`
- 来源：`eu-textiles-bat-2022`; `gutarowska-et-al-2020-terry`

###### 漂白用过氧化氢（`hydrogen_peroxide_input`）

采用过氧化物漂白时记录过氧化氢。数量来自批次投加记录，并保留供应配方浓度。

- 选定流：Hydrogen peroxide
- 流属性/单位：Mass / kg
- 数量规则：漂白批次实际投加的过氧化氢产品质量，并声明浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 湿法加工毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_recipe`
- 来源：`eu-textiles-bat-2022`; `gutarowska-et-al-2020-terry`

###### 活性染料配方（`reactive_dye_input`）

仅在路线采用活性染料时记录该配方。数据集须写明具体商业配方，使本卡表示一个配方而非未指明的染料集合。

- 选定流：Reactive dye formulation
- 流属性/单位：Mass / kg
- 数量规则：批次实际投加的商业活性染料配方质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 染色毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_recipe`
- 来源：`eu-textiles-bat-2022`; `gutarowska-et-al-2020-terry`

###### 分散染料配方（`disperse_dye_input`）

仅在适用的含聚酯纤维等路线采用分散染料时记录。前景记录须识别准确商业配方。

- 选定流：Disperse dye formulation
- 流属性/单位：Mass / kg
- 数量规则：批次实际投加的商业分散染料配方质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 染色毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_recipe`
- 来源：`eu-textiles-bat-2022`

###### 酸性染料配方（`acid_dye_input`）

仅在适用的羊毛或聚酰胺等路线采用酸性染料时记录。前景记录须识别准确商业配方。

- 选定流：Acid dye formulation
- 流属性/单位：Mass / kg
- 数量规则：批次实际投加的商业酸性染料配方质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 染色毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_recipe`
- 来源：`eu-textiles-bat-2022`

###### 染色用氯化钠（`sodium_chloride_input`）

声明染色配方使用氯化钠时单独记录。数量取自批次投加或称重领用记录。

- 选定流：Sodium chloride
- 流属性/单位：Mass / kg
- 数量规则：染色批次实际投加的氯化钠质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 染色毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_recipe`
- 来源：`eu-textiles-bat-2022`

###### 染色用碳酸钠（`sodium_carbonate_input`）

声明染色配方使用碳酸钠时单独记录。数量取自批次投加或称重领用记录。

- 选定流：Sodium carbonate
- 流属性/单位：Mass / kg
- 数量规则：染色批次实际投加的碳酸钠质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 染色毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_recipe`
- 来源：`eu-textiles-bat-2022`

###### 中和用乙酸（`acetic_acid_input`）

声明湿法加工配方使用乙酸进行中和或 pH 控制时记录。数量来自投加记录，并声明配方浓度。

- 选定流：Acetic acid
- 流属性/单位：Mass / kg
- 数量规则：批次实际投加的乙酸产品质量，并声明浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 湿法加工毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_recipe`
- 来源：`eu-textiles-bat-2022`; `gutarowska-et-al-2020-terry`

###### 湿法加工电力（`wet_process_electricity_input`）

电力驱动湿法设备、泵、控制系统和可直接归属的辅助设备。数量来自过程分表或可审计的场址总表分配。

- 选定流：Electricity supplied to wet processing
- 流属性/单位：Energy / kWh
- 数量规则：归属于前处理、染色、水洗和漂洗的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿法加工毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`eu-textiles-bat-2022`; `eu-pef-2021`

###### 湿法加工蒸汽（`wet_process_steam_input`）

蒸汽跨越湿法过程边界用于浴液加热等作业时记录。数量来自蒸汽表或基于实测产汽和输配的场址平衡。

- 选定流：Steam supplied to wet processing
- 流属性/单位：Energy / MJ
- 数量规则：供应给声明湿法作业的计量或平衡蒸汽能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿法加工毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_energy`
- 来源：`eu-textiles-bat-2022`; `eu-pef-2021`

##### 废物流

无输入废物流。

##### 基本流

无输入基本流。

#### 输出

##### 产品流

###### 染色或其他湿法加工后的毛圈织物（`dyed_terry_fabric_output`）

该中间产品为离开声明湿法路线并进入整理的合格毛圈织物。数量在最后一次水洗或漂洗后按声明调湿基准测量。

- 选定流：Dyed terry fabric
- 流属性/单位：Mass / kg
- 数量规则：离开过程的合格染色或其他湿法加工毛圈织物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程输出质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_output`
- 来源：`eu-textiles-bat-2022`; `gutarowska-et-al-2020-terry`

##### 废物流

###### 湿法加工废水（`wet_process_wastewater_output`）

前处理、染色、水洗或漂洗废水离开本过程进入场内处理、外部处理或排放时记录。数量及去向来自流量计和废水路由记录。

- 选定流：Textile wastewater
- 流属性/单位：Volume / m3
- 数量规则：离开声明湿法作业的实测废水体积；分流管理时按去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿法加工毛圈织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater`
- 来源：`eu-textiles-bat-2022`; `eu-pef-2021`

##### 基本流

不规定普遍适用的直接排放。场址投入产出清单和监测方案识别出路线相关直接排放时，应增加独立原子行。

### 过程：整理、干燥、检验与包装（`finishing_packing`）

#### 输入

##### 产品流

###### 进入最终整理的坯毛圈织物（`finishing_greige_fabric_input`）

未采用独立湿法加工过程时，坯毛圈织物进入最终整理。数量在织造转序时测量，同一输出批次不得同时采用染色织物投入。

- 选定流：Greige terry fabric
- 流属性/单位：Mass / kg
- 数量规则：声明批次进入最终整理的坯毛圈织物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_input`
- 来源：`un-cpc-3-26850`; `jrc-textiles-bref-2023`

###### 进入最终整理的染色毛圈织物（`finishing_dyed_fabric_input`）

采用湿法路线时，染色或其他湿法加工毛圈织物进入最终整理。数量在过程转序时测量，同一输出批次不得同时采用坯布投入。

- 选定流：Dyed terry fabric
- 流属性/单位：Mass / kg
- 数量规则：声明批次进入最终整理的染色或其他湿法加工毛圈织物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_input`
- 来源：`eu-textiles-bat-2022`; `gutarowska-et-al-2020-terry`

###### 整理工艺水（`finishing_process_water_input`）

湿整理、水洗或可归属设备清洗使用工艺水时记录。数量来自过程水表或可审计批次记录。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：归属于声明产品最终整理及相关清洗的计量用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`eu-textiles-bat-2022`

###### 柔软剂配方（`softening_agent_input`）

为获得声明手感而施加柔软剂时记录。须识别准确商业配方，数量取自整理配方。

- 选定流：Textile softening agent formulation
- 流属性/单位：Mass / kg
- 数量规则：批次实际投加的商业柔软剂配方质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_recipe`
- 来源：`eu-textiles-bat-2022`; `gutarowska-et-al-2020-terry`

###### 其他整理剂配方（`finishing_agent_input`）

仅在实际施加时将一种路线特定整理剂作为一个配方记录。须声明其商业身份和功能，不得在一张卡中合并多种整理剂。

- 选定流：Textile finishing agent formulation
- 流属性/单位：Mass / kg
- 数量规则：批次实际投加的一种具名商业整理配方质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_recipe`
- 来源：`eu-textiles-bat-2022`

###### 整理和包装电力（`finishing_electricity_input`）

电力驱动整理、干燥辅助设备、检验、卷装和包装设备。数量取自过程分表或可审计的场址总表分配。

- 选定流：Electricity supplied to finishing and packing
- 流属性/单位：Energy / kWh
- 数量规则：归属于整理、检验、卷装和包装的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`eu-textiles-bat-2022`; `eu-pef-2021`

###### 整理和干燥蒸汽（`finishing_steam_input`）

蒸汽用于整理、干燥或间接加热时记录。数量取自蒸汽表或有据场址蒸汽平衡。

- 选定流：Steam supplied to finishing and drying
- 流属性/单位：Energy / MJ
- 数量规则：归属于整理和干燥的计量或平衡蒸汽能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_energy`
- 来源：`eu-textiles-bat-2022`; `gutarowska-et-al-2020-terry`

###### 直接加热天然气（`finishing_natural_gas_input`）

在过程边界内燃烧天然气进行直接加热、干燥或热定形时记录。数量来自专用燃气表或可审计场址平衡。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：归属于直接加热、干燥或热定形的计量天然气能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel`
- 来源：`eu-textiles-bat-2022`; `eu-pef-2021`

###### 织物卷纸板芯（`paperboard_core_input`）

纸板芯随卷装织物离厂时记录。数量取自包装领用记录，并与包装卷数核对。

- 选定流：Paperboard tube core
- 流属性/单位：Mass / kg
- 数量规则：随声明产品发运的纸板芯实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`eu-pef-2021`

###### 织物防护聚乙烯膜（`polyethylene_film_input`）

聚乙烯膜作为织物防护包装随产品离厂时记录。数量取自包装领用记录或实测包装单元规格。

- 选定流：Polyethylene packaging film
- 流属性/单位：Mass / kg
- 数量规则：随声明产品发运的聚乙烯膜实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`eu-pef-2021`

##### 废物流

无输入废物流。

##### 基本流

无输入基本流。

#### 输出

##### 产品流

###### 可销售的其他毛巾毛圈织物和类似机织毛圈织物（`final_terry_fabric_output`）

这是整理、检验和包装后的符合规格参考产品，不含包装质量。数量来自校准的成品称重或经核验的卷重计算。

- 选定流：Other terry towelling and similar woven terry fabrics (other than narrow fabrics) `93944c2a-106d-4c2d-9785-58ec3fc17a42`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：厂门可销售织物实测净质量，不含包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_output`
- 来源：`un-cpc-3-26850`; `eu-pef-2021`

##### 废物流

###### 整理与检验纺织边角料（`finishing_textile_offcuts_output`）

无法计入可销售产品的纺织边角料和不合格织物离开过程时记录。数量取自分类称重及去向记录。

- 选定流：Textile fabric offcuts
- 流属性/单位：Mass / kg
- 数量规则：离开最终整理和检验的实测纺织边角料及不合格织物，并按去向分开记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_output`
- 来源：`eu-textiles-bat-2022`; `eu-pef-2021`

###### 整理废水（`finishing_wastewater_output`）

湿整理或清洗废水离开过程进入处理或排放时记录。数量及去向来自过程流量计和废水路由记录。

- 选定流：Textile wastewater
- 流属性/单位：Volume / m3
- 数量规则：离开整理及可归属清洗作业的实测废水体积，并按去向分开记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater`
- 来源：`eu-textiles-bat-2022`; `eu-pef-2021`

##### 基本流

###### 挥发性有机化合物排放到空气（`finishing_voc_air_output`）

投入产出清单将挥发性有机化合物识别为整理或热处理废气中的相关物质时记录。数量来自直接监测，或以实测配方、活动数据和有据因子进行场址特定计算。

- 选定流：Volatile organic compounds to air
- 流属性/单位：Mass / kg
- 数量规则：整理和热处理产生的实测或场址特定计算挥发性有机化合物排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emission`
- 来源：`eu-textiles-bat-2022`

###### 氨排放到空气（`finishing_ammonia_air_output`）

化学配方和监测方案将氨识别为整理或相关热处理的相关物质时单独记录。数量来自直接监测或有据场址特定计算。

- 选定流：Ammonia to air
- 流属性/单位：Mass / kg
- 数量规则：整理及相关热处理产生的实测或场址特定计算氨排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emission`
- 来源：`eu-textiles-bat-2022`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共享前景作业 | 尽可能通过分表计量或过程细分避免分配；当过程或批次可独立观察时，分别记录纱线准备、织造、湿法加工、整理和包装。 | `eu-pef-2021`; `eu-textiles-bat-2022` |
| `allocation_physical` | 无法避免的共享投入与输出 | 无法细分时，使用反映共享投入消耗或输出产生因果关系的有据物理关系，并按情况采用产品特定质量、机器时间、浴液装载量或计量活动。 | `eu-pef-2021` |
| `allocation_economic_last_resort` | 缺乏合理物理关系的多产品作业 | 仅在无法建立合理物理关系时使用经济分配；记录价格、时期、币种、计算、敏感性和受影响交换。 | `eu-pef-2021` |
| `allocation_waste_and_recycling` | 纺织废物、回收材料和处理输出 | 分别报告各废物去向和回收材料。除非下游研究记录适用回收方法并防止重复计算，否则本前景数据集内不使用避免负担抵扣。 | `eu-pef-2021`; `eu-textiles-bat-2022` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_input` | `terry_weaving` | 每项具名纱线投入 | 批次领用、退回和库存记录 | row_id; material identity; supplier; lot; issued mass; returned mass; moisture basis; batch_id | 将称重领用和退回记录与库存移动核对 | kg | 每生产批次 | 完整报告期 | 所有范围内织造线 | 按 row_id 和批次汇总净领用量，再按合格过程输出归一化 | 秤具校准；签字批次单；库存核对 |
| `cp_chemical_recipe` | `terry_weaving`; `pretreatment_dyeing`; `finishing_packing` | 每个 row_id 一种具名化学配方 | 配方、投加和库存记录 | row_id; commercial product identity; concentration; lot; dose; returned quantity; batch_id | 使用自动投加总量或经核验的单一配方称重加入量 | kg | 每批次或每次配液 | 完整报告期 | 所有范围内上浆、湿法和整理设备 | 按 row_id 汇总净配方质量；不得合并配方 | 投加校准；配方批准；安全数据表；库存核对 |
| `cp_electricity` | `terry_weaving`; `pretreatment_dyeing`; `finishing_packing` | 过程电力 | 分表和运行记录 | meter_id; opening; closing; process_id; batch_id; downtime; shared-load basis | 读取校准过程表；共享时记录分配驱动 | kWh | 连续或每批次，按月核对 | 完整报告期 | 所有范围内设备及可归属辅助设备 | 仪表净消耗扣除有据外送，仅按第 7 节分配 | 仪表校准；公用事业账单核对；分配记录 |
| `cp_thermal_energy` | `pretreatment_dyeing`; `finishing_packing` | 过程蒸汽 | 蒸汽表或锅炉平衡 | meter_id; steam mass or energy; pressure; condensate return; process_id; batch_id | 读取过程蒸汽表或使用有据实测场址平衡 | kg steam or MJ | 连续或每批次，按月核对 | 完整报告期 | 所有范围内湿法和整理设备 | 按记录的实测条件换算并按过程输出归一化 | 仪表校准；锅炉日志；平衡闭合 |
| `cp_fuel` | `finishing_packing` | 直接加热天然气 | 燃料表和燃烧器运行记录 | meter_id; opening; closing; calorific basis; equipment_id; batch_id | 读取专用燃料表或可审计场址平衡 | m3 or MJ | 连续或每批次，按月核对 | 完整报告期 | 范围内直燃干燥和热定形设备 | 使用账单或实测热值换算 | 仪表校准；燃料账单；燃烧器日志 |
| `cp_water` | `pretreatment_dyeing`; `finishing_packing` | 工艺水 | 水表和批次浴液记录 | meter_id; opening; closing; process step; batch_id; reused volume | 读取过程水表或经核验的机器注水量，并识别回用水 | m3 | 每批次或每日，按月核对 | 完整报告期 | 所有范围内湿法和整理作业 | 按过程汇总新鲜补水，并单独记录内部回用 | 仪表校准；水平衡；批次记录 |
| `cp_product_input` | `pretreatment_dyeing`; `finishing_packing` | 中间织物投入 | 批次转序和称重记录 | row_id; product identity; batch_id; mass; moisture basis; source_process | 称量转序织物或使用经核验卷重 | kg | 每批次转序 | 完整报告期 | 所有范围内过程间转序 | 按 row_id 和接收过程汇总，不重复计算内部转序 | 秤具校准；转序单；批次谱系 |
| `cp_product_output` | `terry_weaving`; `pretreatment_dyeing`; `finishing_packing` | 合格过程输出 | 生产和质量放行记录 | row_id; batch_id; roll_id; gross mass; packaging mass; net mass; moisture basis; grade; disposition | 称量净织物，或用卷长乘以实测单位面积质量核验 | kg | 每卷及每批次 | 完整报告期 | 所有范围内输出和检验工位 | 汇总合格净质量；排除包装和不合格织物 | 秤具校准；检验放行；卷装核对 |
| `cp_packaging` | `finishing_packing` | 每项包装组件 | 包装领用和包装单元记录 | row_id; material identity; unit mass; quantity issued; returns; roll_id | 称量组件，或使用核验组件规格和包装数量 | kg | 每包装批次 | 完整报告期 | 所有范围内包装参考产品 | 按 row_id 汇总随产品发运的净包装质量 | 规格；秤具校准；领退核对 |
| `cp_waste_output` | `terry_weaving`; `finishing_packing` | 每项具名固体废物 | 分类废物称重和去向记录 | row_id; waste identity; container tare; gross mass; destination; manifest_id; batch_id | 扣除容器皮重后称量各分类废物流 | kg | 每次收集 | 完整报告期 | 所有范围内生产和检验区域 | 按 row_id 和去向汇总净质量 | 秤具校准；废物联单；承包商回执 |
| `cp_wastewater` | `pretreatment_dyeing`; `finishing_packing` | 离开过程的废水 | 流量计、路由和监测记录 | row_id; meter_id; volume; origin process; destination; sampling_id; batch_id | 计量排水并保留分流管理的废水身份 | m3 | 连续或每次排放 | 完整报告期 | 所有范围内湿法和整理排口 | 按 row_id、来源和去向汇总；披露前不得合并路线 | 仪表校准；水平衡；处理或排放记录 |
| `cp_air_emission` | `terry_weaving`; `finishing_packing` | 每个 row_id 一项具名直接空气排放 | 烟道或无组织排放监测记录 | row_id; emission point; measured concentration; gas flow; duration; method; batch_id | 优先直接测量；否则使用场址特定活动数据和有据因子计算 | kg | 按适用监测频次并在重大过程变更时 | 代表完整报告期 | 所有相关范围内排放点 | 按 row_id 计算质量排放，汇总前保留排放点证据 | 实验室报告；方法和校准记录；活动因子追溯 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalisation` | 每项前景交换 | 采集交换量除以相同一致报告范围内的可销售参考产品净质量；保留未归一化值和单位。 | 采集交换量；参考产品净质量 | 每 kg 参考产品的交换 | `eu-pef-2021` |
| `calc_intermediate_normalisation` | 过程特定交换 | 采集交换量除以该过程合格输出质量，再将过程连接到最终参考流。 | 交换量；合格过程输出质量 | 每 kg 过程输出的交换 | `eu-pef-2021` |
| `calc_area_to_mass` | 仅有面积的织物记录 | 实测织物面积乘以批次特定实测单位面积质量，并在记录测量基准后换算为 kg。 | 织物面积；实测单位面积质量 | 织物质量 | `eu-pef-2021` |
| `calc_water_balance` | 湿法加工和整理 | 对同一过程和时期的进水、内部回用、废水输出、织物滞留水、蒸发和有据损失进行核对；调查无法解释的不平衡。 | 计量水和废水；回用；过程记录 | 经审计过程水平衡 | `eu-textiles-bat-2022` |
| `calc_mass_reconciliation` | 纱线到织物及最终整理 | 核对投入织物和材料质量与合格输出、废物、过程滞留材料及有据调湿基准变化；不得用核对结果臆造缺失交换。 | 材料投入；产品输出；废物；调湿记录 | 经审计过程质量核对 | `eu-textiles-bat-2022`; `eu-pef-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品及限定信息 | 证明 CPC 26850 范围，并声明纤维组成、毛圈结构、幅宽、单位面积质量、市场状态、整理方式和质量等级。 | 产品规格；分类决定；质量放行 |
| `dq_measurement` | 所有前景记录 | 使用校准测量或可审计业务记录；识别估算或分配记录并保留计算。 | 校准证书；仪表；账单；批次记录；计算追踪 |
| `dq_completeness` | 前景清单 | 覆盖场址投入产出清单识别的所有已知过程投入、产品、废物和直接排放；记录每项排除。 | 投入产出清单；过程流程图；完整性核对 |
| `dq_temporal` | 报告期 | 使用代表正常生产的连续时期，并披露停机、非典型生产、配方变化和缺失区间。 | 生产日历；仪表覆盖；异常日志 |
| `dq_technological` | 路线和设备 | 记录须匹配声明的毛圈织造、湿法加工、整理、干燥和包装技术。 | 设备清单；路线单；批次谱系 |
| `dq_geographical` | 场址和上游连接 | 声明生产地理，并在可用时使电力、水、燃料、运输及其他上游数据集匹配相关地理。 | 场址元数据；供应商和公用事业记录；上游数据集元数据 |
| `dq_uuid` | Tiangong 身份 | 仅在 row UUID 与 payload UUID 一致，且直接确认公开行的类型、分类、流属性和单位后使用 UUID。未解决原子行保持无 UUID。 | 直读证据和 manifest 中未解决 row_id 清单 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_product_identity` | 数据集身份 | 产品不是 CPC 26850 非狭幅机织毛圈织物，或未声明纤维组成、毛圈结构、市场状态和整理方式时失败。 | `un-cpc-3-26850` |
| `validation_reference_flow` | 定量参考 | 参考产品未连接 `93944c2a-106d-4c2d-9785-58ec3fc17a42`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg，或参考质量包含包装时失败。 | `eu-pef-2021` |
| `validation_route` | 过程完整性 | 缺少毛圈织造或最终整理、检验与包装时失败；声明湿法或热处理路线却缺少对应过程清单和记录时失败。 | `eu-textiles-bat-2022`; `jrc-textiles-bref-2023` |
| `validation_atomic_rows` | 清单交换 | 一张流卡合并多种材料、公用工程、燃料、废物、包装组件或排放，或用选择指令替代未解决 UUID 时失败。 | `eu-textiles-bat-2022` |
| `validation_foreground_evidence` | 数量 | 前景数量缺少关联采集协议、报告期、测量或业务记录、单位及归一化基准时失败。 | `eu-pef-2021`; `eu-textiles-bat-2022` |
| `validation_mass_and_water` | 核对 | 未进行纱线到织物质量核对、最终织物质量核对或路线适用的水平衡，或将无法解释的不平衡静默赋给残差流时失败。 | `eu-textiles-bat-2022` |
| `validation_waste_and_emissions` | 环境输出 | 已识别的废水、纺织废物、粉尘、VOC、氨或其他相关直接排放被遗漏，或与不同去向或环境介质合并时失败。 | `eu-textiles-bat-2022`; `eu-pef-2021` |
| `validation_allocation` | 共享作业 | 未先考虑细分即分配共享负担，或未披露分配驱动及受影响交换时失败。 | `eu-pef-2021` |
| `validation_uuid_resolution` | Tiangong 引用 | 任何带 UUID 的行缺少 row 与 payload UUID 一致性，或缺少对类型、分类、属性和单位的直接确认时失败；未解决 row_id 必须保持无 UUID。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查后可发布为 secondary_dataset 或 background_dataset 的门到门织物生产前景数据集 |
| downstream_use | 可连接至纺织制成品生产、产品生命周期模型、采购足迹或需要 CPC 26850 织物投入的其他研究 |
| allowed_use | 当产品身份、纤维与毛圈结构、市场状态、路线、地理、时期、分配和数据质量与下游系统兼容时使用 |
| excluded_use | 不得作为棉质毛圈织物、狭幅织物、毛巾制成品或完整从摇篮到坟墓数据集使用；未经兼容的完整生命周期方法和审查，不得支持比较声明 |
| required_metadata | 规范 PCR id；CPC 引用；Tiangong 流 UUID；纤维组成；毛圈结构；成品幅宽；单位面积质量；市场状态；整理方式；调湿基准；路线；场址地理；报告期；技术；分配；上游数据集版本；废物去向 |
| required_quality_disclosure | 仪表和记录覆盖；校准；缺失数据；分配份额；质量和水平衡；直接排放监测；路线排除；未解决 UUID；时间、技术和地理代表性 |
| update_trigger | 纱线组成、毛圈结构、织机技术、湿法配方、整理化学品、能源或供水、废水或空气排放处理、分配、产品分类、参考流身份或报告代表性发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-26850` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 26850, explanatory notes and structure, https://unstats.un.org/unsd/classifications/econ | 产品范围、层级及相邻类别排除 |
| `eu-pef-2021` | official_guidance | European Commission, Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, Annex I and PEFCR template, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 功能单位、参考流、系统边界、企业特定数据、分配、数据质量和包装记录 |
| `eu-textiles-bat-2022` | official_guidance | European Commission, Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, https://eur-lex.europa.eu/eli/dec_impl/2022/2508/oj | 过程分解、投入产出清单、监测、水、能源、化学品、废水、废物和空气排放 |
| `jrc-textiles-bref-2023` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf | 纺织织物生产、前处理、染色、整理及环境控制语境 |
| `gutarowska-et-al-2020-terry` | literature | Gutarowska et al., Cotton Terry Textiles with Photo- and Bio-Activity in a Model Study and Real Conditions, Materials 13(15), 3334, 2020, https://doi.org/10.3390/ma13153334 | 毛圈结构及包含前处理、染色、水洗、柔软和干燥的工业毛圈织物顺序；不用于限制纤维范围或数量 |
