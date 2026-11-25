---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-cleaning-materials
status: candidate
content_maturity: authored_methodology
language: zh-CN
sync_with: pcr.en-US.md
---

# Cif Professional 柠檬含磨粒去污乳7508636原装2升瓶的到店零售增量服务

## 1. 范围与适用性

本候选规定原装2升含磨粒去污乳的零售服务，不规定清洁效果功能。CPC35334属于3533及62176商品范围，须验证实际含磨粒配方及零售渠道后才适用；完整SERVICE必须具备所有真实原子来源和身份。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-cleaning-materials |
| classification_refs | CPC3.0 62176; 映射权威在外部accepted mapping/ADR；建议narrower，不是接受决定。 |
| covered_products | Cif Professional 柠檬含磨粒去污乳7508636原装2升瓶的到店零售增量服务 |
| excluded_products | 其他SKU/浓度/状态；专门店；线上/向客户送货；灌装；商品使用/制造 |
| representative_product | Cif Professional Cream Cleaner Lemon 7508636；原装2升瓶，硬表面含磨粒去污乳；实际批次完整制剂/包装BOM另核。 |
| production_route | 混合商品实体超市到店/常温/原封柜台交付 |
| market_state | 原装完整瓶内含磨粒乳状悬浮制剂；不是纯表面活性剂、餐具洗洁精、纯水、干粉或仅磨粒质量。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 指定完整原瓶的收货至实体柜台合格验收增量零售服务 |
| How much | 1个最终有效原ID服务；Q为期间同配置池的去重最终有效数量 |
| How well | 正确SKU/批次/完整封口/接收方及数量状态验收，按service_count |
| How long or cycle | 预先声明收货/储存/交付期间，延续晚退截止与原池更正，零销量不删 |
| reference_flow_link | service_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | Cif Professional 柠檬含磨粒去污乳2升原瓶的到店零售增量服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 原SKU及配方/批次; 完整包装BOM; 门店混合实物渠道; 收货/柜台门; 合格验收及截止; Q与S/F/T/O; 原来源/责任方/池/版本; 部分核心和强制补齐状态; 计量不确定性; 未绑定身份 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_count | service_output | 物品数量 | Item(s) | 参考数量为1件合格服务，不以2L、活性质量或价格换算；按cp_goods计Q。 |
| carrier_mass | failed_bottle; wash_water; dry_wipe; rinsate; wet_wipe; used_bottle | 质量 | kg | 实际整载体净kg、来源配方kg及整包件数独立；按direct_quantities、cleaning_origin与physical_ledgers。 |
| selected_energy_identity | core_electricity | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | 所选交流电身份只有一个参考能量属性。实际归属量保留本行单位；其单位组中1kWh=3.6MJ。与另一能量单位来源合并或表达参考MJ交换前仅换算一次，同一分子不得重复换算，也不能推定供应组合。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 同配置原包已在实体店收货验收，原来源背景向量可追溯 |
| starting_condition_role | retail_service_gate |
| product_classification_scope | 35334去污膏、去污粉及其他去污制剂的具名含磨粒乳状子集；3533→62176，非35322餐具洗涤剂路线。 |
| recursive_input_rule | 仅四个具名实物卫星不表征；F原商品输入、实际自用包及废物处理不得排除；S仅下游GOODS一次 |
| upstream_dataset_requirement | 原全配方/完整容器及运输向量，按原ID的S/F/T/O守恒；原厂规格不代替LCI |
| disclosure | 披露部分核心与每项实际补齐状态，不得声称整店完整；外部映射/ADR权威 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_gate | retail; hygiene | 仅准Diversey/Pro Formula Cif Professional Cream Cleaner Lemon 7508636原装2升瓶，按实际批次完整乳状制剂与盖/标签/内衬BOM分池。厂家页面确认去除硬表面污垢的清洁微粒；页面所链2021-09-19 v05.2 SDS列碳酸钙但不是现批完整配方，必须以现批标签/SDS及供应方BOM验证确有去污磨粒，不能套旧SDS比例或名义密度。无磨粒或只有溶解表活的洗涤制剂不属于本路线，须另审分类。标称2升、成分范围、宣传和推荐用量不当实测kg/投料或合规限值。仅当实际门店、完整原包、当前用途和分类证据吻合才应用。 | un-cpc62176; un-cpc35334; cif-product; cif-sds |
| channel_gate | retail | 须有该SKU实际混合商品实体超市平面陈列图、门店地址和带时间收据。厂家页面及经销链接仅证明真实产品，不能证明合格混业实体分店、当地库存、实际购入或客户使用。仅含到店选购、常温完整储存与柜台交付；线上履约、补充灌装/分装、演示、为销售稀释、向客户送货和制剂制造不属于本路线。须核实专用路线无燃烧或含制冷剂设备；共享设施空调仍是强制补齐模块。路线证据未知则阻断适用性。 | cif-sds; cif-product |
| core_boundary | retail; hygiene | 本规则为从门店验收收货门到合格实体柜台验收的部分增量核心，含重复处理、逆向事件、专用计量电力、失败原商品背景和指定接漏托盘清洁。成功商品制造及其上游运输属于下游GOODS，排除于SERVICE。必须按module_completion补齐必要的设施、ICT、网络、支付、安防、行政、其他清洁、资本和运输模块，方可声称完整零售SERVICE。实际Waste输出始终需要处理；仅customer_pack、supplier_pack、transfer_pack和external_pack为不表征的实物保管卫星。failed_original为实际表征Product输入。 | jrc-retail; ghg-product |
| source_ownership | failed_original; customer_pack; supplier_pack; transfer_pack; external_pack | 对收货门每个同质整包制造加上游运输来源向量V_s，按原单元ID精确守恒S/F/T/O：S为最终验收客户商品；F为本SERVICE承担的失败来源；T为具名持续承担方；O为未解决/在库。重复处理/再售不重复V_s。实物退供须有实际签收责任方和背景延续，否则保留O。失窃、确认遗失和未开封外部失败由原来源F承担，除非有记录证明持续T接受责任。无实物退回的验收撤销把原事件从S移至F或有证T；仅财务调整且验收有效仍为S。整包来源F只随原来源计一次，即使后来产生多项实物废物载体也不逐载体重复原背景。组件责任不同时，须用经核实组件数量Product卡及供应商组件向量替换整包输入并守恒V_s；质量比例不可拆分环境向量。 |  |
| state_gate | retail; hygiene | 每个处理班次及每起事件检查封口并称量/检查泄漏；密封不意味着零挥发/泄漏。现有保管卫星仅接纳完整原瓶。failed_bottle仅接纳实际含液体及原盖/标签的破损瓶，且接收方签字接受实际组成与状态。wet_wipe、used_bottle和rinsate同样须有实际状态/组成签收和完整处理边界；仅许可证/照片不足。已开封外部转移、游离制剂液、干粉、未识别气体释放、其他擦拭材质、未知接收方/状态或未解决质量残差均阻断完整性，直至增加具名状态专属原子卡、协议、身份和双语投影。不可将未知置零或仅靠措辞混合不相容废物。 |  |
| module_completion | retail; hygiene | 声称完整SERVICE前，须清查实际必要功能，并按其真实过程、方向、类型与属性/单位设置具名原子扩展卡，采用cp_modules证据和本PCR固定方法。设施电力/热/入场供水、照明和风机固定装置、建筑装修、货架、可重复使用接漏托盘、收银/打印机、ICT硬件/服务器运行、网络接入、支付处理、摄像/采集存储、行政、实际收据/标签、开封收货箱/膜、擦布外包装、其他实际清洁、维修、资本退役及每段实际运输均须正面纳入或有签字的实体/提供方缺席证据。耗材遵循consumable_sources；资本遵循asset_lifetime。合同包只有在提供方对象、实测分母和所含能源/运输/维护/寿终清单精确时才可作为单服务，并与组成卡互斥。不可假定网络接入包含支付/行政/安防后台。燃料/制冷剂范围未知阻断补齐：检查设备/物种和维护记录；以另经审查的物种专属卡和控制体协议，纳入实际设备损失、捕集、非空气转移、存量和最终外部介质，或证明来源缺席。不可替代为通用零气体因子。 | jrc-retail |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| retail | 原瓶到店柜台零售 | required | 仅适用已核实路线和配置 | incremental_service | service_output |
| hygiene | 接漏托盘公用槽清洗及吸液 | conditional | 实际发生；签字缺席才可不适用，未知阻断 | ancillary_hygiene | service_output |

### 过程：原瓶到店柜台零售（`retail`）

#### 输入

##### 产品流

###### 交流电 (`core_electricity`)

本卡仅含上述一个实际交换，原始量、归属及最终归一化按所链协议与规则；发生/缺席必须有证。

按direct_quantities和pool_allocation采用X_electricity/Q。

所选流使用单一净热值能量属性。清单保留声明的实测能量单位；能量单位组支持1kWh=3.6MJ。将kWh记录表达为参考MJ（含兼容来源合并）时仅换算一次，保留原kWh表计分子及来源归属，不能另加一次电力需求。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：X_core_electricity/Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：

###### Cif Professional柠檬含磨粒去污乳含磨粒去污乳7508636完整2L原装满瓶 (`failed_original`)

本卡仅含上述一个实际交换，原始量、归属及最终归一化按所链协议与规则；发生/缺席必须有证。

按failed_source采用N_F/Q；整来源制造加收货门运输，绝不含成功S。

- 选定流：Cif Professional柠檬含磨粒去污乳含磨粒去污乳7508636完整2L原装满瓶
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_F/Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_goods`
- 来源：`cif-product`

#### 输出

##### 产品流

###### Cif Professional 柠檬含磨粒去污乳2升原瓶的到店零售增量服务 (`service_output`)

本卡仅含上述一个实际交换，原始量、归属及最终归一化按所链协议与规则；发生/缺席必须有证。

1 件参考流；Q按service_count。

- 选定流：Cif Professional 柠檬含磨粒去污乳2升原瓶的到店零售增量服务
- 流属性/单位：物品数量 / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_goods`
- 来源：

###### 交付时初步验收的完整Cif Professional7508636 2L原装满瓶 (`customer_pack`)

本卡仅含上述一个实际交换，原始量、归属及最终归一化按所链协议与规则；发生/缺席必须有证。

实际完整瓶初步验收客户毛交付事件件数/Q；与external_pack互斥；仅为保管卫星，遵循physical_ledgers。

- 选定流：交付时初步验收的完整Cif Professional7508636 2L原装满瓶
- 流属性/单位：物品数量 / Item(s)
- 数量规则：X_customer_pack/Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_goods`
- 来源：

###### 实物退供的完整Cif Professional7508636 2L原装满瓶 (`supplier_pack`)

本卡仅含上述一个实际交换，原始量、归属及最终归一化按所链协议与规则；发生/缺席必须有证。

实际完整瓶退供件数/Q；来源责任另按source_ownership。

- 选定流：实物退供的完整Cif Professional7508636 2L原装满瓶
- 流属性/单位：物品数量 / Item(s)
- 数量规则：X_supplier_pack/Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_goods`
- 来源：

###### 交另一门店的完整Cif Professional7508636 2L原装满瓶 (`transfer_pack`)

本卡仅含上述一个实际交换，原始量、归属及最终归一化按所链协议与规则；发生/缺席必须有证。

实际完整瓶店间交付件数/Q；保留具名责任方及原来源。

- 选定流：交另一门店的完整Cif Professional7508636 2L原装满瓶
- 流属性/单位：物品数量 / Item(s)
- 数量规则：X_transfer_pack/Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_goods`
- 来源：

###### 交外部接收方时未经初步合格验收的完整Cif Professional7508636 2L原装满瓶 (`external_pack`)

本卡仅含上述一个实际交换，原始量、归属及最终归一化按所链协议与规则；发生/缺席必须有证。

实际完整瓶交付时缺初步合格验收的毛交付事件件数/Q；与customer_pack互斥。没有新移动的验收撤销不新增实物输出；保留实际接收方及后续状态历史。

- 选定流：交外部接收方时未经初步合格验收的完整Cif Professional7508636 2L原装满瓶
- 流属性/单位：物品数量 / Item(s)
- 数量规则：X_external_pack/Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_goods`
- 来源：

##### 废物流

###### 含残液及原封盖的破损Cif Professional7508636原2L瓶 (`failed_bottle`)

本卡仅含上述一个实际交换，原始量、归属及最终归一化按所链协议与规则；发生/缺席必须有证。

按direct_quantities和state_gate取实际直接出运整个湿载体净kg/Q；由匹配接收处理数据集覆盖处理。

- 选定流：含残液及原封盖的破损Cif Professional7508636原2L瓶
- 流属性/单位：质量 / kg
- 数量规则：X_failed_bottle/Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_goods`
- 来源：

### 过程：接漏托盘公用槽清洗及吸液（`hygiene`）

#### 输入

##### 产品流

###### Cif Professional柠檬含磨粒去污乳含磨粒去污乳7508636完整2L原装满瓶 (`cleaner_pack`)

本卡仅含上述一个实际交换，原始量、归属及最终归一化按所链协议与规则；发生/缺席必须有证。

按cleaning_origin取归属自用首次开封整包数/Q；实际采购ID与failed_original不同。

- 选定流：Cif Professional柠檬含磨粒去污乳含磨粒去污乳7508636完整2L原装满瓶
- 流属性/单位：物品数量 / Item(s)
- 数量规则：X_cleaner_pack/Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hygiene`
- 来源：`cif-product`

###### 公用清洗槽入口供水 (`wash_water`)

本卡仅含上述一个实际交换，原始量、归属及最终归一化按所链协议与规则；发生/缺席必须有证。

按direct_quantities取归属实际入口供水kg/Q；无默认稀释量。

- 选定流：公用清洗槽入口供水
- 流属性/单位：质量 / kg
- 数量规则：X_wash_water/Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hygiene`
- 来源：

###### 不含外包装的干态一次性纤维素吸液擦布 (`dry_wipe`)

本卡仅含上述一个实际交换，原始量、归属及最终归一化按所链协议与规则；发生/缺席必须有证。

按direct_quantities取归属干擦布首次使用kg/Q；须核实实际纤维素组成。

- 选定流：不含外包装的干态一次性纤维素吸液擦布
- 流属性/单位：质量 / kg
- 数量规则：X_dry_wipe/Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hygiene`
- 来源：

#### 输出

##### 废物流

###### 含Cif Professional配方及实测污物的公用清洗槽接漏托盘水性冲洗液 (`rinsate`)

本卡仅含上述一个实际交换，原始量、归属及最终归一化按所链协议与规则；发生/缺席必须有证。

实际直接排出整液净kg/Q；原配方kg为独立来源平衡，不是本量的乘数。

- 选定流：含Cif Professional配方及实测污物的公用清洗槽接漏托盘水性冲洗液
- 流属性/单位：质量 / kg
- 数量规则：X_rinsate/Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hygiene`
- 来源：

###### 含Cif Professional配方的用后湿纤维素吸液擦布 (`wet_wipe`)

本卡仅含上述一个实际交换，原始量、归属及最终归一化按所链协议与规则；发生/缺席必须有证。

实际出运完整湿擦布净kg/Q；按state_gate保留实际水/污物/配方组成。

- 选定流：含Cif Professional配方的用后湿纤维素吸液擦布
- 流属性/单位：质量 / kg
- 数量规则：X_wet_wipe/Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hygiene`
- 来源：

###### 含封盖及残液的用后Cif Professional7508636 2L自用原瓶 (`used_bottle`)

本卡仅含上述一个实际交换，原始量、归属及最终归一化按所链协议与规则；发生/缺席必须有证。

实际出运整个用后瓶及封盖净kg/Q，含实测残液；无另计重复残液输出。

- 选定流：含封盖及残液的用后Cif Professional7508636 2L自用原瓶
- 流属性/单位：质量 / kg
- 数量规则：X_used_bottle/Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hygiene`
- 来源：

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| pool_allocation | core_electricity; cleaner_pack; wash_water; dry_wipe; rinsate; wet_wipe; used_bottle | 优先采用互斥直读表和事件细分。每个实测同单位来源池X_c独立分配：X_ch=X_c*d_ch/sum_all_h(d_ch)。设备活动来源采用实测占用设备秒；设备空闲/固定电力采用实际预约设备秒，包含关闭/失败/零销量预约；场所固定来源采用实测服务面积m2乘时长h。不得将这些驱动量相加或建立混合驱动量。先实测拆分活动/空闲/固定来源分子，并在原单位与母表对账。独立互斥表不再次扣除；仅当母边界实际含子表时才扣子表。同配置预先声明池保留失败和零产出批次。总驱动量为零或Q=0均不可归一化，不得删除。清洁直接泄漏事件随原池；实际共享托盘清洗按该清洗批内实测润湿托盘面积m2分配，并保留全部受益方。 | ghg-product |
| asset_lifetime | retail; hygiene | 逐个实际同质资产/型号/BOM/边界向量V_a单独处理，制造/安装暴露e_ah/L_a的单位分别为：收银/ICT/摄像设备占用加预约设备h，货架实测占用货位体积m3*h，建筑/照明/风机服务地面面积m2*h，可重复使用接漏托盘的实测累计清洗润湿m2；同单位寿命L_a包含全部历史/当前/未来受益方及空置预约。制造、运行、维修、寿终互斥。寿命/向量修订时替换每个历史受益方为f_new_ah*V_new_a，记录delta=f_new_ah*V_new_a-f_old_ah*V_old_a；最终退役时f_final_ah=e_actual_ah/sum_all_h(e_actual_ah)。残余1-sum_old_f仅为QA，不得全压退役当期。独立维修和资产运输/寿终来源先归资产，再仅按相同历史比例/版本替换一次。整台退役设备直接净称重与BOM重建互斥；直接净重已排除拆出件。整包已含维修/运输/寿终则排除重复模块。最终累计比例合计1；暂估比例不得超过1。 |  |
| digital_events | retail | 支付授权及行政批次均为唯一原事件；按实际来源行工作时间份额w_eh=t_eh/sum_all_h(t_eh)分配实测处理时间，sum_h(w_eh)=1，包含拒付、失败、其他SKU行；不得将同一篮子事件全量计入每个SKU。行政人员来源h采用实测任务h；预约空闲人员h采用实际排班预约受益方h。网络活动来源采用实测传输bytes；设备空闲/固定来源采用唯一预约设备h。提供方连接来源小时connection_source_h按不重叠的唯一实际区间connection_interval_id保留，采用其自身有证实测分母，不是额外电力。对每原来源区间，按全部受益方实测预约端点连接秒reserved_endpoint_connection_s_h的份额connection_share_h=reserved_endpoint_connection_s_h/sum_all_h(reserved_endpoint_connection_s_h)归本SKU/池，份额合计1，含空置预约和失败事件；各端点/区间秒不得重复。实际来源小时乘该份额一次；仅有精确最终owner_id/pool_id/version归属证据exact_final_owner_pool_version时省略本次责任方再归属；仅提供方或连接层归属不足。总秒为零或覆盖未知阻断完整性。摄像采集来源map在原采集时冻结：用带时间的实际视场互斥受益方覆盖m2*覆盖h，包含空置预约和所有受益方，区时单元互斥。实际bytes*h留存沿用该原采集map，不随当前销量。记录原来源/池/map/版本；GB=10^9 bytes、GiB=2^30 bytes，须显式换算。不得混合bytes+h+任务作驱动量。 |  |
| transport_ownership | retail; hygiene | 逐个实际行程段t，先仅在签字容量记录证明质量约束且体积不约束时，按实际占用质量kg份额归来源s；仅在体积约束且质量不约束时按体积m3份额。否则未知/双约束阻断本法，待审查相应运输法。保留车型、实际装载/容量单位、路线/距离、质量/体积、静止空闲时长h和全部货批。空返vehicle-km按该实际段每受益方实测预约货位容量*时间分配；静止空闲燃料/服务按预约容量*实际空闲h分配；载货t*km为零不删除这些量。随后每实际来源按F份额、清洁剂首次启用份额或历史资产比例归最终责任方/池/版本。attribution_level=consignment仅省略行程分配；只有精确最终责任方/池/版本证据才省略责任方归属。核实提供方覆盖实际空返/空闲段及所含燃料/维护；缺失时另加互斥vehicle-km/idle-h来源卡，不得重叠载货服务。 |  |
| consumable_sources | retail; hygiene | 逐个实际同质纸/标签/箱/膜/擦布包装来源单独测量净首次使用材料量x_use_s（纸含其真实涂层，排除另测纸芯/外包装）。其制造加上游来源仅归首次使用事件/池一次；未用库存/退回/转移携未分配原来源，再用不重复制造/上游。已打印中间库存同时保留原纸及实测打印来源责任及原来源ID/池/版本；后期领用替换原归属，不二次收费。同一实际材料事件服务多行时，按该同质来源内实测材料面积/质量部分归属，份额合计1。来源和去向库存独立记录；直接出运废物kg不再次按库存更正。实际混合载体按state_gate须实际组成/状态签收；单独出运组件互斥。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | retail | failed_original; service_output; customer_pack; supplier_pack; transfer_pack; external_pack; failed_bottle | event_stock_source | initially_accepted_handover_count; never_accepted_at_handover_count; raw_X_r; attributed_X_r; pool_id; original_id; supplier_source_id; 批次; SKU; 完整BOM; 标签; 封口; actual_fill_kg; tare_kg; gross_handover_id; physical_return_id; acceptance_id; final_acceptance; cutoff; return_link; prior_version; version; Q; owner_id; S; F; T; O; N_F; N_S; V_s; attribution_level; G_open; receipts; physical_customer_returns; gross_customer_handover; supplier_handover; internal_handover; condemnation_count; confirmed_missing_count; signed_goods_residual; W_open; condemned_actual_kg; other_waste_received_kg; dispatched_actual_kg; confirmed_missing_waste_kg; signed_waste_residual; 接收状态; 检查; 秤ID; 校准 | 以收货/扫描/退回跟踪唯一原包及来源；用可追溯校准秤、供应商签字向量/边界及收货单实测批次装液和完整包装/组件BOM，不默认目录皮重。计事件ID并直接称每出运废货批；每班次及每事件查完整性。 遵循service_count、physical_ledgers、failed_source和source_ownership；原收货仅QA，不是另一次表征制造输入。最终量每参考流；保留零销量批次。 | Item(s); kg | 逐事件、班次检查、结账对账及晚期更正 | 预先声明全期间，包含关闭/失败/晚期更正 | 实际门店和具名提供方原来源 | 每参考流 | 校准秤/计数扫描、供应商向量及标签、接收方/验收/撤销签字、日检、完整历史版本链接；未知阻断完整性。 |
| cp_energy | retail | core_electricity | meter_source | X_c; d_ch; raw_X_r; attributed_X_r; pool_id; source_id; meter_start; meter_end; meter_boundary; active_kWh; idle_kWh; fixed_kWh; occupied_device_s; reserved_device_s; 全部受益方; parent_child_map; 校准; version | 按一致边界读取专用库存/收银电路表；记录区间及实测活动/空闲/固定拆分、占用和预约设备秒。核查母子拓扑和表校准；不由铭牌推瓦数。 先pool_allocation再direct_quantities；原X_electricity在最终每参考流前保持kWh。 | kWh; s | 每计量区间，所有营业/关闭班次 | 预先声明全期间，包含关闭/失败/晚期更正 | 实际门店和具名提供方原来源 | 每参考流 | 完整全部受益方同单位合计=母表；互斥证据和不确定性；覆盖未知则阻断。 |
| cp_hygiene | hygiene | cleaner_pack; wash_water; dry_wipe; rinsate; wet_wipe; used_bottle | cleaning_source_carrier | X_c; d_ch; raw_X_r; attributed_X_r; pool_id; source_id; bottle_initial_seal_state; first_open_at; damaged_at; cutoff_state; state_transition_id; source_measurement_id; measured_source_portion_id; retained_origin_kg; source_class; source_original_id; failed_original_parent_id; janitorial_original_id; first_open_id; 完整BOM; first_open_count; m_src_j; retained_unused; retained_wipe; retained_bottle; dispatched_bottle_residue; dispatched_wipe_origin; dispatched_rinsate_origin; verified_species_transfer; source_residual; water_volume; rho_actual; 温度; discharge_mode; direct_net_kg; first_use_mass; wetted_tray_m2; 全部受益方; spill_goods_original_id; 干擦布组成; actual_soil_kg; wet_carrier_id; 接收状态; 校准; version | 逐瓶检查并记录初始封口、首次开封、破损与截止状态；按cleaning_origin把原来源测量ID/份额唯一归retained_unused或retained_bottle，逐状态转移替换旧记录。独立识别商品洒漏与自用原来源；独立接收自用包；称首次开封原液和实际投料转移；保留互斥去向的来源分析/示踪/经验证转移记录。称干态首次用纤维素擦布；以实际密度/温度计量入口供水。直接称整排液和湿载体（或互斥直接排液体积乘密度）；不以供水平衡重建液体。共享批实测润湿托盘面积；每班次及事件查缺席/发生。 实施cleaning_origin、direct_quantities、pool_allocation和state_gate。分开来源kg、湿kg和整包Count；所有最终卡数量每参考流。 | Item(s); kg; m3; kg/m3; m2 | 逐开封/投料/清洗/出运、日库存和晚期更正 | 预先声明全期间，包含关闭/失败/晚期更正 | 实际门店和具名提供方原来源 | 每参考流 | 秤/表校准与空白、实测水分/密度/污物、接收方实际组成签收及完整处理、来源/库存对账；未知不是零。 |
| cp_modules | retail | core_electricity; failed_original | completion_extension | X_c; d_ch; all_beneficiaries; source_amount_e; trip_amount; source_share; owner_share; original_source_id; raw_X_r; attributed_X_r; x_use_s; material_source_id; first_use_event; unused_stock; printed_WIP; original_print_source; measured_material_portions; cleaned_wetted_m2_lifetime; 功能清册; 实际发生; 签字缺席; source_id; 组成边界; event_id; 时间; asset_id; 生命周期阶段; exchange_identity; property; unit; boundary; N_core_raw_r; N_external_raw_r; z_external_r; D_original_r; Q; owner_id; pool_id; version; V_a; e_ah; L_a; e_actual_ah; f_old_ah; f_new_ah; V_old_a; V_new_a; historical_pool; delta; served_m2h; occupied_m3h; reserved_device_h; task_h; roster_reserved_h; authorization_id; t_eh; w_eh; network_bytes; connection_source_h; reserved_endpoint_connection_s_h; all_connection_beneficiaries; connection_interval_id; exact_final_owner_pool_version; connection_interval; capture_map; field_of_view; zone_time; capture_m2h; retained_byteh; GB_or_GiB; trip_id; segment_id; capacity_kg; capacity_m3; actual_mass_kg; actual_volume_m3; 容量约束证据; route_km; empty_vehicle_km; stationary_idle_h; reserved_capacity_time; attribution_level; original_denominator; 提供方所含范围; 物种控制体 | 与签字保管人清查功能及实际设备/合同；用校准表/秤/计时器实测来源，读取bytes和摄像留存日志，带时间实测面积/体积/视场；取得实际提供方边界/向量及全部历史受益方、行程容量和载货/空返/空闲记录。按唯一连接区间采集实际提供方来源h及分母；用校准同步时钟、端点连接日志和预约记录采集全部受益方预约连接秒，含空置/失败，并逐端点/区间去重对账；核验exact_final_owner_pool_version后才免责任方再归属。完整性前安装真实扩展卡及其单过程协议视图；cp_modules为核心审核视图，不是虚构模块交换。 遵循module_completion、pool_allocation、asset_lifetime、digital_events、transport_ownership和completion_aggregation；保留原始单位/分母，最终仅每参考流一次。 | 各原始来源单位分别计量; 连接来源 h; 端点预约连接 s | 连续运行区间、逐资产修订/事件/行程、每原池更正 | 预先声明全期间，包含关闭/失败/晚期更正 | 实际门店和具名提供方原来源 | 每参考流 | 签字边界/排除矩阵、校准、完整历史暴露、全部受益方合计、冻结视场map和容量约束证据；未知/不支持来源阻断完整SERVICE。 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| service_count | service_output | Q=截止日最终有效合格验收原ID的去重数量，已做关联晚退/验收撤销替换；再售仍每ID仅计一次，不从最终有效集合再次扣撤销。实物毛交付、退款、实物退回、重复处理与最终有效性分别记录。仅正确SKU/批次、完整闭合瓶、正确实体柜台接收方及认可数量/状态合格；仅客户占有不算验收。晚退按实际事件日期修订原池分子、分母及S/F/T/O版本；新池不重复归属。 | original_id; final_acceptance; cutoff; return_link; prior_version; pool_id | Q |  |
| physical_ledgers | customer_pack; supplier_pack; transfer_pack; external_pack; failed_bottle | 仅商品Count平衡：G_close=G_open+receipts+physical_customer_returns-gross_customer_handover-supplier_handover-internal_handover-condemnation_count-confirmed_missing_count+signed_goods_residual。gross_customer_handover=initially_accepted_handover_count+never_accepted_at_handover_count，两者为互斥且不变的实际事件ID。customer_pack记录前者，external_pack记录后者，绝不是两行重复同一子集。后续验收/撤销或退回改变最终服务/来源责任，不改变原实物事件方向或初次交付类别。无移动的验收撤销仅重新分类原事件。报废是在内部把商品转为暂存废物。独立暂存废物kg：W_close=W_open+condemned_actual_kg+other_waste_received_kg-dispatched_actual_kg-confirmed_missing_waste_kg+signed_waste_residual。Count不是kg。报废ID关联另称整载体kg；出运直接用实测货批净kg，不再扣期初/期末或滞留库存。有符号未知残差须调查且阻断完整性。 | G_open; receipts; physical_customer_returns; gross_customer_handover; initially_accepted_handover_count; never_accepted_at_handover_count; supplier_handover; internal_handover; condemnation_count; confirmed_missing_count; signed_goods_residual; W_open; condemned_actual_kg; other_waste_received_kg; dispatched_actual_kg; confirmed_missing_waste_kg; signed_waste_residual | G_close; W_close |  |
| failed_source | failed_original | N_F=sum_s最终归F的原整瓶单元；输入量=N_F/Q。每原单元仅关联一次实际供应商完整配方/完整容器V_s，并按transport_ownership含原收货门上游运输。不可用纯表活或净液kg代理整包。成功S排除于SERVICE；下游GOODS可另加N_S*V_s/Q一次；T保留具名责任，O保留开放来源。失败原来源不可因卫星排除而消失。 | original_id; V_s; N_F; N_S; Q; attribution_level; owner_id; pool_id; version | failed_original |  |
| cleaning_origin | cleaner_pack; wash_water; dry_wipe; rinsate; wet_wipe; used_bottle | 逐个原来源j分别保留source_class=goods_F或janitorial；洒漏商品来源保留其相同failed_original父级，不再承担第二个cleaner_pack背景。门店自用清洁剂采用区别于商品的另购原ID，即使托盘在公用清洗槽清洗也选择同一7508636配方。该路线不把零售商品转自用库存。完整自用原包制造加上游运输来源仅归首次开封事件池一次；共享首次开封事件采用该批实测润湿托盘面积份额并合计1。后续领用/再用沿同一来源不重计制造/上游运输。未开封库存/退回/转移携未分配来源。逐来源独立将原液m_src_j kg归实际互斥最终去向；goods_F的dispatched_bottle_residue关联failed_bottle，janitorial关联used_bottle：未用滞留、留在湿擦布、留在瓶中、随瓶出运残液、随湿擦布出运、随冲洗液出运、经核实外部物种转移。在cutoff按来源ID和实测来源份额唯一分类：retained_unused仅为从未启用、无破损且原厂封口完整的原瓶中原液库存；retained_bottle仅为已开封或已破损原瓶在场留存的原液残余（无论是否已投料），排除retained_unused。逐瓶记录初始封口/首次开封/破损与截止状态及原来源测量ID；同一实测来源份额只能进入一个截止状态。封口/状态未知阻断完整性；状态转移以相同来源及测量份额替换旧状态，不同时保留旧新两桶。used是中间态：转rinsed时替换状态，不新增第二去向。逐来源采用截止日累计账：m_src_j=retained_unused+retained_wipe+retained_bottle+dispatched_bottle_residue+dispatched_wipe_origin+dispatched_rinsate_origin+verified_species_transfer+source_residual，保留原始数量和全部历史去向/版本更正；后续期间领用不新建原来源。新加冲洗水/污物/干擦布不是m_src_j。须有来源质量分析/示踪/经验证实际投料转移记录；不可由整个湿载体kg或标签活性%推断原配方kg。不可隐藏有符号来源残差。实际湿载体kg、来源kg和整包Count不同。 | bottle_initial_seal_state; first_open_at; damaged_at; cutoff_state; state_transition_id; source_measurement_id; measured_source_portion_id; retained_origin_kg; source_class; source_original_id; janitorial_original_id; first_open_id; m_src_j; retained_unused; retained_wipe; retained_bottle; dispatched_bottle_residue; dispatched_wipe_origin; dispatched_rinsate_origin; verified_species_transfer; source_residual; Q | source_origin_balance |  |
| direct_quantities | core_electricity; wash_water; dry_wipe; failed_bottle; rinsate; wet_wipe; used_bottle | 先保留实际原始/已归属分子X_r。电力为kWh期末表减期初表，必要时按3.6MJ/kWh仅换算一次；清洗供水为实测入口m3*rho_actual kg/m3，不二次扣内部回用水。rinsate为排出口直接整液净质量kg（或互斥的直接排液体积乘实测温度下密度），不得用供水平衡重建。failed_bottle、wet_wipe和used_bottle为直接出运整载体净kg；不再次施加库存或来源组成比例。干擦布原质量按首次使用称重并排除独立外包装；未用库存/退回携原来源，再用擦布不重计制造。外部标签/密度/活性百分比不可替代实际校准测量。各最终卡量=X_r/Q仅一次。 | meter_start; meter_end; meter_boundary; water_volume; rho_actual; temperature; discharge_mode; direct_net_kg; first_use_mass; source_id; pool_id; Q | X_r/Q |  |
| completion_aggregation | all inventory rows | 对每个兼容交换身份/属性/单位/边界r及原来源/池/版本，N_complete_r=N_core_raw_r+sum互斥N_external_raw_r+sum互斥z_external_r*D_original_r。原始外模块分子直接保留；仅已归一化z乘其有证原D以还原原始量。按实际来源层级先实施pool_allocation、digital_events、asset_lifetime和transport_ownership再汇总。N_core_raw含failed_original的N_F及core_electricity原分子，不是其已展示/Q卡量。跨来源ID比较实际组成/事件/时间/资产/阶段以去重；不同提供方ID本身不证明互斥。仅换算兼容单位，不得kg+MJ或原始量+归一化量；最终amount=N_complete_r/Q一次。遗漏/未绑定实际模块阻止完整经营声明。 | N_core_raw_r; N_external_raw_r; z_external_r; D_original_r; exchange_identity; property; unit; boundary; source_id; owner_id; pool_id; version; Q | N_complete_r/Q |  |
| card_numerators | all inventory rows | X_core_electricity=归属表计kWh；failed_original原分子=N_F；X_customer_pack=initially_accepted_handover_count；X_supplier_pack=实际完整瓶退供件数；X_transfer_pack=实际完整瓶店间交付件数；X_external_pack=never_accepted_at_handover_count；X_failed_bottle=直接出运破损整瓶kg。X_cleaner_pack=归属首次开封自用整包件数；X_wash_water=归属入口供水kg；X_dry_wipe=归属首次用干纤维素kg；X_rinsate=归属实际整液排放kg；X_wet_wipe=归属出运整个湿擦布kg；X_used_bottle=归属出运整个用后自用瓶kg。先记录直接原量，再按source_allocation归属；每个展示X的最终量为X/Q，failed_original为N_F/Q，service_output精确为1Item(s)。直接终端kg不再次乘来源组成或库存更正。 | gross_customer_handover; supplier_handover; internal_handover; initially_accepted_handover_count; never_accepted_at_handover_count; dispatched_actual_kg; first_open_count; water_volume; rho_actual; first_use_mass; raw_X_r; attributed_X_r; N_F; Q | card_raw_and_final_amounts |  |
| source_allocation | all inventory rows | pool_allocation采用X_ch=X_c*d_ch/sum_all_h(d_ch)，精确同单位合格来源驱动量及全部受益方；直接来源保留原归属不重复乘份额。digital_events采用w_eh=t_eh/sum_all_h(t_eh)，source_amount_h=source_amount_e*w_eh；摄像/留存仅乘冻结的原capture_m2h份额一次。连接来源按connection_share_h=reserved_endpoint_connection_s_h/sum_all_h(reserved_endpoint_connection_s_h)，attributed_connection_h=connection_source_h*connection_share_h；按digital_events只有exact_final_owner_pool_version为真才不重复该责任方份额。asset_lifetime暂估f_ah=e_ah/L_a、最终f_ah=e_actual_ah/sum_all_h(e_actual_ah)，逐历史池替换delta=f_new_ah*V_new_a-f_old_ah*V_old_a。transport_ownership采用attributed_trip_source_amount=trip_amount*source_share及final_owner_amount=attributed_trip_source_amount*owner_share，仅有精确相应attribution_level证据才跳过该层。这些为来源分子计算，不是又一次最终/Q。 | connection_source_h; reserved_endpoint_connection_s_h; all_connection_beneficiaries; connection_interval_id; exact_final_owner_pool_version; X_c; d_ch; all_beneficiaries; t_eh; source_amount_e; capture_m2h; e_ah; L_a; e_actual_ah; f_old_ah; f_new_ah; V_old_a; V_new_a; trip_amount; source_share; owner_share; attribution_level; original_source_id; owner_id; pool_id; version | attributed_X_r; historical_delta |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | all inventory rows | 将实际身份、状态、批次、来源及完整BOM/背景边界与原厂规格分开核实；当前每未绑定行须满足identity_gate。 | 官方直接原件/收据及供应商现场记录 |
| q_coverage | retail; hygiene | 覆盖全部期间/受益方，包含关闭/失败/零销量池、晚期替换、原始来源量及签字缺席；未知及实质残差阻断完整性。 | 全部事件/表/来源/版本账及校准不确定性 |
| q_modules | all inventory rows | 完整SERVICE前以原子双语卡和真实采集字段执行module_completion；不允许下游自选驱动量、分子边界或最终分母。 | 来源组成重叠矩阵及行/协议对账 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| complete_gate | all inventory rows | Q<=0、验收/来源/库存账未解决、实际来源/接收方/状态未核实、必要模块缺失、驱动量不受支持、原分母缺失、提供方范围重复或UUID未直接核实，均拒绝完整性。保留全部零销量记录和不确定性。本候选不构成安全、法律合规、完整GHG标准符合、科学批准或发布批准。 |  |
| identity_gate | all inventory rows | 当前所有行均未采用Tiangong UUID。数据包完成前须逐精确行以亲读官方原响应及匹配的重算hash完整性收据绑定：公开状态、双语baseName、Product/Waste/Elementary方向/类型、精确配方/包装或服务边界、参考属性/单位链及适用外部compartment。搜索命中、形似UUID的外部UFI或原厂规格不是流绑定或量化LCI。身份不符须换经核实的行，不可静默替代。 |  |
| incident_gate | retail; hygiene | 须有签字日检的发生/缺席证据和实际事件对账，覆盖受控及未受控损失。室内空气制剂/醇来源不自动为外部基本排放。实际发生物种须有物种专属实测进/出量、空气/捕集存量、实际回收/非空气外运及最终外部介质；原始绝对量、差分量、已校空白量为互斥模式，背景仅去一次。未知或未解释的有符号负差阻断完整性；不得将负差截为零，不得自动计为排放或给予吸收抵扣，也不得套用密封包默认值。保留实际配方原来源及实测终端载体，不重复捕集。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | partial_incremental_retail_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 匹配实际SKU/状态/路线的增量服务；按固定法补齐后才为完整SERVICE；GOODS另加S一次 |
| excluded_use | 洗涤功能比较；全叶覆盖；商品全生命周期或完整经营未经补齐声明；不相同配方/渠道 |
| required_metadata | 原ID/批次/BOM/门店/期间/Q/原来源及版本/映射权威/模块状态 |
| required_quality_disclosure | 所有未绑定身份、不确定性、实际缺席、补齐缺口、残差与零产出池 |
| update_trigger | 实际配置/来源/路线/验收/寿命/向量/后期退回变化，替换全部相关历史版本 |

## 11. 数据源

| Source id | Type | Reference | Use |
| --- | --- | --- | --- |
| un-cpc62176 | official_guidance | UNSD CPC3.0 62176 explanatory note: https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62176 | 3531/3533分类边界；仅分类说明，不构成映射接受决定 |
| un-cpc35334 | official_guidance | UNSD CPC3.0 35334: https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/35334 | 含磨粒去污制剂分类边界；不证明现场使用或完整配方。 |
| cif-product | handbook | Pro Formula/Diversey Cif Professional Cream Cleaner Lemon 2L，货号7508636：https://www.proformula.com/gb/en/products/cif-professional-cream-cleaner-lemon-2l/ | 真实货号/原2升配置、硬表面去污微粒及用后漂洗用途；不证明场址库存、完整BOM/LCI或默认用量。 |
| cif-sds | handbook | 厂家产品页所链Cif Professional Cream Lemon SDS，2021-09-19 v05.2，第1–2页：https://cdn.sanity.io/files/s229angm/production/8942f2a17386bbe01fa569950bbc0a35ae22f43f.pdf | 硬表面用途和历史碳酸钙组分支持；不是现批完整配方、默认浓度/密度、排放因子或安全批准。 |
| ghg-product | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard2011, ch6–7,9: https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 服务功能/参考流及细分优先的一般原则；本PCR专属公式是现场设计，不声称全标准符合 |
| jrc-retail | official_guidance | JRC Best Environmental Management Practice in Retail Trade Sector2013 EUR25998EN, executive summary and energy/waste/water sections: https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | 零售能源/水/化学品/运输/废物清册范围；无基准数值借用 |
