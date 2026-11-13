---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-radio-and-television-equipme-e94d5445
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 原厂装箱未通电LED背光液晶电视自营批发服务

## 1. 范围与适用性

本PCR覆盖厂家完整原箱未通电LED背光液晶电视的商户自营批发。商户记录真实型号序列SKU区域、原包配置完整性，经普通常温存放电动搬运及真实商业买方验收。机身底座面板遥控电缆适配器电池是不同物理配置视图，仅原厂实际包含件进入继承商品套件。遥控电池不自动存在或被服务耗用。

排除组分面板整机制造、前景激活演示电测试软件更新、维修拆解翻新底座组装挂装安装、常规开主包换箱、其他显示技术、零售代理独立物流。专用温控或新增实际加工含外包须复审路线模块。厂家测试归上游，消费者运行待机年耗不定义仓库投入。未通电商业验收依据真实标准，不宣称未见功能性能。

全部真实整机附件继承包装制造及损失上游在服务增量外。完整链条前须独立完整厂家放行商品系统及相容定量归属源需求损失、唯一责任既有覆盖。实际服务事故搬运废物接收处理一次。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-radio-and-television-equipme-e94d5445 |
| classification_refs | CPC 3.0:61042; 原厂装箱未通电LED背光LCD电视自营批发较窄子集 |
| covered_products | 真实原厂完整装箱LCD/LED背光型号配置商户服务，至商业验收且商品不通电 |
| excluded_products | 裸面板零件参考、OLED/CRT投影其他产品；激活演示测试软件修拆挂装安装换箱；零售代理独立物流 |
| representative_product | 真实型号序列SKU区域厂家配置，底座遥控适配线电池实际存在可追溯至商业验收 |
| production_route | 完整组装测试原厂包装放行→商户外包装型号配置记录→普通常温库存电动搬运→未通电买方门槛 |
| market_state | 真实电视套件包装数量状态限定的已完成商业服务，不是新电视件面板或运行使用数据 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已完成的原厂装箱未通电LED背光液晶电视自营批发服务 |
| How much | 1 Item(s) |
| How well | 真实型号序列配置附件完整性、完整商品包装质量基准与未通电外观来源及买方实际标准 |
| How long or cycle | 真实厂家放行接收存放发运买方验收及未完成库存资源群组，无消费者使用寿命或固定仓储时长 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成的原厂装箱未通电LED背光液晶电视自营批发批次 |
| reference_flow_property | 01846770-4cfe-4a25-8ad9-919d8d378345 |
| reference_unit_group | 5beb6eed-33a9-47b8-9ede-1dfe8f679159 |
| reference_unit | Item(s) |
| required_qualifiers | manufacturer_id; model; product_sku; region_configuration; serial_ids; factory_release_gate; boxed_unpowered_state; kit_component_scope; stand_inclusion_state; remote_inclusion_state; battery_inclusion_state; tv_piece_count; whole_merchandise_mass; mass_basis; inherited_pack_tare; condition_record; buyer_gate; merchant_id; reporting_period |


## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| commercial_count | accepted_service | Count | Item(s) | N计最终唯一买方验收商业批次，不是电视台附件纸箱托盘发票或利润。 |
| complete_kit_mass | 商品审计 | Mass; Count | kg; Item(s) | 实际装箱总量减继承包装支撑皮重得到完整商品；保留机身含不含底座基准及实际单包附件。面板机身套件视图不叠加，每个实际随机件一次。 |
| actual_native_units | 新供给出口 | native property | native unit | 需真实单位定义单件质量或实测量、密度单位温度单位基准来源及换算因子单位来源。整流单位不能暗作组分单位。 |
| package_asset_equivalent | 供方资产 | Count | Item(s) | 匹配真实完整实体包或全资产等价原生单位资源范围，其他单位适当展开。 |
| freight_native | freight | mass*distance | kg*km | 实际整载运输kg乘km及互斥份额，无底座机身裸板质量不默认载荷。 |
| species_native | direct_species | Mass | kg | 真实物种介质粒径及实测或匹配因子组成去向原生换算，独立于设备组成损坏。 |


## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 厂家真实完整组装测试装箱LCD/LED背光电视，型号序列区域随机套件包装可追溯，商户路线未通电 |
| starting_condition_role | 完整电视厂家放行后实体自营常温批发增量 |
| product_classification_scope | 广播电视批发较窄子集，实际完整电视商品系统另关联 |
| recursive_input_rule | 服务内不造面板电子底座遥控电池，不递归耗用交易电视作服务供给。商品库存源需求为非交换审计，实际公用供给外包另定范围。 |
| upstream_dataset_requirement | 独立厂家放行商品系统包含真实面板背光电子外壳、实际底座遥控电池适配电缆、组装厂家测试继承包装一次。仅LCD板PCB不完整；服务外补齐真实缺阶段及相容归属需求损失责任覆盖。 |
| disclosure | 真实厂家型号序列SKU区域套件底座遥控电池存在状态质量基准皮重；来源商户买方期间；源门槛归属量状态单位来源分配换算互斥出口损失责任既有覆盖；全部直接供方资产承运接收范围 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| complete_factory_gate | 全部商品 | 完整电视配置继承包装制造及损失上游在服务外，厂家测试归其中，无面板独占基线或服务单耗电池。 |  |
| model_specific_handling | 接收验收装箱商品 | 以真实型号说明和包装状态记录控制搬运验收。Sony指南仅特定LCD/LED型号、含不含底座和面板箱运输背景，不是通用质量尺寸人数或激活安装指令。 | sony-lcd-tv-model-handling |
| no_consumer_power | 全部路线 | 无电视演示激活运行待机软件修拆挂装安装换箱或未审专用温控，含外包实际操作。消费者年耗额定待机电不是仓库电。 |  |
| periods_stock_attempts | 真实商品事件 | 记录序列型号套件源、库存退回留存拒收丢弃及事件期间实际未通电买方验收。不明缺件件数质量和碎屏不等于丢弃泄漏物种，需调查。失败未完成资源仍归属，N仅最终唯一验收。 |  |
| physical_ownership | 资源出口 | 直接供方承运完整资产接收处理负担实际一次，无金融替代自动零件回收信用。整机已分离件独立事故物包装混合卫生液体物种状态互斥。 |  |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ambient_wholesale` | 装箱未通电电视商户接收存放与交接 | required | 完整厂家装箱未通电LCD/LED电视配置商户拥有，经常温搬运至实际商业验收 | 唯一实体商业服务承担型号序列套件包装状态期间责任，无激活加工保鲜节点 | `accepted_service` |

唯一真实节点承担接收文档外观检查库存搬运及真实仓库表面卫生事故搬运。电视继承套件包装台账为非交换商品审计。各条件性产品外包资产废物物种据真实记录展开，不创设常规拆机或假想化学溢漏。

### 过程：装箱未通电电视商户接收存放与交接 (`ambient_wholesale`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：每参考流实际归属购入仓库电量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需源表期间充电设备范围及全使用者因果驱动，含待机未完成；不采用电视额定瓦数年耗标签或默认设备运行时数。

###### 实际液态处理自来水供给 (`cleaning_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：每参考流实际归属购入清洁水量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需真实表事件供水处理及归属期间，无每电视洗水比或购水等于排口。

###### 实际独立记录的合成洗涤剂投入 (`hygiene_supplies_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属新卫生围控产品质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需真实产品配方原生库存使用未用退回组成去向证据；无标准清理包电池化学种类清洁配方剂量或释放比。

###### 用于新增运输保护的纸板箱 (`added_packing_paperboard_carton`)

仅覆盖本过程有独立实际证据的“用于新增运输保护的纸板箱”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`added_packing`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 仅在新增包装确认为纸板箱时使用，记录结构、纸板箱净质量及供应门。塑料筐、木箱或身份实质不同的复合箱需另设流卡；排除继承包装和周转资产。不预设纤维等级、再生成分比例或每箱质量。

- 选定流：用于新增运输保护的纸板箱
- 流属性/单位：Mass / kg
- 数量规则：`added_packing_paperboard_carton`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_supplies`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的原厂装箱未通电LED背光液晶电视自营批发批次 (`accepted_service`)

一项原厂装箱未通电LCD配LED背光电视的真实唯一商业买方验收服务。真实型号序列区域SKU配置附件完整性、实际包含的底座遥控电池、商品包装量未通电状态来源门槛期间买方标准限定服务。参考不是电视件裸面板发票利润。验收为声明真实未通电商业门槛，不编功能测试。

- 选定流：已完成的原厂装箱未通电LED背光液晶电视自营批发批次
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_tv`

数量范围证据需求：需实际厂家配置放行、箱序列买方验收证据，不固定型号屏幕尺寸批台数随机电池存在或数量容差。

###### 退回供应方的未使用合成洗涤剂 (`unused_mass_returns_detergent_return`)

仅覆盖本过程有独立实际证据的“退回供应方的未使用合成洗涤剂”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`unused_mass_returns`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 将未使用材料的配方、供应状态和原生质量严格匹配到投入`hygiene_supplies_synthetic_detergent`。本卡为可用对外退料，不是废物、期末库存或内部循环。仅在总量供应口径下列此输出；投入已扣除该退料时必须省略对应退料输出，不自动抵扣避免生产。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：`unused_mass_returns_detergent_return`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_supplies`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

##### 废物流

###### 废弃完整盒装液晶电视套件 (`whole_tv_waste_atomic_case`)

仅在实际独立记录确认“废弃完整盒装液晶电视套件”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`whole_tv_waste`中的身份核实事项；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃完整盒装液晶电视套件
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属丢弃整机流质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_tv`

数量范围证据需求：需真实序列型号处置整流质量及组分包覆盖接收处理，无自动整机填埋回收率或材料释放因子。

###### 实际单独收集的纸类包装废物 (`packaging_waste_paper_pack`)

仅适用于本节点实际独立废弃、单独收集的纸类包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属分离包装废物质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需真实纸箱缓冲膜组分净量状态接收，无默认泡棉纸板比每箱到货丢弃或再生替代。


###### 实际单独收集的金属包装废物 (`packaging_waste_metal_pack`)

仅适用于本节点实际独立废弃、单独收集的金属包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：金属包装废物 `cdda6013-c0c5-4c72-990a-f5668fe71069`
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属分离包装废物质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需真实纸箱缓冲膜组分净量状态接收，无默认泡棉纸板比每箱到货丢弃或再生替代。


###### 实际单独收集的塑料包装废物 (`packaging_waste_plastic_pack`)

仅适用于实际独立废弃、单独收集的空塑料包装，保留实际组成、含水状态及接收方。含残留商品的混合包装、污染混合流、设备内保温泡沫、一次性抹布及复合包装不使用本分支；整体混合流中的组分仅作不可相加审计，运输处理责任计入一次。不预设排空、回收、发生或数量。

- 选定流：塑料包装废物 `919351c4-3e25-4092-9934-73ecec021a3b`
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属分离包装废物质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需真实纸箱缓冲膜组分净量状态接收，无默认泡棉纸板比每箱到货丢弃或再生替代。

###### 废弃场所清洁擦拭物，保留实际污染物 (`hygiene_waste_spent_wipe`)

仅覆盖本过程有独立实际证据的“废弃场所清洁擦拭物，保留实际污染物”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`hygiene_waste`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 仅在实际独立收集并转移至废物接收方时启用，不得用于仍保留在整件、包装或收集混合物中的组分。保留组成只作不可相加记录。不预设开包、切割、拆解、主动干燥、回收率或处理路线，处理及运输责任只归属一次。 按接收状态确定实际擦拭物基材及保留污染物。滤芯、散装吸附材料或独立收集液体不是本擦拭物流。废弃整体质量含保留污染物一次，干擦拭物供应质量只作组分审计。

- 选定流：废弃场所清洁擦拭物，保留实际污染物
- 流属性/单位：Mass / kg
- 数量规则：`hygiene_waste_spent_wipe`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_outlets`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

###### 收集并送处理的场所清洁水性废水 (`wastewater_aqueous_cleaning`)

仅覆盖本过程有独立实际证据的“收集并送处理的场所清洁水性废水”。记录自身物态、净量 m3、事件来源及交接门。其他状态或接收方需在`wastewater`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 仅在实际独立收集并转移至废物接收方时启用，不得用于仍保留在整件、包装或收集混合物中的组分。保留组成只作不可相加记录。不预设开包、切割、拆解、主动干燥、回收率或处理路线，处理及运输责任只归属一次。 本卡为场所清洁水性废水，保留实际溶解或悬浮负荷及实测接收体积。排除独立收集的未稀释商品、非水液体、冷凝水或生活污水；若转移前实际混合，另定该真实混合物身份，不得叠加组分体积或称其为纯清洁水。不从供水量推算本数量。

- 选定流：收集并送处理的场所清洁水性废水
- 流属性/单位：Volume / m3
- 数量规则：`wastewater_aqueous_cleaning`实际独占归属的 m3 / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据要求：需事件关联的原生 m3、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_outlets`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

##### 基本流

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| original_gate_assignment | 电视商品 | 以相容状态原生单位来源分配换算将真实完整厂家装箱配置投入归属验收群组。底座附件电池实际包含按原套件记录，不编服务供给。退回期末其他出口互斥；实际不可回收整机组分损失须相容原门槛数量状态单位基准来源责任既有覆盖在服务外调整一次。最终发运加废物或库存余差本身不确定源需求损失，不明状态待解非零。 |  |
| all_consumer_resources | 真实服务期间 | 采用真实全使用者源期间搬运空间时间等有据因果驱动，附原生单位来源理由，含待机卫生失败未完成。不默认电视台数或均分批次，未完成不造N。 |  |
| new_supply_returns | 服务新供给 | S=opening_supply+net_receipts-closing_supply。总输入S/N加单独实际匹配原生未用外退输出，或仅耗用(S-usable_outward_return)/N并省该退回交换、不另抵扣。须同范围独立供给配对，留存回收计期末。继承套件电池资产组分不能抵扣无关当期供给。 |  |
| full_asset_life | shared_assets | asset_equivalent=(job_driver/life_driver)/N，匹配完整资产全部使用者期间；含制造维护真实替换退役末端、观测历史有据剩余、不确定性敏感性更新。直接供方承运当期重叠仅在同负担已由他处唯一归属后移除，不每轮新托盘或重复租金服务资产。 |  |
| actual_outlet_views | 真实转移去向 | 可用商业退回留存拒收套件为商品，不是负服务。整机流包含真实转移组分包装一次；已分离零件电池事故物包装混合卫生液体须真实数量接收分类范围。不重复整机组分，不自动化学释放回收替代收益，真实处理一次。 |  |

公开含底座与不含底座质量只有实际型号配置状态及测量方法一致时才可比较。不从不同指南数字相减推底座或全部随机附件质量；保留真实来源方法不确定性及配置归属。


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_tv` | ambient_wholesale | 参考及非交换装箱电视配置库存 | tv_configuration_acceptance_record | site_id; merchant_id; warehouse_id; manufacturer_id; cohort_id; consignment_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; ownership_resale_record; model; product_sku; region_configuration; serial_ids; source_lot_id; factory_release_gate; factory_release_date_time; lcd_led_identity_source; boxed_unpowered_state; kit_component_scope; component_id; component_quantity; component_quantity_unit; component_quantity_source; component_mass; component_mass_unit; component_mass_basis; component_mass_method; component_mass_source; stand_inclusion_state; body_mass_basis; body_mass_state; body_mass_method; tv_body_mass; body_mass_unit; body_mass_source; remote_inclusion_state; battery_inclusion_state; battery_identity_source; adapter_cable_inclusion; supplier_configuration_record; actual_model_instructions; buyer_criteria; pack_integrity; external_condition; panel_condition_source; shock_moisture_observation; observation_method; receipt_date_time; hold_start; hold_end; duration; duration_unit; dispatch_date_time; buyer_acceptance_date_time; actual_storage_conditions; temperature; temperature_unit; humidity; humidity_unit; tv_piece_count; piece_unit; carton_count; boxed_gross_mass; gross_mass_unit; primary_pack_tare; accessory_pack_tare; inherited_outer_tare; transported_support_tare; tare_unit; whole_merchandise_mass; mass_unit; mass_basis; mass_source; opening_quantity; receipts; dispatch_quantity; supplier_return; buyer_return; closing_quantity; recovered_closing; stock_unit; stock_state; internal_transfer_id; retained_reject_quantity; actual_discard_quantity; discard_count_unit; actual_discard_stream_mass; discard_mass_unit; transferred_component_scope; transferred_pack_inclusion; detached_component_transfer_id; actual_loss_fate; unknown_count_difference; unknown_mass_difference; discrepancy_investigation; receiver; transfer_id; unfinished_consignment_ids; unfinished_resource_attribution; carried_resource_link; commodity_dataset_id; original_commodity_gate; original_gate_state; source_gate_input_quantity; source_gate_input_unit; source_gate_quantity_source; assigned_source_gate_quantity; assigned_source_gate_unit; assigned_source_gate_state; source_gate_allocation_basis; source_gate_allocation_source; source_gate_conversion; source_gate_conversion_unit; source_gate_conversion_source; exclusive_other_exit_coverage; loss_adjustment_id; loss_adjustment_quantity; loss_adjustment_unit; loss_adjustment_basis; loss_adjustment_source; loss_owner; already_included_loss_coverage; commodity_overlap_check; buyer_signature; calibration; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 关联真实厂家完整测试装箱放行与型号序列区域SKU、实际底座遥控电池适配线配置及商户未通电状态。用非侵入或可追溯代表性厂家配置质量记录，不强制开箱通电；实际机身含不含底座与组分整套范围防重复。追踪真实外观库存可用退回留存拒收及转移，不由损坏推功能失效漏液。完整原门槛需求及相容损失以来源换算唯一责任既有覆盖在服务外一次。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | Item(s); 真实电视组分件数及商品kg原生单位 | 每次真实接收文档状态移动拒收验收盘点 | 厂家放行至买方门槛、前后库存失败未完成群组 | 一个实际未通电商户责任及独立厂家买方接口 | per reference flow | 真实型号序列配置来源质量皮重买方记录及校准状态处置调查 |
| `cp_supplies` | ambient_wholesale | 真实卫生外包供给及未用退回 | new_supply_stock_record | site_id; cohort_id; event_id; period_id; supply_id; product_sku; product_state; native_property; native_unit; unit_definition; opening_supply; gross_receipts; receipt_tare; net_receipts; closing_supply; recovered_closing; actual_use; usable_outward_return; outward_return_id; return_receiver; supply_return_pair_id; same_scope_supply_match; selected_supply_view; per_piece_mass; per_piece_mass_unit; per_piece_mass_source; density; density_unit; density_temperature; density_temperature_unit; density_source; conversion; conversion_unit; conversion_source; composition; composition_basis; composition_source; actual_fate; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 采集真实具名独立服务SKU单位库存使用期末与匹配未用外退。卫生新增外包不同于继承完整电视附件电池包装。总供给加输出或仅耗用省输出选一路，真实原生换算来源。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg; Item(s); 实际原生单位换算 | 每次真实接收使用退回库存事件 | 全部供给使用退回期间含未完成 | 具名直接服务供给范围排除外包已含资源 | per reference flow | 真实单位SKU净库存配对校准及质量密度换算组成来源 |
| `cp_utilities` | ambient_wholesale | 源表全使用者归属 | utility_period_driver_record | site_id; cohort_id; period_id; meter_id; utility_source; provider; meter_unit; opening_reading; closing_reading; import_quantity; export_quantity; direct_submeter_quantity; conversion; conversion_unit; conversion_source; all_consumers; all_periods; consumer_driver; total_driver; driver_unit; driver_basis; driver_source; allocation_rationale; handling_events; occupied_space; space_unit; start_time; end_time; duration; duration_unit; idle_quantity; hygiene_event_id; equipment_charging_scope; actual_water_source; recirculation; actual_makeup; provider_overlap; calibration; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 用真实进出口源期间或匹配直接分表及互斥范围，依据全使用者搬运空间时间等因果驱动，含待机卫生失败未完成。不使电视通电，不用消费者耗电标签或未审专用温控负荷。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kWh; m3; 实际表驱动单位 | 每个真实匹配源使用者事件期间 | 全部服务源期间使用者待机卫生未完成 | 真实直接公用供水处理边界排除外包重叠 | per reference flow | 源表校准真实方向期间和完整因果驱动 |
| `cp_provider` | ambient_wholesale | 实际实体仓库外包 | physical_package_record | provider_id; package_id; native_quantity; native_unit; package_definition; equivalent_conversion; conversion_unit; conversion_source; site_id; cohort_id; event_id; period_id; actual_start; actual_end; duration; duration_unit; included_energy; included_materials; included_assets; included_transport; included_treatment; excluded_resources; direct_overlap; other_provider_overlap; actual_completion; uncertainty | 取得真实已完成实体包原生换算和全资源范围。直接外包承运资产接收责任互斥，电视激活测试维修拆解换箱安装属于真实另审范围，不藏于包内。 | Item(s)等价或真实适当展开原生单位 | 每个真实已完成服务包 | 真实服务包源运营处理期间 | 具名实体仓库外包及明确排除 | per reference flow | 真实完成原生等价资源范围重叠矩阵 |
| `cp_assets` | ambient_wholesale | 完整仓库循环搬运寿命 | asset_lifetime_driver_record | asset_id; asset_type; asset_identity; asset_equivalent_unit; dataset_scope; manufacture_coverage; maintenance_coverage; replacements; replacement_unit; retirement; end_of_life; history_start; history_end; observed_driver; observed_driver_unit; remaining_driver; remaining_driver_unit; remainder_source; life_driver; life_driver_unit; job_driver; job_driver_unit; all_consumers; all_periods; driver_basis; driver_source; reuse_cycles; actual_turns; uncertainty; sensitivity; update_trigger; direct_event_scope; provider_asset_coverage; carrier_asset_coverage; overlap_owner; conversion; conversion_unit; conversion_source | 识别真实仓库货架搬运循环载具衡器监测，匹配完整制造维护真实替换退役末端。全使用者观测历史及有据剩余驱动，原生单位不确定性更新直接供方承运范围一次，不每轮新资产或重复租金。 | Item(s)等价; 实际相容全寿命作业驱动单位 | 每个真实资产期间维护替换退役复核 | 完整制造末端全部使用者期间历史有据剩余 | 完整实际资产唯一责任及明确重叠 | per reference flow | 真实寿命范围历史剩余来源相容单位不确定性敏感性 |
| `cp_freight` | ambient_wholesale | 真实完整装箱配置载荷 | shipment_work_record | shipment_id; carrier_id; mode; supplier_gate; destination_gate; cohort_id; consignment_id; period_id; actual_start; actual_end; whole_merchandise_payload_mass; included_kit_scope; primary_pack_mass; inherited_outer_mass; added_pack_mass; transported_support_mass; mass_unit; mass_source; whole_payload_mass; route_distance; distance_unit; distance_source; load_share; share_basis; share_source; multi_drop_coverage; empty_leg_coverage; return_coverage; native_work_unit; work_conversion; work_conversion_unit; conversion_source; carrier_energy_scope; carrier_asset_scope; direct_overlap; uncertainty | 采集实际完整配置商品加互斥继承新增包装支撑、真实路线距离及互斥份额空返多点退回。核机身底座附件面板范围、原生换算和承运内含资源一次。 | kg*km; 真实载荷距离原生工作量单位 | 每次真实运输及实际退回段 | 约定真实门槛及匹配空返退回期间 | 具名承运工作资源范围及排除 | per reference flow | 真实配置载荷路线份额来源原生换算 |
| `cp_outlets` | ambient_wholesale | 真实零件事故物包装卫生液体接收 | outlet_receiver_record | site_id; cohort_id; event_id; period_id; stream_id; parent_serial_id; component_id; separation_origin; material_identity; stream_state; classification; gross_quantity; tare_quantity; net_quantity; quantity_unit; quantity_source; whole_unit_exclusion; transferred_pack_exclusion; separate_part_exclusion; incident_material_exclusion; composition; composition_basis; composition_source; retained_component_quantity; retained_component_unit; retained_component_basis; retained_component_source; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_source; density; density_unit; density_temperature; density_temperature_unit; density_source; volume; volume_unit; conversion; conversion_unit; conversion_source; pollutant_load; pollutant_unit; load_source; collection_method; receiver; transfer_id; receiver_acceptance; treatment_route; treatment_scope; provider_coverage; direct_release_exclusion; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 按原生流状态、母序列转移ID测量真实已分离零件、独立围控事故物包装已用混合卫生或清洁液。不规定拆解，实际分离来源有据。整机组分包装保留液体分析非叠加且排除重复。接收分类验收处理一次，组成负荷独立于损坏观察。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg; m3; 实际原生组分流单位 | 每次真实事故收集转移接收验收 | 实际事故卫生接收期间，留存库存另记 | 真实围控接收接口排除直接物种释放 | per reference flow | 真实净量组分流体基准来源密度组成负荷接收范围 |
| `cp_environment` | ambient_wholesale | 真实直接释放物种介质 | direct_species_record | site_id; cohort_id; event_id; period_id; substance_identity; particle_size; receiving_medium; release_state; measured_mass; measured_mass_unit; measurement_source; activity; activity_unit; activity_source; species_factor; factor_unit; factor_source; factor_scope; factor_complete; measured_whole_stream_release; whole_stream_unit; whole_stream_source; composition; composition_basis; composition_source; fate; fate_basis; fate_source; temperature; temperature_unit; pressure; pressure_unit; density; density_unit; density_source; conversion; conversion_unit; conversion_source; retained_captured_quantity; retained_captured_unit; receiver_treatment_coverage; applicability; calibration; uncertainty | 先确定真实物种粒径介质，选实测物种质量、适用活动因子或实测整流组成去向，并具原生来源换算。完整因子不再乘组成去向。随机组分库存损坏围控接收流不证明释放。 | kg物种; 真实原生活动整流浓度单位 | 每次真实释放或有据匹配监测期间 | 实际直接释放期间证据适用性，无库存余差代理 | 具名实际直接环境接口排除围控处理 | per reference flow | 校准实测或匹配因子组成去向来源原生换算证据 |

### 计算规则

| rule_id | Applies to | Rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_consignment | accepted_service | N为reference_gate_id上最终唯一accepted_consignment_ids数量；accepted_service=1 Item(s)。 | cp_tv | 一项具真实未通电配置套件门槛限定的完整商业服务 |  |
| configured_mass_audit | 非交换电视套件 | whole_merchandise_mass=boxed_gross_mass-primary_pack_tare-accessory_pack_tare-inherited_outer_tare-transported_support_tare，实际匹配边界。核对真实随机组分一次；tv_body_mass含不含底座、裸板、遥控电池适配视图不重复加于整套。保留每量真实来源原生单位校准，不默认指南质量。 | cp_tv | 真实配置件数整商品皮重审计，不新制造 |  |
| finished_gate_demand | 非交换原商品 | assigned_source_gate_quantity为真实相容有据source_gate_input_quantity向验收群组分配换算，排除互斥归属退回期末其他出口。commodity_source_gate_demand=assigned_source_gate_quantity/N在服务外。实际不可回收整机零件loss_adjustment_quantity/unit/basis/source/owner及already_included_loss_coverage核对一次，不由库存余差或缺件默认损失。 | cp_tv; N | 独立完整厂家配置需求及实际相容损失上游一次 |  |
| new_supply_stock | 服务新供给未用退回 | S=opening_supply+net_receipts-closing_supply；net_receipts=gross_receipts-receipt_tare。总输入S/N并单独配对输出usable_outward_return/N，或仅耗用(S-usable_outward_return)/N且省去该退回交换。留存回收计期末，须原同范围原生换算来源。 | cp_supplies; N | 每参考流实际供给及唯一未用退回约定 |  |
| meter_attribution | electricity; cleaning_water; electricity_ac; cleaning_water_liquid_tap | actual_meter_quantity=closing_reading-opening_reading按实际进出口方向，或匹配direct_submeter_quantity；attributable_quantity=(actual_meter_quantity*consumer_driver/total_driver)/N，对应互斥全使用者期间，含待机卫生未完成资源。 | cp_utilities; N | 每参考流实际仓库购入公用资源 |  |
| physical_provider | provider_packages | provider_quantity=native_quantity*equivalent_conversion/N，仅有据匹配实体完成包且全资源责任一次时成立。 | cp_provider; N | 每参考流真实已完成等价服务包 |  |
| asset_equivalent | shared_assets | asset_equivalent=(job_driver/life_driver)/N；life_driver=observed_driver+remaining_driver，原生单位相容、全部使用者全寿命观测历史剩余有据且真实替换末端完整；单视图不重复归一化。 | cp_assets; N | 每参考流真实完整资产等价份额 |  |
| whole_load_freight | freight | whole_payload_mass=whole_merchandise_payload_mass+primary_pack_mass+inherited_outer_mass+added_pack_mass+transported_support_mass，真实组分互斥；freight_work=whole_payload_mass*route_distance*load_share/N，先真实原生换算和退回空返互斥覆盖。 | cp_freight; N | 每参考流真实配置整载荷运输工作量 |  |
| contained_outlets | 真实废物出口 | whole_tv_waste=actual_discard_stream_mass/N，真实整机套件组分包装转移范围。各其他outlet_quantity=(gross_quantity-tare_quantity)/N采用真实原生流单位，或实测体积/N并有据密度温度换算。整机零件事故物包装混合清理液体互斥，留存内部移动不是外送，处理一次。 | cp_tv; cp_outlets; N | 每参考流真实互斥围控流接收范围 |  |
| species_mass | direct_species | species_mass=measured_mass/N OR activity*species_factor/N OR measured_whole_stream_release*composition*fate/N，先匹配有据原生换算并选一路。factor_complete禁止再乘组成去向，整流物种不重复实体输出。 | cp_environment; N | 每参考流真实直接物种质量接收介质 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| configured_unpowered_gate | 接收验收电视套件 | 真实LCD/LED型号序列区域原厂包装随机配置、商户未通电记录买方标准。底座遥控电池不假定，验收不编通电功能测试。 | cp_tv厂家型号配置来源买方记录 |
| mass_stock_fates | 商品实际出口 | 机身底座面板附件套件包装原生质量视图相容非叠加。完整厂家源需求互斥出口及实际损失责任状态单位来源既有覆盖在服务外一次；损坏缺货不自动丢弃漏液物种。 | 真实配置库存处置及定量独立商品关联 |
| complete_physical_scope | 全部资源期间 | 真实全使用者源原生驱动、完整外包全寿命资产历史剩余替换末端不确定性、直接承运接收范围含卫生失败未完成一次。 | 源表供给驱动外包资产承运处理证据 |
| concrete_identity_ranges | 真实展开交换 | 最终数据前验证实际SKU外包资产组分废物物种原生属性单位；经验范围须可比来源，不用指南型号数值默认。 | 真实详情支持接收及数量范围适用证据 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | ambient_wholesale | 电表记录对应哪个供电点、交直流状态、电压和供应方数据集？核对已列交流电卡与其他有证据的供电，不得将交流电 UUID 用于其他能源。 真实电动物流充电、照明记录及表面清洁普通通风用于装箱未通电商品。电视运行待机演示激活更新电力不属本路线，厂家测试在上游。不假现场燃烧或专用温控。 数量范围证据需求：需源表期间充电设备范围及全使用者因果驱动，含待机未完成；不采用电视额定瓦数年耗标签或默认设备运行时数。 计量证据：协议`cp_utilities`；原记录口径 Energy / kWh。原数量约束“每参考流实际归属购入仓库电量”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`electricity_ac`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_utilities`; 实际来源关联原生记录 |
| cleaning_water | ambient_wholesale | 供应记录是否证明为处理自来水，还是其他明确水质或水源？核实供水状态及交接门，不得用自来水卡替代其他水。 实际外部地面设备供水，不洗电视遥控器电池或推泄漏。真实来源处理循环补水接收范围独立有据，不重复外包内含公用水。 数量范围证据需求：需真实表事件供水处理及归属期间，无每电视洗水比或购水等于排口。 计量证据：协议`cp_utilities`；原记录口径 Volume / m3。原数量约束“每参考流实际归属购入清洁水量”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`cleaning_water_liquid_tap`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_utilities`; 实际来源关联原生记录 |
| hygiene_supplies | ambient_wholesale | 取得下述清洁或维护职责实际采购品号、配方或安全数据表、供应浓度、物态、用途及库存领用记录。逐项核实洗涤剂以外的实际材料；不得由本 PCR 预设药剂、滤材或剂量。 实际具名表面制剂、擦拭吸附物等服务产品，按SKU状态原生单位。仅真实事故耗用，不规定套装或开机清洁。厂家遥控电池底座电源适配电缆继承保护包装为商品组成，不是服务耗用供给。 数量范围证据需求：需真实产品配方原生库存使用未用退回组成去向证据；无标准清理包电池化学种类清洁配方剂量或释放比。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“每参考流实际归属新卫生围控产品质量”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`hygiene_supplies_synthetic_detergent`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| added_packing | ambient_wholesale | 取得包装物料单或规格、材料或复合层身份及新增与继承包装的责任。按该记录逐项确定尚缺的套袋、封口、标签、捆扎带或支撑件身份；一体复合包装不得拆成可相加的材料交换。 实际商户新增运输箱捆带支撑，定义材料单位和需换算时实测单件质量。厂家纸箱缓冲膜内衬附件盒为继承套件审计，不因转售新供给。不常规开主包换箱，循环托盘箱为全寿命资产。 数量范围证据需求：需实际外加单位材料库存退回单件质量来源，无通用纸箱泡棉量、每机新主箱或自动原厂换箱程序。 计量证据：协议`cp_supplies`；原记录口径 Count / Item(s)。原数量约束“每参考流实际归属新增运输包装件数”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`added_packing_paperboard_carton`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| provider_packages | ambient_wholesale | 取得本记录中明列各职责的供应商合同或完成结果记录、原生计量物理单位及包含资源。确定各项服务结果身份；检验、清洁、装卸为不同服务，价格或小时不得改称件数。 实际供方定义完整外包文档包装核验、仓库卫生事故搬运维护服务，原生完成单位资源匹配。费用利润不作无资源任务代理。外包激活测试软件维修拆解安装换箱仍实际改变路线，须审。 数量范围证据需求：需真实外包单位换算完成事件及能源材料资产运输处理覆盖排除；无默认技术人员数时长或价格等价。 计量证据：协议`cp_provider`；原记录口径 Count / Item(s)。原数量约束“每参考流实际归属已完成实体服务包等价量”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_provider`; 实际来源关联原生记录 |
| shared_assets | ambient_wholesale | 对本记录中明列的每种资产取得资产编号、配置及匹配的完整生命周期数据集。待补的是各资产或服务身份及全寿命全部使用者分母；仓库、叉车、托盘不能共用一条计数交换，也不能套用默认寿命。 真实仓库货架电动搬运循环托盘箱衡器监测设备，完整资产等价及唯一寿命责任。含制造维护真实更换退役末端全部使用者期间，不每轮造托盘或重复租金资产。 数量范围证据需求：需真实身份全使用者作业寿命驱动原生单位、观测历史有据剩余及不确定性敏感性更新，无标准仓库寿命支撑轮数。 计量证据：协议`cp_assets`；原记录口径 Count / Item(s)。原数量约束“每参考流实际归属完整资产等价份额”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_assets`; 实际来源关联原生记录 |
| freight | ambient_wholesale | 对实际入库、出库、退运及废物运输段取得运输方式或车辆、温控服务、起终点、实际载荷和距离及供应方覆盖。方式或配置未明确前不能选择运输流；不同运输方式不得合成一条 kg*km 流。 实际约定接收发运退回运输用完整厂家配置商品及继承新增包运输支撑。裸LCD板、无底座机身或组分材料量不自动是载荷。承运能源车辆资产空返多点退回范围唯一责任。 数量范围证据需求：需真实配置载荷组成路线距离原生换算互斥份额，无指南机重默认尺寸装载或标准空返因子。 计量证据：协议`cp_freight`；原记录口径 mass*distance / kg*km。原数量约束“每参考流实际归属整载荷运输工作量”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_freight`; 实际来源关联原生记录 |
| unused_count_returns | ambient_wholesale | 将对外退料凭据匹配到唯一投入品号、状态、原生单位及接收方。采用净消耗投入时省略对应退料交换；商品退货及期末库存另作审计记录。 真实未用Count包装外退匹配同范围原供给库存单位及接收验收，留存内部移动为库存。选总输入加独立匹配退回输出，或仅耗用省该退回交换，不重复扣减。 数量范围证据需求：需真实原配对数量单位接收及所选库存约定，无退回比例厂家套件组分信用或替代包装收益。 计量证据：协议`cp_supplies`；原记录口径 Count / Item(s)。原数量约束“每参考流实际归属未用包装外退件数”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| unused_mass_returns | ambient_wholesale | 将对外退料凭据匹配到唯一投入品号、状态、原生单位及接收方。采用净消耗投入时省略对应退料交换；商品退货及期末库存另作审计记录。 真实未用质量计直接服务产品外退，原独立投入范围和精确状态净量匹配。商业电视附件退回为商品，不是负服务供给，已用污染物为废物。 数量范围证据需求：需实际产品状态原供给配对实测净外送量接收方，不抵扣无关投入或厂家随机电池附件。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“每参考流实际归属未用服务供给外退质量”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`unused_mass_returns_detergent_return`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| whole_tv_waste | ambient_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 仅接收方实际验收丢弃的电视整套整机，记录序列配置及一起转移底座附件包装范围。碎屏观察拒收退回本身不等于丢弃化学释放。同一内含零件电池包装不再在另一卡转移。上游商品损失在服务外，实际搬运接收处理一次。 数量范围证据需求：需真实序列型号处置整流质量及组分包覆盖接收处理，无自动整机填埋回收率或材料释放因子。 计量证据：协议`cp_tv`；原记录口径 Mass / kg。原数量约束“每参考流实际归属丢弃整机流质量”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`whole_tv_waste_atomic_case`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_tv`; 实际来源关联原生记录 |
| detached_parts_waste | ambient_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 仅真实事故或收到分离状态的物理独立零件附件电池至具名接收方。不规定常规拆解拆电池维修。整机套件覆盖和实际分离件数质量状态分类防重复；化学材料依记录，不假LCD或遥控成分。 数量范围证据需求：需真实零件母序列、分离来源数量状态组成接收及整机排除，无标准面板比例电池化学种类或回收替代信用。 计量证据：协议`cp_outlets`；原记录口径 Mass / kg。原数量约束“每参考流实际归属已分离零件废物质量”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_outlets`; 实际来源关联原生记录 |
| incident_material_waste | ambient_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 仅真实事故单独收集的液体粉末碎屑，按物理状态组成源组分接收方识别。损坏本身不能确定液晶料、电解液或空气污染物是否泄漏释放及其数量；须有真实事故证据，不默认释放或零释放。不提供拆机响应配方。与已计整零件吸附物普通清洁废水直接物种分开。 数量范围证据需求：需真实释放收集量、组分来源状态组成基准及转移证据，无破裂等于漏液默认液体含量或纯物假定。 计量证据：协议`cp_outlets`；原记录口径 Mass / kg。原数量约束“每参考流实际归属独立围控事故物废物质量”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_outlets`; 实际来源关联原生记录 |
| packaging_waste | ambient_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 真实已分离外层或损坏继承包装，具有材料状态剩余商品接收证据。不假普通开箱换箱或新主包制造。排除已随整机废物或混合卫生流转移包装。 数量范围证据需求：需真实纸箱缓冲膜组分净量状态接收，无默认泡棉纸板比每箱到货丢弃或再生替代。 计量证据：协议`cp_outlets`；原记录口径 Mass / kg。原数量约束“每参考流实际归属分离包装废物质量”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`packaging_waste_paper_pack`; `packaging_waste_metal_pack`; `packaging_waste_plastic_pack`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_outlets`; 实际来源关联原生记录 |
| hygiene_waste | ambient_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 真实已用擦拭吸附物混合清理固体，存在时实测留存液体颗粒制剂状态。清洁供给组分分析不叠加。排除分开零件事故液包装整套电视，捕集物不自动是直接排放。 数量范围证据需求：需实测净流组分原生数量单位基准来源及保留液体证据，无供给吸附物等于废重、吸收比或默认化学泄漏。 计量证据：协议`cp_outlets`；原记录口径 Mass / kg。原数量约束“每参考流实际归属混合卫生围控固体质量”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`hygiene_waste_spent_wipe`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_outlets`; 实际来源关联原生记录 |
| wastewater | ambient_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 真实收集表面清洁液，以实测体积或相容净质量密度温度换算、真实混合负荷及接收处理。无电视遥控电池冲洗或推电子液直接排放。非水事故液与耗材保留液体分状态。 数量范围证据需求：需真实收集接收原生体积或质量密度基准及负荷处理，无供水等于排水、电子泄漏比例或默认污染负荷。 计量证据：协议`cp_outlets`；原记录口径 Volume / m3。原数量约束“每参考流实际归属已收集表面清洁废水体积”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`wastewater_aqueous_cleaning`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_outlets`; 实际来源关联原生记录 |
| direct_species | ambient_wholesale | 按排放或采样记录确定各实测排放的来源事件、化学物或粒径身份、来源属性及接收介质。物种、粒径或介质不明须保留具体证据缺口；化学品总用量或库存损失不能提供这些身份。 仅真实物种接收介质及适用粒径身份，以实测或匹配活动因子、实测整流组成去向支持。屏裂随机电池化学整机质量气味或已捕集围控事故物不证明化学金属颗粒直接释放。 数量范围证据需求：需真实身份介质粒径原生数量及因子组成去向换算适用性，无面板LED背光默认化学物、电池库存损失等于排放或SDS等于释放。 计量证据：协议`cp_environment`；原记录口径 Mass / kg。原数量约束“每参考流实际归属直接释放物种质量”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_environment`; 实际来源关联原生记录 |


## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| reference_gate_check | accepted_service | N>0唯一真实最终未通电商业验收批次，真实型号序列套件底座遥控电池净量包装状态时间，不是电视件或裸板Count。 |  |
| no_power_processing | 全部路线 | 无前景激活演示电测试软件维修拆解底座组装挂装安装常规主箱替换或未审温控，含外包。消费者使用耗电及厂家测试不属服务公用资源。 |  |
| commodity_gate_check | 非交换商品 | 真实完整厂家套件继承包装上游、源归属量原生单位来源分配换算互斥出口及实际相容损失责任既有覆盖在服务外一次。随机电池附件不作新耗用服务供给，不明状态非损失排放或零。 |  |
| resource_owner_check | 全部服务资源 | 全使用者期间原生因果驱动单位待机卫生未完成，选总供给加外退或仅耗用省退回，全寿命观测有据剩余末端不确定性，直接外包承运接收一次。 |  |
| outlet_species_check | 真实去向 | 整机关联套件包装与分离件围控事故物分开包装混合卫生废水互斥，具真实接收分类处理。不将损坏转化学、电池面板组成转释放，无自动回收信用。 |  |
| bilingual_raw_contract | 全部内容 | 原始七身份五功能六边界六参考七画像、八协议各十二字段和十公式正文输出非空，精确有序ID原操作数属性单位证据来源URL及确定性投影无预处理对齐；检查不证明实际质量最终UUID。 |  |
| validate_concrete_identity_decisions | all inventory rows | 将每项实际身份核实事项落实到实物明确的流卡和原生数量，或提供不适用证据。证据检查点 ID 不是交换。发生、物种、状态、接收方或服务配置缺失时阻断最终数据完成，不默认零。按规定保持整体与组分、总量投入与对应退料的排他关系。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 真实前景采集且具体身份验证后作为secondary_dataset或background_dataset |
| downstream_use | 装箱未通电LCD/LED电视商户实体增量，另关联完整厂家配置包装商品需求实际相容损失一次，不是总交付电视生命周期或消费者运行 |
| allowed_use | 真实LCD/LED背光型号序列区域原厂套件包装及未通电常温自营商业门槛，具配置附件质量状态期间 |
| excluded_use | 其他显示面板零件制造、电视激活演示软件测试修拆底座组装挂装安装换箱未审温控、零售代理独立物流；功能安全或消费者用电保证 |
| required_metadata | 厂家型号序列SKU区域放行商户买方；真实套件组分存在状态数量质量单位基准来源、含不含底座遥控电池适配范围继承包装皮重；未通电状态期间；全使用者资源外包全寿命资产承运接收；原门槛归属量状态单位来源换算分配互斥出口损失责任既有覆盖 |
| required_quality_disclosure | 指南型号适用性及真实配置整量包装组分相容；外观实际处置不明差，不编电测试；完整厂家定量损失覆盖；全部使用者原生驱动全寿命有据剩余不确定性；具体流支持经验范围缺口 |
| update_trigger | 型号显示技术区域套件附件电池存在包装来源验收改变；新增通电加工安装换箱温控；仓库外包资产承运接收范围变化；实际损坏丢弃释放或实质来源证据 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| sony-lcd-tv-model-handling | handbook | Sony，KD-X75K/X74K系列电视参考指南，2022，5-038-158-01(1)。https://pro.sony/support/res/manuals/5038/ac33ccb749a17b7a3391ebffd0210489/50381580M.pdf | 特定型号LCD/LED、真实底座机身区域附件区分、面板纸箱运输背景；不采用通用质量尺寸人数、安装激活步骤、运行待机年4小时耗电或法律安全验收默认。 |
