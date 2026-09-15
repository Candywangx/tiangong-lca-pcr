---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.spark-ignition-reciprocating-internal-combustion-piston-engines-of-a-cylinder-capacity-89c81679
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 汽缸容量不超过1 000毫升的火花往复式活塞内燃机

## 1. 范围与适用性

本 PCR 适用于机动车辆用、总汽缸容量不超过1000 cm3的完整火花点火往复式活塞内燃机前景出厂数据包。其范围包括材料与部件接收、在场址内实施的机加工和清洗、发动机装配与精整，以及实际实施的生产线发动机试验。

本 PCR 不包括旋转式发动机、压燃式发动机、汽缸容量超过1000 cm3的发动机、航空发动机、整车、变速器、牵引电池、车辆集成、分销、使用、维护、再制造和报废处理。除非运输包装构成所声明可销售发动机供货合同的一部分，否则运输包装不纳入；任何纳入的包装必须作为单独原子流报告。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.spark-ignition-reciprocating-internal-combustion-piston-engines-of-a-cylinder-capacity-89c81679 |
| classification_refs | CPC 3.0：43121（精确语境参考；接受决定由本 PCR 之外的治理流程负责） |
| covered_products | 机动车辆用、总汽缸容量<=1000 cm3的完整可销售火花点火往复式活塞内燃机 |
| excluded_products | 旋转式、压燃式、航空用、不完整发动机零件、汽缸容量超过1000 cm3以及整车产品 |
| representative_product | 以独立机动车辆发动机状态供应的多缸汽油火花点火往复式活塞内燃机 |
| production_route | 采购大宗材料、近净成形件与部件；按实际情况在场址内机加工/清洗；装配及可选生产线热试 |
| market_state | 所声明干式或加注液体运输状态的完整出厂发动机；除非明确声明，否则不含运输包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供符合所声明产品规格及生产验收准则的完整 CPC 43121 出厂发动机 |
| How much | 完整可销售发动机净质量1 kg |
| How well | 火花点火；往复式活塞设计；机动车辆用；总汽缸容量<=1000 cm3；已声明发动机族及验收状态 |
| How long or cycle | 报告工厂的一个生产批次；本从摇篮到大门功能单位不含使用寿命 |
| reference_flow_link | 下表定义的唯一参考产品流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 汽缸容量不超过1000毫升的火花往复式活塞内燃机 `68b3d069-e54c-4940-bf73-0ecce68d5cef` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 发动机族与型号；以cm3计的准确总汽缸容量；汽缸数；二冲程或四冲程；进气方式；燃油计量系统；排放控制配置；额定功率；干式或加注液体运输净质量；所含液体；生产受试比例；工厂地域；生产期；包装纳入情况 |

构建前景数据包时，每项必需限定信息都必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失限定信息将使参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及材料/废物质量行 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量或依据可追溯记录推导所声明运输状态下的发动机净质量；除非声明纳入包装，否则扣除运输包装。全部清单按1 kg发动机净质量归一化。 |
| `electricity_energy` | 电力行 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表原始电量及其换算为MJ的记录，并披露原始计量单位、换算因子、电压等级、电网地域和所含损耗。 |
| `gas_volume` | 气态天然气 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 报告计量气体体积及温度、压力、标准/实际状态、组成或供应商计费基准和换算方法。 |
| `test_allocation` | 生产线发动机试验 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录受试比例，仅按所声明的生产批次物理规则，将实际试验台投入与直接排放分配至可销售产量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在报告发动机制造厂大门处接收的采购大宗材料、近净成形件、成品部件、公用工程和化学品 |
| starting_condition_role | 前景制造起点；每项采购投入的上游生产由单独有效数据集表示 |
| product_classification_scope | 总汽缸容量<=1000 cm3的完整 CPC 43121 机动车辆用火花点火往复式活塞内燃机 |
| recursive_input_rule | 同类完整发动机若作为投入进入，必须作为具有来源与既有负荷的独立采购或内部转移产品记录，不得与参考产出静默合并 |
| upstream_dataset_requirement | 对所有采购材料、部件、能源、水、燃料与处理服务采用地域、技术、时间和产品状态具有代表性的上游数据集 |
| disclosure | 声明自制与采购部件范围、所含机加工/清洗/精整、受试比例与试验类型、运输液体状态、包装纳入、截断、数据缺口和处理去向 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | 前景制造 | 纳入在场址内为产出所声明可销售发动机而发生的全部材料/部件接收、机加工、清洗、装配、精整及配套公用工程使用。 | `us-doe-vto-analysis-2020` |
| `boundary_rule_2` | 生产线试验 | 报告工厂实施生产、合规或性能试验时，纳入实际试验发动机燃料、电力、发动机通过量和直接尾气排放。 | `us-epa-engine-test-cells`, `us-ecfr-40-cfr-1065-15` |
| `boundary_rule_3` | 排除项 | 排除车辆集成、车辆运行、维护、再制造和报废处理；另行披露任何资本品或员工活动排除。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `engine_manufacturing` | 发动机部件制造、清洗、装配与精整 | `required` | 始终纳入；仅记录所声明工厂边界内的活动与交换 | 前景生产 | 1 kg可销售发动机净产出 |
| `production_line_test` | 生产线发动机热试 | `conditional` | 工厂为生产、合规或性能验收而运行完整发动机时纳入 | 前景质量试验 | 每生产批次的受试发动机质量和受试比例 |

### 过程：发动机部件制造、清洗、装配与精整（`engine_manufacturing`）

#### 输入

##### 产品流

###### 铝合金投入（`aluminium_alloy`）

记录为发动机铸件或其他铝部件跨越工厂边界的铝合金质量；合金牌号和采购产品状态属于前景限定信息。

- 选定流：铝合金
- 流属性/单位：质量 / kg
- 数量规则：采购质量减去有记录的退料，再按1 kg可销售发动机净产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg可销售发动机净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_receipts`
- 来源：`us-doe-vto-analysis-2020`

###### 灰铸铁投入（`grey_cast_iron`）

仅当灰铸铁用于所声明发动机并跨越工厂边界时记录，不得以生铁替代。

- 选定流：灰铸铁
- 流属性/单位：质量 / kg
- 数量规则：采购质量减去有记录的退料，再按1 kg可销售发动机净产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg可销售发动机净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_receipts`
- 来源：`us-doe-vto-analysis-2020`

###### 合金钢投入（`alloy_steel`）

依据实际物料清单记录用于曲轴、连杆、气门机构、齿轮或其他发动机零件的合金钢。

- 选定流：合金钢
- 流属性/单位：质量 / kg
- 数量规则：采购质量减去有记录的退料，再按1 kg可销售发动机净产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg可销售发动机净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_receipts`
- 来源：`us-doe-vto-analysis-2020`

###### 铜线材投入（`copper_wire`）

记录安装于发动机电气与点火系统的铜线材；排除不属于所供发动机的车辆侧线束。

- 选定流：铜线材
- 流属性/单位：质量 / kg
- 数量规则：进入所供发动机的物料清单质量，按1 kg可销售发动机净产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg可销售发动机净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_receipts`
- 来源：`us-doe-vto-analysis-2020`

###### 尼龙6树脂投入（`nylon_6_resin`）

仅对场址内制造的尼龙6零件或以尼龙6含量定量供应的零件记录尼龙6树脂，不得与其他聚合物合并。

- 选定流：尼龙6树脂
- 流属性/单位：质量 / kg
- 数量规则：物料清单或注塑领用质量，按1 kg可销售发动机净产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg可销售发动机净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_receipts`
- 来源：`us-doe-vto-analysis-2020`

###### 三元乙丙橡胶投入（`epdm_rubber`）

记录作为已声明密封件或软管安装的三元乙丙橡胶；具体数据包中出现的其他弹性体须使用各自原子行。

- 选定流：三元乙丙橡胶
- 流属性/单位：质量 / kg
- 数量规则：进入所供发动机的物料清单质量，按1 kg可销售发动机净产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg可销售发动机净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_receipts`
- 来源：`us-doe-vto-analysis-2020`

###### 外购电力（`electricity_manufacturing`）

记录输送给机加工、清洗、装配、精整、压缩空气及获分配配套系统的电能。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：净热值 / MJ
- 数量规则：计量或按物理因果分配的电力，按1 kg可销售发动机净产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg可销售发动机净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_water`
- 来源：

###### 工艺用水（`process_water`）

记录进入水基清洗、漂洗、冷却液补充或其他发动机制造作业的工艺用水；闭路循环冷却水不得重复计算。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：计量工艺用水净投入，按1 kg可销售发动机净产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg可销售发动机净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_water`
- 来源：

###### 水基清洗用氢氧化钠（`sodium_hydroxide`）

采用碱性水基清洗路线时记录氢氧化钠活性成分质量；必须保留溶液浓度和采购状态。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：质量 / kg
- 数量规则：投入清洗系统的氢氧化钠活性成分质量，按1 kg可销售发动机净产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg可销售发动机净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_chemicals`
- 来源：

###### 场址内工艺热用气态天然气（`natural_gas`）

仅当气态天然气在场址内燃烧并将工艺热分配至发动机生产线时记录；供应商与体积参考状态属于前景限定信息。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 / m3
- 数量规则：按物理因果分配至发动机制造的计量气体体积，按1 kg可销售发动机净产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg可销售发动机净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_water`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 完整可销售发动机（`reference_engine_output`）

记录最终验收后所声明干式或加注液体运输状态的净产出质量。

- 选定流：汽缸容量不超过1000毫升的火花往复式活塞内燃机 `68b3d069-e54c-4940-bf73-0ecce68d5cef`
- 流属性/单位：质量 / kg
- 数量规则：已验收产出实测质量归一化为恰好1 kg参考产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg可销售发动机净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_output_and_waste`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 送往处理的废铝（`aluminium_scrap`）

将离开前景边界的铝切屑、边角料与报废铝零件作为单一废铝流记录。

- 选定流：废铝
- 流属性/单位：质量 / kg
- 数量规则：离厂废铝净称量质量，按1 kg可销售发动机净产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg可销售发动机净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_output_and_waste`
- 来源：

###### 送往处理的黑色金属废料（`ferrous_scrap`）

记录离开前景边界的铁钢切屑、边角料与报废零件；存在不锈钢或危险污染组分时须另行拆分。

- 选定流：废铁和废钢
- 流属性/单位：质量 / kg
- 数量规则：离厂黑色金属废料净称量质量，按1 kg可销售发动机净产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg可销售发动机净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_output_and_waste`
- 来源：

###### 送往处理的碱性废水（`alkaline_wastewater`）

记录跨越边界进入场内或场外废水处理的废水基碱性清洗液；不得与无关生活污水合并。

- 选定流：碱性废水
- 流属性/单位：质量 / kg
- 数量规则：送往处理的碱性废水净计量或称量质量，按1 kg可销售发动机净产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg可销售发动机净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_output_and_waste`
- 来源：

##### 基本流

###### 场址内天然气燃烧的直接化石源二氧化碳（`carbon_dioxide_manufacturing`）

仅记录前景边界内排放的直接化石源CO2；电力和燃料供应的上游排放保留在上游数据集中。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：归属于发动机制造的实测或计算直接烟道CO2，按1 kg可销售发动机净产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg可销售发动机净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`us-ecfr-40-cfr-1065-15`

### 过程：生产线发动机热试（`production_line_test`）

#### 输入

##### 产品流

###### 进入试验台的发动机（`reference_engine_test_input`）

记录实际进入试验台运行的完整发动机质量及其在生产批次中的受试比例。

- 选定流：汽缸容量不超过1000毫升的火花往复式活塞内燃机 `68b3d069-e54c-4940-bf73-0ecce68d5cef`
- 流属性/单位：质量 / kg
- 数量规则：实际受试发动机总质量按1 kg可销售发动机净产出归一化；另行报告由此得到的受试比例
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg可销售发动机净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_production_test`
- 来源：`us-epa-engine-test-cells`, `us-ecfr-40-cfr-1065-15`

###### 试验消耗的车用汽油（`motor_gasoline`）

仅记录生产试验发动机燃烧的车用汽油；必须声明牌号、生物燃料掺混、供应商和燃料碳来源。

- 选定流：车用汽油
- 流属性/单位：质量 / kg
- 数量规则：生产试验消耗的实测汽油总量按1 kg可销售发动机净产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg可销售发动机净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_production_test`
- 来源：`us-epa-engine-test-cells`, `us-ecfr-40-cfr-1065-15`

###### 试验台消耗的电力（`electricity_test`）

记录输送给测功机、通风、冷却、控制和排放测量并分配至生产试验的电能。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：净热值 / MJ
- 数量规则：生产试验消耗的试验台计量电力总量按1 kg可销售发动机净产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg可销售发动机净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_production_test`
- 来源：`us-ecfr-40-cfr-1065-15`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 离开试验台的发动机（`reference_engine_test_output`）

记录试验后的同一受试发动机质量；不合格发动机在返工并验收前不得计入已验收参考产出。

- 选定流：汽缸容量不超过1000毫升的火花往复式活塞内燃机 `68b3d069-e54c-4940-bf73-0ecce68d5cef`
- 流属性/单位：质量 / kg
- 数量规则：离开生产试验的已验收发动机总质量按1 kg可销售发动机净产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg可销售发动机净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_production_test`
- 来源：`us-ecfr-40-cfr-1065-15`

##### 废物流

##### 基本流

###### 试验直接化石源二氧化碳（`carbon_dioxide_test`）

使用实测尾气质量或有记录的燃料碳平衡记录试验发动机尾气中的直接化石源CO2。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：生产试验产生的实测或计算CO2总量按1 kg可销售发动机净产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg可销售发动机净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_production_test`
- 来源：`us-ecfr-40-cfr-1065-15`

###### 试验一氧化碳（`carbon_monoxide_test`）

适用试验协议测量或要求时，记录生产线发动机运行期间排入空气的一氧化碳。

- 选定流：一氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：生产试验产生的实测一氧化碳总量按1 kg可销售发动机净产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg可销售发动机净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_production_test`
- 来源：`us-ecfr-40-cfr-1065-15`

###### 试验氮氧化物（`nitrogen_oxides_test`）

记录生产线发动机运行期间排入空气的实测总氮氧化物。

- 选定流：氮氧化物，排入空气
- 流属性/单位：质量 / kg
- 数量规则：生产试验产生的实测氮氧化物总量按1 kg可销售发动机净产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg可销售发动机净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_production_test`
- 来源：`us-ecfr-40-cfr-1065-15`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | 发动机族前景作业 | 通过分别计量或记录发动机族材料领用、设备能源、清洗批次、装配线、试验台、不合格品与废物，优先避免分配。 |  |
| `allocation_rule_2` | 共用公用工程与配套作业 | 无法细分时，采用有记录的因果物理驱动因子分配，例如机器小时、计量能源、清洗槽通过量、受试发动机小时或已验收发动机质量；经济分配必须明确说明理由。 |  |
| `allocation_rule_3` | 废料与不合格发动机 | 在前景边界处报告废料与处理流，不计入避免负荷抵扣；在下游处理数据集中一致建模再生或回收，并披露任何再生含量约定。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `engine_manufacturing` | 材料投入 | 采购、领用、退料和物料清单记录 | 材料身份；牌号；采购状态；供应商；总领用；退料；发动机族；已验收产出质量 | 将采购与生产线领料记录同所声明发动机物料清单核对 | kg | 每次收货/领用；定期核对 | 完整且具有代表性的报告期或完整生产期 | 所声明工厂边界内全部设施 | 净领用量除以已验收发动机净质量 | 发票；材质证书；BOM版本；秤校准；核对记录 |
| `cp_energy_and_water` | `engine_manufacturing` | 电力、水和天然气 | 公用工程计量与分配记录 | 表计编号；起止读数；单位；气体温压；分配驱动因子；生产质量 | 优先直接分表；否则采用有记录的因果分配 | MJ, kg, m3 | 连续或账单周期 | 与生产相同报告期 | 纳入的生产及配套表计 | 净消耗量除以已验收发动机净质量 | 表计校准；账单；分配工作表 |
| `cp_cleaning_chemicals` | `engine_manufacturing` | 氢氧化钠 | 化学品领用与清洗槽管理记录 | 产品质量；浓度；活性比例；清洗槽补加；排放；发动机族通过量 | 称量或计量补加量并计算活性成分质量 | kg活性NaOH | 每次补加；每月核对 | 与生产相同报告期 | 全部纳入清洗系统 | 活性成分质量除以已验收发动机净质量 | 供应商证书；浓度测试；领用日志 |
| `cp_output_and_waste` | `engine_manufacturing` | 已验收发动机与废物 | 生产、地磅、转移联单和处理记录 | 已验收发动机质量；干/加液状态；不合格质量；废料材质；废水质量；去向 | 经校准秤具或可追溯体积-密度换算 | kg | 每批或每次运输 | 与投入相同报告期 | 全部纳入发动机生产线与废物去向 | 先拆分材质特定废物，再除以已验收发动机净质量 | 秤校准；废物联单；验收记录；质量核对 |
| `cp_direct_emissions` | `engine_manufacturing` | 直接燃烧排放 | 烟道测量或燃料碳计算 | 燃料量；碳含量；氧化基准；实测浓度；流量；运行时间 | 经批准测量或有记录的碳平衡 | kg | 每个监测区间或燃料批次 | 与生产相同报告期 | 分配至发动机线的全部场址内直接源 | 汇总直接排放后除以已验收发动机净质量 | 校准；实验室结果；燃料证书；计算审核 |
| `cp_production_test` | `production_line_test` | 受试发动机、汽油、电力与尾气 | 试验台日志、燃料表、电表与排放测量 | 发动机编号；发动机质量；受试比例；时长；循环；燃料质量；电力；尾气流量；组分浓度；通过/不合格 | 关联同步试验台和生产批次记录，确定各试验区间的排放质量 | kg, MJ, h | 每次试验 | 与生产相同报告期 | 全部纳入生产试验台 | 汇总全部实测生产试验交换，仅除以一次已验收发动机净质量；不得对汇总测量值再次应用受试比例 | 仪器校准；试验工作表；批次追溯；通过/不合格记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass` | 全部前景交换 | 归一化数量=净交换数量/已验收发动机净产出质量 | 净交换数量；已验收发动机净产出质量 | 每1 kg参考产品的交换 |  |
| `calc_material_net_issue` | 材料投入 | 净材料投入=收货或生产线领用-所记录的未消耗退料 | 收货/领用质量；退料质量 | 净材料质量 |  |
| `calc_gas_reference_volume` | 天然气 | 将实际或计费气体体积换算至所声明参考状态，禁止混用体积基准 | 计量体积；温度；压力；压缩因子或计费基准 | 所声明状态下的m3 |  |
| `calc_emitted_mass` | 实测试验排放 | 排放质量=试验区间内组分质量流率积分；采用适用的连续或批量采样计算 | 组分浓度；尾气流量；试验区间 | 排放组分kg | `us-ecfr-40-cfr-1065-15` |
| `calc_test_fraction` | 生产线试验 | 仅有单台受试发动机平均值时，先乘以受试发动机数一次，再按已验收产出归一化；表计已汇总全部生产试验时，直接归一化该总量，不得再次应用受试比例。 | 实测试验交换；受试发动机数；已验收发动机产出质量 | 归属于可销售产出的试验交换 | `us-epa-engine-test-cells`, `us-ecfr-40-cfr-1065-15` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 证明所声明发动机族采用火花点火、往复式活塞设计、用于机动车辆且总汽缸容量<=1000 cm3。 | 铭牌/规格；型式认证或证书记录；BOM与型号族控制 |
| `dq_mass_balance` | 制造清单 | 核对材料投入、发动机产出、过程损耗、库存变化、退料、废料、在实质时的废水固体以及所记录排除项。 | 签署的质量平衡工作表；库存记录；废物联单 |
| `dq_temporal` | 全部前景记录 | 采用完整且具有代表性的报告期或完整生产期；说明启停、异常、原型与低产量状况。 | 生产日历；表计覆盖；异常日志 |
| `dq_completeness` | 全部过程 | 核对已验收发动机的完整质量，并不论质量份额报告每项单独危险、受管制或决策相关交换；量化并披露任何剩余缺口。 | BOM覆盖；完整性计算；缺口登记 |
| `dq_test_traceability` | 生产线试验 | 避免认证/研发试验与生产试验重复计算，并保留受试比例、循环、燃料规格与组分方法。 | 试验计划；发动机/试验编号；校准与结果文件 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | 产品身份 | 除非发动机为火花点火、往复式活塞、机动车辆用且所声明总汽缸容量不超过1000 cm3，否则拒绝该数据包。 | `un-cpc-3-0-structure-2025` |
| `validation_rule_2` | 参考流 | 要求准确参考流UUID、质量属性、kg单位及全部必需限定信息；核实发动机净质量扣除了未声明运输包装。 | `un-cpc-3-0-structure-2025` |
| `validation_rule_3` | 清单核算 | 要求每项交换均为原子流、关联过程与方向、按1 kg已验收发动机产出归一化，并与生产、库存、退料和废物记录核对。 |  |
| `validation_rule_4` | 生产线试验 | 若实施试验，要求受试发动机输入/输出身份、受试比例、燃料与电力记录，并分别报告直接尾气组分，避免汇总烃类与单独物种重复计算。 | `us-epa-engine-test-cells`, `us-ecfr-40-cfr-1065-15` |
| `validation_rule_5` | 上游代表性 | 要求披露上游数据集的供应商/产品状态、地域、技术、时间与分配；未解决UUID或范围证据仍作为明确审查发现。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`；经独立审查后可为`background_dataset` |
| downstream_use | 前景发动机制造清单及下游机动车辆process或lifecyclemodel投影 |
| allowed_use | 在参考流限定信息等价且边界、地域、技术和生产期兼容时，对 CPC 43121 发动机开展从摇篮到大门比较 |
| excluded_use | 未增加相应模型时，不得用于整车、使用阶段、再制造、报废、航空发动机、旋转式发动机、压燃式发动机或>1000 cm3声明 |
| required_metadata | PCR id/版本；发动机族/型号；排量；汽缸数；冲程；进气方式；燃油系统；排放控制；额定功率；运输液体状态；受试比例；工厂地域；时期；上游数据集身份；分配；截断；未解决发现 |
| required_quality_disclosure | 一手数据比例；表计与BOM覆盖；质量平衡闭合；时间代表性；分配驱动因子；试验协议；数据缺口；不确定性；审查状态 |
| update_trigger | 发动机族或BOM重新设计；排量/类别变化；材料性工厂/工艺/能源变化；试验政策变化；获得新的准确UUID；获得新的两来源兼容范围证据；或时间代表性不再成立 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，CPC 3.0版结构，2025年6月30日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于2026-09-05） | 英文类别身份、上级机动车辆用发动机边界和汽缸容量阈值 |
| `un-cpc-1-1-chinese` | `official_guidance` | 联合国统计司，《产品总分类版本1.1》，M系列第77号1.1版，https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf（检索于2026-09-05） | 同一代码的专业中文标题和上级类别中文术语 |
| `us-doe-vto-analysis-2020` | `official_guidance` | 美国能源部车辆技术办公室，《Analysis Program 2020 Annual Progress Report》，第I.3节“Update of Vehicle Manufacturing Cycle for Light Duty Vehicles”，https://www.energy.gov/sites/default/files/2021-07/VTO_2020_APR_ANALYSIS_COMBINED_REPORT_compliant_.pdf（检索于2026-09-05） | 动力总成系统材料组成以及钢、铝、塑料、铜线、橡胶和铸铁清单覆盖 |
| `us-epa-engine-test-cells` | `official_guidance` | 美国环保署，Engine Test Cells/Stands: National Emission Standards for Hazardous Air Pollutants，https://www.epa.gov/stationary-sources-air-pollution/engine-test-cellsstands-national-emission-standards-hazardous-air（检索于2026-09-05） | 条件性发动机试验台过程和直接尾气空气交换要求 |
| `us-ecfr-40-cfr-1065-15` | `standard` | 美国电子联邦法规，40 CFR 1065.15，Overview of procedures for laboratory and field testing，https://www.ecfr.gov/current/title-40/chapter-I/subchapter-U/part-1065/subpart-A/section-1065.15（检索于2026-09-05） | 试验燃料/功记录、尾气组分清单、排放质量测量和测功机试验语境 |
