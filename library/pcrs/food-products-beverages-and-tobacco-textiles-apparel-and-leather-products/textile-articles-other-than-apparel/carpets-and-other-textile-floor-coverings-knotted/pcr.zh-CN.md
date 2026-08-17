---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.carpets-and-other-textile-floor-coverings-knotted
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 打结地毯及其他铺地织物

## 1. 范围与适用性

本 PCR 适用于绒头由绒纱逐个围绕经纱打结，并以纬纱投梭固定连续结行的成品地毯及纺织铺地物。范围包括采用对称结、非对称结、Jufti 结和西班牙结等结构，以已声明的羊毛、丝、棉、其他纺织纱线或已声明混纺材料制成的手工打结产品。

代表性路线为羊毛绒头、棉经纱和棉纬纱地毯：从采购纱线开始，经手工打结、洗涤、剪绒、锁边、干燥、拉伸、精剪、检验和场内包装制成。机织、簇绒、植绒、针刺、编织、钩织或非纺织铺地物不在范围内。上游纤维、纱线、染色、电力、供水、洗涤剂和包装材料生产在非报告场址控制时作为上游产品系统连接。安装、使用阶段清洁和寿命终止不属于本前景生产边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.carpets-and-other-textile-floor-coverings-knotted |
| classification_refs | CPC 3.0:27210 — 打结地毯及其他铺地织物 |
| covered_products | 绒纱逐个围绕经纱打结并以纬纱投梭固定的成品纺织铺地物；采用羊毛、丝、棉、其他纺织纱线或已声明混纺材料的手工打结毯和地毯 |
| excluded_products | 非打结机织地毯；簇绒或植绒地毯；针刺、编织、钩织或非纺织铺地物；单独销售的安装系统和衬垫 |
| representative_product | 羊毛绒头、棉经纬纱手工打结地毯，已经洗涤、剪绒、拉伸、精剪、检验和包装 |
| production_route | 采购纱线接收；纱线开松和织机准备；手工打结与穿纬；洗涤；剪绒和锁边；干燥与拉伸；精剪与检验；包装 |
| market_state | 制造厂门口的干燥、质量验收合格、已包装成品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供装饰和地面保护功能的打结纺织铺地物成品 |
| How much | 1 kg 验收合格地毯的净干质量；不含运输托盘和可重复使用运输设备，但包括随产品供应的不可重复使用销售包装 |
| How well | 符合已声明的纤维组成、结型、结密度、尺寸、绒高、颜色/图案、整理路线、水分状态和质量验收标准 |
| How long or cycle | 生产至制造厂门口；使用寿命另行声明，本质量型生产参考不预设使用寿命 |
| reference_flow_link | 输出行 `knotted_carpet_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Carpets and other textile floor coverings, knotted `a718c51e-66e1-40e5-bd73-00cb16f1b722` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 各纤维质量组成；绒纱材料及染色状态；经纱和纬纱材料；结型；结密度；尺寸；绒高；整理与洗涤路线；干质量/水分基准；包装纳入情况；生产地域和期间 |

构建前景数据包时，必须在数据集元数据、产品描述、参考流备注或等效字段中记录全部必需限定信息。缺少任何限定信息即视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 验收合格的打结地毯成品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 调湿后用校准秤测定地毯净干质量，或记录测量时的水分状态；排除可重复使用运输设备，并将全部交换归一化到 1 kg 合格产品。 |
| `yarn_mass` | 绒纱、经纱、纬纱和锁边纱投入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按每种纱线身份和用途记录领用质量减去退回的未使用纱线；不得合并不同纤维组成或染色状态。 |
| `water_mass` | 供应的工艺用水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用校准流量计数据，或按已声明温度下的密度将实测体积换算为质量；不得用废水体积代替供应水量。 |
| `electricity_energy` | 采购交流电 | Net calorific value | kWh | 记录纳入工艺路线的计量电量；共用电表只允许按有记录的因果驱动因素分配。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_integrated_route` | 前景制造 | 纳入由报告场址控制的纱线接收与领用、纱线开松、织机准备、手工打结与穿纬、洗涤、剪绒、锁边、适用时的烧毛、干燥、拉伸、精剪、检验以及不可重复使用销售包装。 | `cepc-carpet-production-process` |
| `boundary_purchased_inputs` | 采购产品投入 | 将采购纱线、电力、水、洗涤剂和包装保持为可见产品投入，并把每个已接受身份连接到上游数据集；不得将其吸收到无记录的集合项。 | `iso-14044-2006` |
| `boundary_inhouse_wet_processing` | 场内洗毛或染色 | 当洗毛或染色由报告场址控制时，将其增加为独立前景过程，并把实际使用的每种染料、辅助化学品、水、能源、废物流和直接排放各自记录为一个原子交换；应用纺织业 BAT 监测规则。 | `eu-textiles-bat-2022`; `cepc-carpet-production-process` |
| `boundary_direct_releases` | 场址控制的排放 | 分别记录每种实测或计算的向空气、水体或土壤直接排放以及每种外运废物流；不得以合并排放行替代实际污染物身份。 | `eu-textiles-bat-2022`; `iso-14044-2006` |
| `boundary_exclusions` | 默认生产研究 | 默认排除资本设备、员工通勤、产品安装、使用阶段清洁、使用寿命和寿命终止；仅在已声明目标与范围明确纳入时例外，并披露每项排除。 | `iso-14040-2006`; `iso-14044-2006` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采购纱线和其他产品投入到达打结地毯制造场址 |
| starting_condition_role | foreground_starting_condition |
| product_classification_scope | 仅限 CPC 3.0 次级 27210 |
| recursive_input_rule | 同一类别内采购的打结地毯或打结地毯半成品保持为单独量化并附上游数据集的产品投入；不得在同一前景过程中递归展开。 |
| upstream_dataset_requirement | 每种采购材料、能源载体、供水、处理服务和不可重复使用包装投入都需要身份匹配的上游数据集，或披露尚未解决的数据缺口。 |
| disclosure | 声明纱线是采购已染色还是场内染色、纤维组成、结型和结密度、纳入的整理步骤、洗涤化学品、干燥能源路线、废水去向、废物处理路线和包装纳入情况。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `integrated_knotted_carpet_manufacturing` | 打结地毯一体化制造与整理 | `required` | 每个符合要求的数据集均须纳入；当场内控制洗毛或染色时，增加单独过程。 | 将已声明的绒纱、经纱和纬纱转化为打结地毯成品。 | 1 kg 验收合格打结地毯成品 |

### 过程：打结地毯一体化制造与整理（`integrated_knotted_carpet_manufacturing`）

#### 输入

##### 产品流

###### 羊毛绒纱（`wool_pile_yarn_input`）

发放至织机并用于打结绒头的羊毛纱以一个产品投入跨越过程边界。数据集必须声明纤维含量、染色状态、纱支/股数、供应商、批次和质量。

- 选定流：Yarn of wool, containing 85% or more by weight of wool, not put up for retail sale `10c7de33-bef0-4310-98e7-734d8e2e4c9f`
- 流属性/单位：Mass / kg
- 数量规则：领用质量减去已识别并退回库存的未使用纱线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格打结地毯成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_material_records`
- 来源：`cepc-carpet-production-process`

###### 棉经纱（`cotton_warp_yarn_input`）

纵向张紧在织机上的棉纱形成结构经纱，因此单独记录。数据集必须声明棉含量、纱支/股数、上浆状态、供应商、批次和质量。

- 选定流：Cotton yarn (other than sewing thread), containing 85% or more by weight of cotton `526fe0a1-be6d-4384-b609-4ca604628ec4`
- 流属性/单位：Mass / kg
- 数量规则：经纱领用质量减去已识别并退回库存的未使用经纱
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格打结地毯成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_material_records`
- 来源：`cepc-carpet-production-process`

###### 棉纬纱（`cotton_weft_yarn_input`）

插入结行之间的棉纱作为结构纬纱单独记录，即使其与经纱共用同一 Tiangong 流身份。数量取自批次领退料记录。

- 选定流：Cotton yarn (other than sewing thread), containing 85% or more by weight of cotton `526fe0a1-be6d-4384-b609-4ca604628ec4`
- 流属性/单位：Mass / kg
- 数量规则：纬纱领用质量减去已识别并退回库存的未使用纬纱
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格打结地毯成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_material_records`
- 来源：`cepc-carpet-production-process`

###### 棉锁边纱（`cotton_binding_yarn_input`）

用于包缚和加强地毯侧边的棉纱是区别于经纱、纬纱的独立实物领用。只记录批次锁边实际消耗量。

- 选定流：Cotton yarn (other than sewing thread), containing 85% or more by weight of cotton `526fe0a1-be6d-4384-b609-4ca604628ec4`
- 流属性/单位：Mass / kg
- 数量规则：锁边纱领用质量减去已识别并退回库存的未使用纱线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格打结地毯成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_material_records`
- 来源：`cepc-carpet-production-process`

###### 地毯洗涤工艺用水（`process_water_input`）

用于地毯初洗和终洗的供应水在制造边界处记录。共用场址供水只允许依据校准分表数据或有记录的因果分配进行分摊。

- 选定流：Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：归属于地毯洗涤的实测供应工艺水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格打结地毯成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_wastewater_records`
- 来源：`eu-textiles-bat-2022`; `cepc-carpet-production-process`

###### 非离子型地毯洗涤剂（`carpet_washing_detergent_input`）

用于清洗地毯的实际供应非离子型洗涤剂配方为一个产品交换。必须保留供应商产品名和配方标识；在该精确配方完成映射前 UUID 保持未解决。

- 选定流：Nonionic carpet-washing detergent, as supplied formulation
- 流属性/单位：Mass / kg
- 数量规则：称量或依据票据记录的地毯洗涤批次洗涤剂领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格打结地毯成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_washing_chemical_records`
- 来源：`eu-textiles-bat-2022`

###### 低压交流电（`low_voltage_electricity_input`）

织机辅助设备、洗涤、剪绒、归属于生产的照明、机械干燥、拉伸、精剪和包装所用采购低压交流电为一个能源交换。必须声明供电电压和计量边界；在确认电压语义前不接受 UUID。

- 选定流：Alternating current, low voltage, facility supply
- 流属性/单位：Net calorific value / kWh
- 数量规则：纳入过程的计量电量；共用电表采用有记录的因果分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格打结地毯成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-textiles-bat-2022`

###### 低密度聚乙烯拉伸膜（`ldpe_packaging_film_input`）

随包装地毯留在厂门口产品中的不可重复使用低密度聚乙烯拉伸膜，以一个包装材料交换记录。必须声明牌号、再生料含量、厚度和净纳入质量；不接受通用塑料薄膜 UUID。

- 选定流：Low-density polyethylene stretch film, non-reusable sales packaging
- 流属性/单位：Mass / kg
- 数量规则：纳入验收合格已包装产品的薄膜净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格打结地毯成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`cepc-carpet-production-process`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 打结地毯成品（`knotted_carpet_output`）

验收合格成品是经过洗涤、干燥、拉伸、精剪、检验和包装后的定量参考输出。记录总质量和排除的包装质量，使净干地毯基准可审计。

- 选定流：Carpets and other textile floor coverings, knotted `a718c51e-66e1-40e5-bd73-00cb16f1b722`
- 流属性/单位：Mass / kg
- 数量规则：实测验收合格地毯净干质量；将数据包归一化到 1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 验收合格打结地毯成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_acceptance_records`
- 来源：`un-cpc-3-0`; `cepc-carpet-production-process`

##### 废物流

###### 羊毛绒纱修剪料（`wool_pile_trimmings_output`）

打结、剪绒、适用时的浮雕剪切以及精剪期间切除的羊毛绒纱，以一个废物交换记录。与棉结构纱下脚料分开，并披露处理去向。

- 选定流：Wool pile-yarn trimmings from knotted-carpet manufacture
- 流属性/单位：Mass / kg
- 数量规则：按批次和去向称量收集的羊毛绒纱修剪料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格打结地毯成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_waste_records`
- 来源：`cepc-carpet-production-process`

###### 棉经纬纱下脚料（`cotton_yarn_offcuts_output`）

地毯下机和整理过程中收集的棉经纱、纬纱、穗边和锁边纱下脚料，以一个棉纱废物交换记录。不得与羊毛绒纱修剪料合并。

- 选定流：Cotton warp and weft yarn offcuts from knotted-carpet manufacture
- 流属性/单位：Mass / kg
- 数量规则：按批次和去向称量收集的棉纱下脚料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格打结地毯成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_waste_records`
- 来源：`cepc-carpet-production-process`

###### 地毯洗涤废水（`carpet_washing_wastewater_output`）

离开地毯初洗或终洗并送往场内或场外处理的废水，以一个路线特定废物交换记录。记录其去向、质量或基于计量体积的换算，以及与实际洗涤化学品相关的监测参数。

- 选定流：Carpet-washing wastewater sent to declared treatment route
- 流属性/单位：Mass / kg
- 数量规则：实测废水质量，或依据计量排水体积和有记录密度换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格打结地毯成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_wastewater_records`
- 来源：`eu-textiles-bat-2022`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_subdivide` | 可分别计量的产品、批次和工艺步骤 | 在采用分配因子前，通过单独计量、批次记录和过程细分避免分配。 | `iso-14044-2006` |
| `allocation_shared_utilities` | 共用电力、水和场址服务 | 采用有记录的因果驱动因素，如机器工时、计量运行时间或实测水处理量；当生产质量不代表因果关系时不得采用质量分配。 | `iso-14044-2006`; `eu-textiles-bat-2022` |
| `allocation_recovered_material` | 纱线修剪料或其他回收材料 | 根据实际法律和运行状态，将回收材料保持为明确废物或共产品输出；不得在前景清单内部计入避免生产抵扣。 | `iso-14044-2006` |
| `allocation_unavoidable` | 不可分割的多产品作业 | 若过程细分和因果分配不可行，采用已披露的物理关系；仅在不存在可辩护物理关系时使用经济分配，并报告敏感性检查。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_yarn_material_records` | `integrated_knotted_carpet_manufacturing` | 绒纱、经纱、纬纱和锁边纱投入 | 库存领退料与批次物料清单 | product_id; supplier; lot; fibre_content; dyed_state; yarn_count_ply; role; issued_mass; returned_mass; batch_id | 校准秤加受控库存领退料记录 | kg | 每次领用和退回 | 报告期内全部符合要求批次 | 每个制造场址 | 按身份和用途汇总领用减退回质量，再除以合格输出质量 | 秤校准；签字库存记录；供应商规格；批次核对 |
| `cp_water_wastewater_records` | `integrated_knotted_carpet_manufacturing` | 工艺用水投入和地毯洗涤废水输出 | 流量计和排放记录 | meter_id; timestamp; batch_id; supplied_water; wastewater_volume_or_mass; temperature; density_method; destination; pH; COD_or_TOC; TSS; relevant_chemistry_parameters | 校准供排水流量计及适用监测计划规定的代表性取样 | kg; m3; 各参数特定单位 | 每批或连续流量计总量；参数按适用频率 | 报告期内全部洗涤作业 | 每个制造场址和洗涤线 | 核对流量计期初期末读数，仅依据有记录因果证据分配 | 流量计校准；实验室方法；样品监管链；排放日志 |
| `cp_washing_chemical_records` | `integrated_knotted_carpet_manufacturing` | 非离子型地毯洗涤剂 | 配方领用记录 | supplier_product; formulation_id; lot; active_content; issued_mass; returned_mass; batch_id | 校准秤或受控加料系统加供应商规格 | kg | 每批 | 报告期内全部洗涤批次 | 每个洗涤位置 | 按精确配方汇总净领用质量，再除以合格输出质量 | 秤/加料器校准；供应商 SDS 或规格；领退料记录 |
| `cp_energy_records` | `integrated_knotted_carpet_manufacturing` | 低压交流电 | 电表和运行记录 | meter_id; voltage_level; opening_reading; closing_reading; timestamp; process_step; machine_hours; batch_id | 校准分表；共用电表要求有记录因果分配 | kWh | 连续或每个报告间隔 | 包括季节性干燥条件的代表性完整报告期 | 每个制造场址 | 汇总纳入过程电量，再除以合格输出质量 | 电表校准；账单；运行日志；分配工作表 |
| `cp_packaging_records` | `integrated_knotted_carpet_manufacturing` | LDPE 销售包装膜 | 包装领用和产品规格 | material_grade; supplier; recycled_content; thickness; issued_mass; returned_mass; product_batch | 校准秤和受控包装领退料记录 | kg | 每个包装批次 | 报告期内全部合格产品 | 每个包装位置 | 纳入产品的不可重复使用薄膜净质量除以合格输出质量 | 秤校准；供应商规格；包装核对 |
| `cp_solid_waste_records` | `integrated_knotted_carpet_manufacturing` | 羊毛修剪料和棉纱下脚料 | 分类废物称量和转移记录 | waste_identity; fibre_content; source_step; batch_id; gross_mass; tare_mass; destination; recovery_or_disposal_route | 分类容器、校准秤和匹配转移联单 | kg | 每个容器或转移批次 | 报告期内全部合格生产 | 每个制造场址和去向 | 按精确废物身份和去向汇总净质量，再除以合格输出质量 | 秤校准；容器日志；转移联单；处理确认 |
| `cp_product_acceptance_records` | `integrated_knotted_carpet_manufacturing` | 验收合格打结地毯输出 | 最终检验和称量记录 | product_id; batch_id; fibre_composition; knot_type; knot_density; dimensions; pile_height; finishing_route; moisture_condition; net_carpet_mass; packaging_mass; acceptance_status | 校准秤加有记录最终检验 | kg | 每件成品 | 报告期内全部合格地毯 | 每个制造场址 | 汇总合格净干地毯质量；不合格产品保留单独处置 | 秤校准；检验记录；产品规格；拒收日志 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_reference_mass` | 全部前景交换 | 归一化交换 = 采集交换量 / 验收合格净干地毯质量 | 采集交换量；验收合格净干地毯质量 | 每 1 kg 合格地毯的交换量 | `iso-14044-2006` |
| `net_material_issue` | 纱线、洗涤剂和包装投入 | 净消耗质量 = 领用质量 - 退回受控库存的同身份未使用质量 | 领用质量；退回质量；精确材料身份 | 净投入质量 | `iso-14044-2006` |
| `wastewater_mass_conversion` | 按体积计量的废水 | 废水质量 = 计量体积 × 已声明条件下的密度 | 排水体积；密度；温度或已声明条件 | kg 废水 | `eu-textiles-bat-2022` |
| `pollutant_load` | 监测的废水参数 | 污染物负荷 = 流量比例浓度 × 废水体积，并保持单位换算一致 | 浓度；匹配排水体积；采样期 | 分别识别的基本流或处理记录的污染物质量 | `eu-textiles-bat-2022` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和纱线投入 | 保留精确产品身份和必需限定信息；不得以机织、簇绒、植绒或通用地毯流替代 CPC 27210。 | Tiangong state_code 100 直读；供应商规格；最终检验记录；`un-cpc-3-0` |
| `dq_measurement_traceability` | 全部前景数量 | 保留校准仪表、秤、票据、库存、批次、采样和计算记录，使每个归一化数值可追溯到原始证据。 | 校准证书；票据；签字记录；计算工作表；`iso-14044-2006` |
| `dq_process_completeness` | 场址清单 | 核对年度或报告期的水、能源、纺织材料、工艺化学品、废水、回收材料和每类废物，并尽可能分解到过程层级。 | 场址核对；过程仪表；废物转移记录；`eu-textiles-bat-2022` |
| `dq_route_representativeness` | 报告期 | 覆盖代表性完整生产期或完整声明批次，包括适用的洗涤和干燥条件，并披露排除项、异常运行和数据缺口。 | 生产计划；运行日志；已披露数据质量声明；`iso-14044-2006` |
| `dq_wastewater_monitoring` | 场内洗涤、洗毛或染色 | 在关键位置表征相关废水流，对相关参数采用适用 EN、ISO、国家或同等科学质量的方法。 | 采样计划；实验室报告；监管链；`eu-textiles-bat-2022` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 确认输出是 CPC 27210、Mass 和 kg 对应的 state_code 100 Product flow，并确认全部必需产品限定信息齐全。 | `un-cpc-3-0` |
| `validate_atomic_inventory` | 每个清单行 | 确认每行只包含一个具体交换；拒绝集合标签、选择指令、合并公用工程、合并材料、合并废物或合并排放。 | `iso-14044-2006` |
| `validate_uuid_readback` | 每个含 UUID 的流 | 通过 flow-hybrid-search 和 Tiangong CLI state_code 100 直读双重确认每个 UUID；若流类型、材料/状态、分类、属性、单位、路线或去向不语义精确，则删除 UUID 或保持空白。 | `iso-14044-2006` |
| `validate_foreground_evidence` | 每个数量 | 确认每个非参考数量均来自已声明采集协议和原始前景记录；拒绝 AI 估算和无记录默认范围。 | `iso-14044-2006`; `eu-textiles-bat-2022` |
| `validate_route_expansion` | 场内洗毛、染色、燃烧或废水处理 | 确认每个受控路线均由单独过程表示，且每种实际化学品、能源载体、废物和直接排放均为独立原子交换。 | `eu-textiles-bat-2022` |
| `validate_mass_reconciliation` | 合格产品、纱线投入和分类纺织废物 | 核对纱线领用和退回、合格产品质量、实测纺织废物、库存变化和已记录水分基准；调查并披露物料差异。 | `iso-14044-2006` |
| `validate_allocation` | 共用作业 | 确认首先尝试过程细分，每项剩余分配均采用有记录因果基准或已披露替代基准，并在要求时进行敏感性分析。 | `iso-14044-2006` |
| `validate_completeness_disclosure` | 发布数据集 | 确认披露纳入/排除阶段、地域、期间、纱线染色状态、整理步骤、干燥路线、废水去向、废物路线、包装基准、缺失 UUID 和数据缺口。 | `iso-14040-2006`; `iso-14044-2006` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 打结地毯成品的前景生产数据集 |
| downstream_use | `secondary_dataset`; 审查和发布后可作为 `background_dataset` |
| allowed_use | 需要质量型厂门口数据集的 LCI 和 LCA 模型，且所用 CPC 27210 打结地毯路线与限定信息匹配 |
| excluded_use | 机织、簇绒、植绒、针刺、编织、钩织或非纺织铺地物；未单独论证功能等效性的使用寿命比较；未披露地跨纤维组成、结密度、整理路线、地域或期间外推 |
| required_metadata | canonical PCR id；CPC 参考；产品和纱线限定信息；工厂地域；报告期；技术和过程路线；前景/上游边界；分配；废水和废物去向；参考流 UUID/属性/单位；来源 ID |
| required_quality_disclosure | 原始记录覆盖率；测量和校准方法；仪表分配；水分基准；缺失或拒绝的 UUID；排除项；数据缺口；异常运行；不确定性和代表性限制 |
| update_trigger | 产品身份、纤维组成、打结或整理路线、纱线染色状态、洗涤化学品、干燥能源路线、废水处理、废物去向、包装系统、工厂地域或报告期绩效发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0` | `official_guidance` | 联合国统计司，《Central Product Classification Version 3.0》结构与解释性说明，https://unstats.un.org/unsd/classifications/Econ/CPC.cshtml（检索日期 2026-08-13） | 产品类别身份和 CPC 27210 范围 |
| `cepc-carpet-production-process` | `official_guidance` | Carpet Export Promotion Council, Carpet Production Process, https://www.cepc.co.in/carpet-production-process（检索日期 2026-08-13） | 手工打结构造、纱线用途、洗涤、剪绒、锁边、干燥、拉伸、精剪和包装过程分解 |
| `eu-textiles-bat-2022` | `official_guidance` | 欧盟委员会实施决定 (EU) 2022/2508（纺织工业 BAT 结论），https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2508（检索日期 2026-08-13） | 过程级材料、水、能源、废水、废物和排放监测；湿法加工和废水规则 |
| `iso-14040-2006` | `standard` | ISO 14040:2006, Environmental management — Life cycle assessment — Principles and framework, https://www.iso.org/standard/37456.html（2022 年确认继续有效；检索日期 2026-08-13） | 目标与范围、边界、解释和披露原则 |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html（2022 年确认继续有效；检索日期 2026-08-13） | LCI 数据采集、分配、数据质量、一致性和报告规则 |
