---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43240
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 子类43240所列货物的零件

## 1. 范围与适用性

本 PCR 适用于作为单独商品交易、用于组装、维护或修理管道、锅炉壳、储罐、容器等所用龙头、旋塞、阀门及类似装置的零件。所涵盖零件包括承压阀体和阀盖、阀杆、阀瓣、阀塞、阀球、阀座，以及以成品或半成品市场状态供应的其他可识别龙头或阀门零件。

完整装置、通用紧固件、密封件、执行器、仪表、管件、未加工原材料以及制造或维修服务不在范围内。数据包必须说明零件功能、材料和完工程度。由于这些零件是中间产品，其最终服务取决于整机和使用场景，本 PCR 采用质量型声明单位。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43240 |
| classification_refs | CPC 3.0：43254，子类43240所列货物的零件 |
| covered_products | 作为单独商品交易的阀体、阀盖、阀杆、阀瓣、阀塞、阀球、阀座及龙头、旋塞、阀门和类似装置的其他可识别零件 |
| excluded_products | 完整装置；通用紧固件、密封件、执行器、仪表和管件；未加工原材料；安装、维修和机加工服务 |
| representative_product | 供下游装配的机加工铬钢阀体或阀内件 |
| production_route | 购入合金钢半成品后进行机加工；按实际情况进行热处理和水基表面清洗；最后检验和包装 |
| market_state | 制造商出厂边界处可识别的成品或已声明半成品；销售包含包装时为清洁且已包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在龙头、旋塞、阀门或类似装置中实现已声明承压、流量控制、密封或结构功能的可识别零件 |
| How much | 制造商出厂边界处 1 kg 成品或已声明半成品零件 |
| How well | 符合已声明图样/规范、材料牌号、尺寸与公差、表面状态以及适用的压力—温度或密封要求 |
| How long or cycle | 一个交付生产批次；除非下游研究记录完整装置寿命，否则不指定使用期限 |
| reference_flow_link | 满足全部必需限定信息的 1 kg 所声明零件 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 子类43240所列货物的零件（Tiangong UUID 未解决） |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件类型与功能；成品或半成品状态；材料牌号与坯料形态；产品净质量；图样/规范及修订版；尺寸与公差；适用时的压力—温度或密封等级；热处理状态；表面处理；生产场址与地理范围；报告期；是否含包装 |

所有必需限定信息必须在元数据、过程说明、参考流备注、产品说明或等效字段中声明；缺失时参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `mr_reference_mass` | 参考产品和质量型清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用所声明市场状态下合格零件的净质量；产品质量不含可拆运输工装和包装。 |
| `mr_energy` | 电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 记录过程电表处的交付电力，并保留原始单位、换算关系和计量边界。 |
| `mr_gas_volume` | 天然气行 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明计量参考温度和压力、气体计费或组成基准，以及体积是否换算至标准状态。 |
| `mr_normalization` | 所有前景数量 | 各行规定属性 | 各行参考单位 | 以相同范围和期间内合格零件净质量归一化投入与产出，并保留总产量、废品、返工和库存变化。 |

## 5. 系统边界

前景边界自购入半成品材料和其他产品进入场址开始，包括场内机加工、条件适用的热处理、条件适用的水基表面清洗、最终检验和包装，直至零件离开制造商。购入材料、能源、水、化学品和包装的上游生产通过供应商或背景数据集连接。除非研究扩展边界，否则不包括资本设备、厂房建设、出厂后配送、安装、使用、维护和寿命终止。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 购入铬钢或另一种明确声明的半成品材料进入场址，并具有牌号、形态、质量、供应地理范围和再生含量信息 |
| starting_condition_role | 零件前景制造的上游产品投入 |
| product_classification_scope | 龙头、旋塞、阀门及类似装置的单独交易零件；完整装置和通用部件不属于本身份 |
| recursive_input_rule | 已属本产品类别的购入未完工零件仅作为产品投入记录一次，并链接供应商数据集和完工程度；不得在接收过程中递归重建其上游前景制造 |
| upstream_dataset_requirement | 对购入材料、电力、天然气、水、化学品和包装使用具有地理与技术代表性的从摇篮到大门数据集，并披露代理与缺口 |
| disclosure | 声明起始材料、机加工、热处理、表面准备、废品/返工、废水和废料去向、包装状态、排除项以及企业特定数据边界 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_gate` | 所有前景过程 | 纳入从所声明半成品入场到零件放行期间，场内全部材料、能源、水、废物和直接排放交换。 | eu-pef-method-2021; us-epa-fabricated-metal-products-1995 |
| `sb_conditional_processes` | 热处理和水基表面清洗 | 仅在实际实施时纳入条件过程；披露技术，并加入跨越其边界的每一项实际原子交换。 | us-epa-fabricated-metal-products-1995 |
| `sb_exclusions` | 被排除阶段 | 记录并说明排除理由；不得无说明地遗漏废品、返工、钢废料、清洗废水或直接燃烧排放。 | eu-pef-method-2021 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p_primary_machining` | 合金钢零件初级机加工 | conditional | 以铬钢或另一种已声明金属半成品通过机加工生产涵盖零件时纳入 | 前景材料成形 | 合格机加工零件 kg |
| `p_heat_treatment` | 热处理 | conditional | 通过受控加热和冷却改变材料状态时纳入 | 前景性能调整 | 热处理零件 kg |
| `p_aqueous_cleaning` | 水基表面清洗 | conditional | 场内实施碱性水基清洗和漂洗时纳入 | 前景表面准备 | 清洁零件 kg |
| `p_final_release` | 最终检验与包装 | required | 始终纳入最终合格放行；仅在销售含瓦楞纸箱时纳入纸箱行 | 参考产品前景放行 | 1 kg 合格涵盖零件 |

### 过程：合金钢零件初级机加工（`p_primary_machining`）

#### 输入

##### 产品流

###### 铬钢半成品材料（`chromium_steel_input`）

仅对铬钢路线记录；其他材料路线必须使用分别识别的原子材料流。

- 选定流：铬钢 `f4f19250-c683-4ff0-9763-1498069df9de`
- 流属性/单位：Mass / kg
- 数量规则：进入机加工的购入质量，并按期初和期末库存调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：相同生产范围内每 kg 合格涵盖零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：us-epa-fabricated-metal-products-1995

###### 机加工交付电力（`machining_electricity`）

记录机床和可直接归属辅助设备的计量电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：机加工的计量或分配交付电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：相同生产范围内每 kg 合格涵盖零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：us-epa-fabricated-metal-products-1995

###### 机加工切削液（`cutting_fluid_input`）

记录购入补充切削液，并将回用循环库存单独核算。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass / kg
- 数量规则：库存调整后的购入补充消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：相同生产范围内每 kg 合格涵盖零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：us-epa-fabricated-metal-products-1995

###### 机加工工艺用水（`machining_process_water`）

仅在配制水混溶切削液或直接机加工用水跨越本边界时记录。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：可归属机加工的计量或批次记录用水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：相同生产范围内每 kg 合格涵盖零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：us-epa-fabricated-metal-products-1995

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 机加工产生的钢废料（`steel_scrap_from_machining`）

记录离开机加工的切屑、车屑和边角料，并说明合金牌号、含油情况和去向。

- 选定流：机加工钢废料 `a88e0790-436c-44f8-b336-ee509aa8a38a`
- 流属性/单位：Mass / kg
- 数量规则：发运或转入处理的实测废料质量，并按废料库存调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：相同生产范围内每 kg 合格涵盖零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：us-epa-fabricated-metal-products-1995

##### 基本流

### 过程：热处理（`p_heat_treatment`）

#### 输入

##### 产品流

###### 热处理炉气态天然气（`heat_treatment_natural_gas`）

仅对直接燃气或燃气加热设备记录气态天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：可归属热处理的修正后计量天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 热处理涵盖零件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：us-epa-fabricated-metal-products-1995

###### 热处理交付电力（`heat_treatment_electricity`）

记录炉体及可直接归属辅助设备的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：热处理的计量或分配交付电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 热处理涵盖零件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：us-epa-fabricated-metal-products-1995

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 直接化石源二氧化碳（`heat_treatment_fossil_co2`）

仅记录天然气燃烧产生的场内直接化石源二氧化碳，不含上游电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：可归属热处理的场址监测排放质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 热处理涵盖零件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：us-epa-fabricated-metal-products-1995

### 过程：水基表面清洗（`p_aqueous_cleaning`）

#### 输入

##### 产品流

###### 碱性清洗用氢氧化钠（`cleaning_sodium_hydroxide`）

仅在所声明水基清洗配方含氢氧化钠时记录，并另行保留溶液浓度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：清洗补充液中购入氢氧化钠的供应产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 清洁涵盖零件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`
- 来源：us-epa-fabricated-metal-products-1995

###### 清洗和漂洗工艺用水（`cleaning_process_water`）

记录用于槽液配制和漂洗且跨越清洗边界的计量用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：可归属清洗和漂洗的计量用水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 清洁涵盖零件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`
- 来源：us-epa-fabricated-metal-products-1995

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 清洗废水（`cleaning_wastewater`）

记录离开前景过程并进入场内或场外处理的清洗与漂洗废水，并披露组成和去向。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：Mass / kg
- 数量规则：离开清洗范围的实测废水质量，并按储存变化调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 清洁涵盖零件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`
- 来源：us-epa-fabricated-metal-products-1995

##### 基本流

### 过程：最终检验与包装（`p_final_release`）

#### 输入

##### 产品流

###### 发运用瓦楞纸箱（`corrugated_board_boxes`）

仅记录销售所含或实现所声明出厂状态所需的瓦楞纸箱。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：领用纸箱质量减退回未用纸箱质量，并分配至放行零件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 放行的合格涵盖零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的涵盖阀门零件（`finished_valve_part`）

这是合格放行后的参考产品；其精确 Tiangong 产品流 UUID 尚未解决。

- 选定流：子类43240所列货物的零件（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：1 kg 合格涵盖零件的固定参考数量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：un-cpc-3-0-structure-2025; eu-pef-method-2021

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `al_subdivision_first` | 共用设备、生产线和公用工程 | 优先按涵盖零件可归属的批次、设备或工序分别计量，以避免分配。 | eu-pef-method-2021 |
| `al_physical_relationship` | 不可分开的共用前景过程 | 无法细分时，采用可证明因果关系的物理驱动因子，如机器时间、按装载修正的炉占用、计量能源或处理表面积。 | eu-pef-method-2021 |
| `al_other_relationship` | 其余多功能过程 | 仅在不存在合理物理关系时采用包括经济分配在内的其他关系，并披露数值、期间、敏感性和受影响流。 | eu-pef-method-2021 |
| `al_scrap_disclosure` | 钢废料和回收 | 将废料作为废物产出记录，不得与金属投入或能源抵销；在下游一致建模回收负荷和收益，并披露约定。 | eu-pef-method-2021 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_machining_records` | `p_primary_machining` | 铬钢、电力、切削液、工艺用水、钢废料 | 采购/领用记录、电表、废料称重单、生产日志 | 库存；采购/领用；表计；废料质量；合格质量；废品；返工；标识 | 将记录核对至相同设备、批次和期间 | kg; MJ | 能按批次则按批次，且至少每月 | 有代表性的连续 12 个月或有说明的较短生产期 | 场内可归属机加工 | 汇总净投入/产出，分配共用资源，再除以合格质量 | 经校准表计/秤、发票、批次流转卡、废料单、核对签字 |
| `cp_heat_treatment_records` | `p_heat_treatment` | 天然气、电力、化石源二氧化碳 | 表计、炉次日志、排放记录、生产日志 | 修正气量；电力；监测 CO2；炉号；工艺；装载；产出质量 | 将表计或分配结果匹配至炉次和技术 | m3; MJ; kg | 按炉次或表计期间，且至少每月 | 有代表性的连续 12 个月或有说明的较短生产期 | 场内热处理 | 汇总可归属记录后除以热处理合格质量 | 校准、参考状态记录、炉次日志、排放监测记录 |
| `cp_cleaning_records` | `p_aqueous_cleaning` | 氢氧化钠、水、清洗废水 | 化学品领用、表计、槽液日志、生产日志 | 化学品质量/浓度；水；废水；槽液库存；处理质量；去向 | 核对补加、漂洗水、废水、库存和产出 | kg | 按批次或表计期间，且至少每月 | 有代表性的连续 12 个月或有说明的较短生产期 | 场内水基清洗 | 汇总净投入和废水后除以清洁合格质量 | 发票、经校准表计/秤、槽液分析、转移联单、质量平衡审查 |
| `cp_release_records` | `p_final_release` | 瓦楞纸箱和已完成零件 | 包装领用及最终检验/生产记录 | 纸箱领退；纸箱质量；合格质量；废品；返工；零件/规范修订版 | 将包装和放行记录链接至同一订单或期间 | kg | 按订单或批次，且至少每月 | 有代表性的连续 12 个月或有说明的较短生产期 | 最终放行和包装 | 纸箱净质量除以合格质量；参考产出设为 1 kg | 秤核查、包装规范、检验放行、生产核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cr_net_consumption` | 购入产品 | 净消耗量 = 采购或领用 + 期初库存 - 期末库存 - 有记录退回 | 同一范围和期间的交易与库存 | 跨越边界的净数量 | eu-pef-method-2021 |
| `cr_reference_normalization` | 可变清单行 | 归一化数量 = 相同范围和期间的可归属净数量 / 合格零件净质量 | 净数量、合格质量、必要时的分配驱动因子 | 每 kg 参考流或过程产出的数量 | eu-pef-method-2021 |
| `cr_scrap_reconciliation` | 机加工材料平衡 | 将金属投入与合格产出、废料、废品、返工转移和库存变化核对；调查无法解释的差额。 | 金属投入、产出、废料、废品、返工、库存 | 有记录的质量平衡与差额 | us-epa-fabricated-metal-products-1995 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和材料 | 保留零件号、图样/规范修订版、功能、牌号、坯料形态、处理状态和完工程度。 | 产品规范、合格证、材料证书、放行记录 |
| `dq_scope` | 前景过程 | 投入与产出使用相同场址、技术、产品和期间，并记录外包步骤与上游数据集。 | 过程图、边界说明、供应商记录、期间核对 |
| `dq_measurement` | 表计和质量记录 | 保留校准、单位换算、表计覆盖、估算方法和分配驱动因子。 | 校准证书、表计台账、换算工作表、分配记录 |
| `dq_temporal` | 前景数据 | 优先使用连续 12 个月；说明较短生产期，并披露停机、异常批次和利用率。 | 带日期的生产、采购、公用工程和废物记录 |
| `dq_completeness` | 清单 | 核对金属、采用清洗时的水以及过程产出，并报告缺失交换及其可能重要性。 | 经签字的质量平衡与完整性审查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `vr_identity_complete` | 参考流 | 缺少任何必需限定信息、参考质量、市场状态或图样/规范身份时校验失败。 | un-cpc-3-0-structure-2025; eu-pef-method-2021 |
| `vr_inventory_atomic` | 过程清单 | 一行合并多种材料、公用工程、包装组件、废物或排放，或使用笼统路线选择项时校验失败。 | us-epa-fabricated-metal-products-1995 |
| `vr_period_reconciliation` | 可变数量 | 数量未采用共同场址、过程范围和期间，或遗漏库存变化与返工时校验失败。 | eu-pef-method-2021 |
| `vr_uuid_semantics` | 含 UUID 的流 | 核对公开状态、中英文名称、流类型、分类、属性、单位组和限定信息；不得以代理流替代未解决的参考产品。 |  |
| `vr_boundary_disclosure` | 系统边界 | 适用的机加工、热处理、清洗、废品、废水、废料、包装或直接排放过程在无说明情况下缺失时校验失败。 | eu-pef-method-2021; us-epa-fabricated-metal-products-1995 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查后可发布为 secondary_dataset 或 background_dataset 的前景生产数据集 |
| downstream_use | 龙头、旋塞、阀门及类似装置单独交易零件制造的 process 和 lifecyclemodel 投影 |
| allowed_use | 与所声明功能、材料、完工程度、技术、地理范围、期间、边界和分配相匹配的研究 |
| excluded_use | 完整装置；通用金属制品；功能、材料或路线实质不同的零件；无等效性证明的比较声明 |
| required_metadata | PCR id/版本；零件和图样/规范身份；功能；材料/处理；市场状态；参考质量；场址/地理范围；技术；期间；过程图；分配；上游数据集；包装状态 |
| required_quality_disclosure | 前景覆盖；实测与分配数据；校准/换算；时间代表性；质量平衡差额；废品/返工；缺失交换；代理；不确定性和范围证据缺口 |
| update_trigger | 功能、牌号、完工程度、机加工路线、热处理、清洗化学品、场址、能源供应、分配、包装、供应商数据集或期间发生实质变化 |

## 11. 数据源

| Source id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《CPC 3.0 版结构》，2025-06-30，`https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv`（检索于 2026-09-05） | CPC 43254 及其母项子类43240所列货物的正式分类身份 |
| `us-epa-fabricated-metal-products-1995` | official_guidance | 美国环境保护署，*Profile of the Fabricated Metal Products Industry*，EPA/310-R-95-007，1995-09，`https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=50000DGC.TXT`（检索于 2026-09-05） | 金属制造、机加工、热处理、表面准备、投入和废物产出的过程分解 |
| `eu-pef-method-2021` | official_guidance | 欧盟委员会建议 (EU) 2021/2279，附件 I—II，2021-12-30 合并文本，`https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng`（检索于 2026-09-05） | 功能单位/参考流、边界披露、企业特定数据、分配、校验和质量规则 |
