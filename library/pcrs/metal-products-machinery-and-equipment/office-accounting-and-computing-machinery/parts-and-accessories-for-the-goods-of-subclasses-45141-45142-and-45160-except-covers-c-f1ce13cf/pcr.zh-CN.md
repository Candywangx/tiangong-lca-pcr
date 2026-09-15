---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.parts-and-accessories-for-the-goods-of-subclasses-45141-45142-and-45160-except-covers-c-f1ce13cf
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 45141、45142和45160子类所列货物的零件及附件（罩套、携带箱及类似品除外）

## 1. 范围与适用性

本PCR适用于单独供应的功能零件及附件，其配套设备包括带计算装置的会计机、收银机、邮资盖印机和出票机，以及销售点终端、自动柜员机和其他办公机器。以主机功能及专用兼容关系判定纳入范围。排除整机、打字机和袖珍计算器零件、计算机零件、罩套及携带箱。保留的类别身份用于零件制造及更换集成建模：一千克零件不代表一千克主机所提供的服务。[un-cpc-3-0-structure-2025]

清单以功能性纸币循环钞箱为例；钞箱参与现金处理机构运行，区别于运输箱。[cbp-hq-086537-1990; diebold-nixdorf-cash-cassette-flexibility] 下列材料路线是有条件适用的工程采集模型，并非制造商物料清单。每个零件号及版本应单独建数据集，不得混合平均不同功能的零件。其他符合范围的零件采用相同采集原则，但必须建立自身完整、具体的原子交换。钞箱清单不是电路板或出票机构的默认清单。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.parts-and-accessories-for-the-goods-of-subclasses-45141-45142-and-45160-except-covers-c-f1ce13cf |
| classification_refs | CPC 3.0: 45180 |
| covered_products | 上述办公及交易机器的专用功能零件 |
| excluded_products | 完整主机；罩套；携带箱；打字机、袖珍计算器及通用计算机零件 |
| representative_product | 空载自动柜员机纸币循环钞箱，指定型号 |
| production_route | 有条件的ABS注塑及钢材成形；装配、测试与包装 |
| market_state | 全新、验收合格、可装入主机的功能零件；不含纸币 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供兼容、可运行的更换或装机零件 |
| How much | 同一零件号合格零件净质量1 kg；同时报告件数及单件质量 |
| How well | 以测试记录证明符合图纸版本、接口配合及功能验收要求 |
| How long or cycle | 一次厂门生产交付；不假定寿命等效。若声称额定循环次数或保修期，应声明依据。 |
| reference_flow_link | reference_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 自动柜员机纸币循环钞箱 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件号；版本；主机功能与型号；接口；净质量与件数；材料牌号；是否含电子器件；验收测试；声称的额定工况；全新或再制造状态；场址；期间；制造路线；包装质量 |

必须在数据包中声明全部限定信息。质量基准仅用于生产归一化；比较须具备等效功能、兼容性及寿命。再制造零件须另行披露回收和翻新边界。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| net_mass | reference_product | Mass | kg | 使用合格零件净质量M；M不含包装、纸币和不合格品。 |
| count_conversion | 件数记录 | Mass | kg | 质量=件数×同版本实测平均单件质量；保留样本件数及离散程度。 |
| energy_conversion | 电表 | Net calorific value | MJ | 按3.6 MJ/kWh将kWh换算为MJ；分表总量须与分配后的账单用量核对。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收已识别的材料库存及外购成品组件 |
| starting_condition_role | 前景入口状态，不代表原料无上游负荷 |
| product_classification_scope | CPC 3.0: 45180 |
| recursive_input_rule | 同类别外购零件以供应商数据集记录一次；内部转移相互链接，不重复递归为采购。 |
| upstream_dataset_requirement | 链接与材料状态、地域及技术匹配的生产、交付及废物处理数据集。 |
| disclosure | 披露自制/外购划分、供应商边界、处理去向及排除项；区分门到门与摇篮到厂门结果。 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_partial | system_boundary | 采用明确披露的部分生产边界；主机使用和最终处置属于独立下游情景。 | ghg-protocol-product-standard-2011 |
| boundary_complete | foreground | 包括实际加工、外协表面处理、测试、返工、包装、进厂交付和生产废物处理。下表未列出的实际材料、化学品及排放均须补充独立原子交换，不得藏于类别汇总行。 |  |
| boundary_transfer | internal_transfers | 壳体及底架转移按批次与质量配对；内部数量在汇总边界抵消。外购零件需上游数据集，并排除其现场制造路线。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| moulding | 壳体注塑 | conditional | 现场制造ABS壳体 | foreground_production | 1 kg合格最终零件净质量 |
| forming | 底架成形 | conditional | 现场制造钢制底架 | foreground_production | 1 kg合格最终零件净质量 |
| assembly | 装配、验收与包装 | required | 所有声明零件；单件零件实施验收与包装 | foreground_production | 1 kg合格最终零件净质量 |

### 过程：壳体注塑（`moulding`）

#### 输入

##### 产品流

###### ABS粒料（`abs_granulate`）

纳入条件：现场注塑ABS壳体。

- 选定流：丙烯腈-丁二烯-苯乙烯共聚物（ABS），粒料 `8f1317c1-aa51-4524-8692-74079c923e2c`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：批次净数量Q除以合格最终零件质量M；归一化前记录库存变化、返工及适用分配。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格最终零件净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_moulding`
- 来源：

###### 电力（`moulding_electricity`）

纳入条件：运行注塑工序；包括干燥和闭路冷却耗电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：批次净数量Q除以合格最终零件质量M；归一化前记录库存变化、返工及适用分配。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格最终零件净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_moulding`
- 来源：

#### 输出

##### 产品流

###### 注塑成型的ABS自动柜员机钞箱壳体（`housing_output`）

纳入条件：合格壳体转入装配，保留成对转移记录。

- 选定流：注塑成型的ABS自动柜员机钞箱壳体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：批次净数量Q除以合格最终零件质量M；归一化前记录库存变化、返工及适用分配。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格最终零件净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_moulding`
- 来源：

##### 废物流

###### 送厂外处理的ABS注塑废料（`abs_scrap`）

纳入条件：ABS废料出厂处理；不含内部回用的粉碎流道料。

- 选定流：送厂外处理的ABS注塑废料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：批次净数量Q除以合格最终零件质量M；归一化前记录库存变化、返工及适用分配。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格最终零件净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_moulding`
- 来源：

### 过程：底架成形（`forming`）

#### 输入

##### 产品流

###### 冷轧低碳钢薄板（`steel_sheet`）

纳入条件：现场以薄板成形钢制底架。

- 选定流：冷轧低碳钢薄板
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：批次净数量Q除以合格最终零件质量M；归一化前记录库存变化、返工及适用分配。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格最终零件净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_forming`
- 来源：

###### 电力（`forming_electricity`）

纳入条件：运行板材切割和折弯；包括可归属的辅助耗电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：批次净数量Q除以合格最终零件质量M；归一化前记录库存变化、返工及适用分配。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格最终零件净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_forming`
- 来源：

#### 输出

##### 产品流

###### 成形的钢制自动柜员机钞箱底架（`chassis_output`）

纳入条件：合格底架转入装配，保留成对转移记录。

- 选定流：成形的钢制自动柜员机钞箱底架
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：批次净数量Q除以合格最终零件质量M；归一化前记录库存变化、返工及适用分配。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格最终零件净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_forming`
- 来源：

##### 废物流

###### 送厂外回收的低碳钢薄板边角料（`steel_offcuts`）

纳入条件：边角料作为废物出厂；记录接收方及回收路线。

- 选定流：钢废料，边角料 `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：批次净数量Q除以合格最终零件质量M；归一化前记录库存变化、返工及适用分配。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格最终零件净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_forming`
- 来源：

### 过程：装配、验收与包装（`assembly`）

#### 输入

##### 产品流

###### 注塑成型的ABS自动柜员机钞箱壳体（`housing_input`）

纳入条件：所声明钞箱使用ABS壳体；识别内部制造或外购来源。

- 选定流：注塑成型的ABS自动柜员机钞箱壳体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：批次净数量Q除以合格最终零件质量M；归一化前记录库存变化、返工及适用分配。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格最终零件净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：

###### 成形的钢制自动柜员机钞箱底架（`chassis_input`）

纳入条件：所声明钞箱使用钢制底架；识别内部制造或外购来源。

- 选定流：成形的钢制自动柜员机钞箱底架
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：批次净数量Q除以合格最终零件质量M；归一化前记录库存变化、返工及适用分配。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格最终零件净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：

###### 钢螺钉（`steel_screws`）

纳入条件：实际物料清单列有钢螺钉。

- 选定流：钢螺钉 `895204f6-6425-4814-afc5-cb97e530e892`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：批次净数量Q除以合格最终零件质量M；归一化前记录库存变化、返工及适用分配。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格最终零件净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：

###### 钢制压缩弹簧（`steel_spring`）

纳入条件：实际物料清单列有钢制压缩弹簧。

- 选定流：钢制压缩弹簧
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：批次净数量Q除以合格最终零件质量M；归一化前记录库存变化、返工及适用分配。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格最终零件净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：

###### 电力（`assembly_electricity`）

纳入条件：计量装配、功能测试、返工及可归属的厂务用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：批次净数量Q除以合格最终零件质量M；归一化前记录库存变化、返工及适用分配。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格最终零件净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：

###### 瓦楞纸箱（`corrugated_box`）

纳入条件：成品零件使用瓦楞纸箱发运。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：批次净数量Q除以合格最终零件质量M；归一化前记录库存变化、返工及适用分配。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格最终零件净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：

#### 输出

##### 产品流

###### 自动柜员机纸币循环钞箱（`reference_product`）

纳入条件：厂门处验收合格的空载功能钞箱，不含包装质量。

- 选定流：自动柜员机纸币循环钞箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：M/M = 1 kg；M为cp_assembly采集的合格净质量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg合格最终零件净质量
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | shared_processes | 优先分表细分；采用有因果依据的物理驱动量，物理关系不可成立时才采用合理说明的经济基准。 | ghg-protocol-product-standard-2011 |
| allocation_rework | part_batches | 不合格生产及返工负荷计入合格输出。内部回用料与外购再生树脂分开。披露回收核算约定，不减去假想的原生料替代收益。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_moulding | moulding | 每个原子交换及输出 | 批次台账及计量 | 零件版本；批次；Q；M；库存变化；件数；单件质量；废品；返工；供应商；路线；表计起止值；驱动量份额 | 称量领用、退料、转移及废物；读取分表；核对账单与验收记录 | kg; kWh; MJ; count | 每批次及表计期间 | 声明的连续生产年度；较短投产期间须披露 | 具名场址及外协路线 | 同版本零件净Q与合格M分别求和后计算Q/M；不直接平均批次比值 | 校准；发票；物料清单；转移配对；验收测试；废物联单 |
| cp_forming | forming | 每个原子交换及输出 | 批次台账及计量 | 零件版本；批次；Q；M；库存变化；件数；单件质量；废品；返工；供应商；路线；表计起止值；驱动量份额 | 称量领用、退料、转移及废物；读取分表；核对账单与验收记录 | kg; kWh; MJ; count | 每批次及表计期间 | 声明的连续生产年度；较短投产期间须披露 | 具名场址及外协路线 | 同版本零件净Q与合格M分别求和后计算Q/M；不直接平均批次比值 | 校准；发票；物料清单；转移配对；验收测试；废物联单 |
| cp_assembly | assembly | 每个原子交换及输出 | 批次台账及计量 | 零件版本；批次；Q；M；库存变化；件数；单件质量；废品；返工；供应商；路线；表计起止值；驱动量份额 | 称量领用、退料、转移及废物；读取分表；核对账单与验收记录 | kg; kWh; MJ; count | 每批次及表计期间 | 声明的连续生产年度；较短投产期间须披露 | 具名场址及外协路线 | 同版本零件净Q与合格M分别求和后计算Q/M；不直接平均批次比值 | 校准；发票；物料清单；转移配对；验收测试；废物联单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | 全部行 | q_i = sum(分配及库存修正后的Q_i)/sum(M)；M > 0 | Q_i; M | q_i |  |
| transfer_balance | 壳体及底架 | 内部输出=内部接收+转移库存变化；外购接收不进入该等式 | 成对转移台账 | 平衡残差 |  |
| material_balance | 加工与装配 | 净材料投入=合格净输出+外部废物+库存变化+单独计量的损失；内部回用料不作为新增外部投入。对照仪器不确定度调查残差。 | 材料台账 | 质量残差 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | 零件及上游数据集 | 核实准确的零件版本及兼容的供应商边界；通用数据须声明敏感性检查。 | 物料清单；供应商声明 |
| coverage | 采集期间 | 记录地域、期间、技术、完整性及不确定度。 | ghg-protocol-product-standard-2011 |
| quantity | 全部数量 | 保留原始观测与换算因子。缺失记录表示未知，不得置零；须通过供应商或现场测量调查。 | 表计与批次证据 |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_scope | reference_flow | 要求完整限定信息及主机兼容证据。拒绝整机、运输箱及未经限定的混合零件平均值。 | un-cpc-3-0-structure-2025 |
| validate_inventory | inventory | 检查每个适用行具有数量或明确的缺失数据结论；核对物料清单、实际路线及新增原子行。缺失UUID不豁免数据采集。 |  |
| validate_balance | quantities | 要求合格质量为正、单位一致、内部转移配对及平衡残差已说明。返工仅计一次，包装单列。 |  |
| validate_use | downstream_use | 不得从钞箱质量或制造商宣传推导主机节能、寿命或回收抵扣。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 作为另行定义主机系统的零件制造或更换投入 |
| allowed_use | 兼容的零件号、版本、材料路线及厂门边界 |
| excluded_use | 整台自动柜员机结论；不同功能零件直接比较；未经建模的使用阶段节能 |
| required_metadata | 限定信息；场址；期间；净质量；件数；物料清单；供应商数据集；分配；过程图；边界 |
| required_quality_disclosure | 实测比例；缺失数据；未解决身份；不确定度；排除项；范围证据局限 |
| update_trigger | 零件版本、材料供应商、工艺路线、模具、能源结构或测试规范变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | CPC Version 3.0 structure (30 June 2025). [Original source](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv). 检索日期 2026-09-08; independence_key: un-cpc-3-0-structure-2025 | 官方45141、45142、45160及45180条目；类别识别及排除项。 |
| cbp-hq-086537-1990 | official_guidance | HQ 086537, Internal Advice 8/90 (17 April 1990). [Original source](https://rulings.cbp.gov/api/ruling/086537). 检索日期 2026-09-08; independence_key: cbp-hq-086537-1990 | 事实与裁定：钞箱与纸币发放机构配合工作；作为历史产品边界实例，不作为现行税则建议。 |
| diebold-nixdorf-cash-cassette-flexibility | literature | Flexibility is the New Standard for Cash Cassettes. [Original source](https://www.dieboldnixdorf.com/en-us/banking/insights/blog/new-standard-for-cash-cassettes/). 检索日期 2026-09-08; independence_key: diebold-nixdorf-cash-cassette-flexibility | 制造商对钞箱功能与配置的说明；仅支持兼容性限定，不提供物料清单或定量清单。 |
| ghg-protocol-product-standard-2011 | standard | Product Life Cycle Accounting and Reporting Standard, chapters 7–9. [Original source](https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf). 检索日期 2026-09-08; independence_key: ghg-protocol-product-standard-2011 | 部分生命周期边界披露、分配层级和数据质量原则；作为方法指导，不声明全面符合该标准。 |
