---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-miscellaneous-household-utensils-cutlery-d57383d8
status: candidate
language: zh-CN
sync_with: pcr.en-US.md
---

# 单件OFTAST钢化乳白玻璃盘的非专门实体店零售部分增量服务

## 1. 范围与适用性

本PCR适用于非专门步入式实体店一项明确为部分边界的增量零售服务，仅针对同一SKU：宜家OFTAST白盘，货号302.589.13，直径25 cm，材质为钢化乳白玻璃。制造商描述的是类似骨瓷的外观，而非陶瓷成分。按单盘计数，不以套、箱或千克计数。其他尺寸、陶瓷或釉面器皿、涂层塑料器皿、金属餐具以及混合套装均不适用。该窄材质身份决定破损处理及来源连续性。资格限定为有文件证明无热调节的门店/建筑路线及电动非热调节道路物流，不存在燃烧、含制冷剂设备或外购供热/供冷；资格未知阻止使用。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-miscellaneous-household-utensils-cutlery-d57383d8 |
| classification_refs | CPC 3.0:62145; narrower |
| covered_products | 本PCR适用于非专门步入式实体店一项明确为部分边界的增量零售服务，仅针对同一SKU：宜家OFTAST白盘，货号302.589.13，直径25 cm，材质为钢化乳白玻璃。制造商描述的是类似骨瓷的外观，而非陶瓷成分。按单盘计数，不以套、箱或千克计数。其他尺寸、陶瓷或釉面器皿、涂层塑料器皿、金属餐具以及混合套装均不适用。该窄材质身份决定破损处理及来源连续性。资格限定为有文件证明无热调节的门店/建筑路线及电动非热调节道路物流，不存在燃烧、含制冷剂设备或外购供热/供冷；资格未知阻止使用。 |
| excluded_products | 其他材质/SKU/套装；线上/配送/专门店；盘完整制造/使用/处置 |
| representative_product | 宜家OFTAST 302.589.13白色25cm单件钢化乳白玻璃盘 |
| production_route | 无加热常温人工陈列、有人结账、顾客自提；部分支持边界 |
| market_state | 全新完整单盘；记录实际供应包装及附着组件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一件OFTAST白色25 cm钢化乳白玻璃盘的实体店零售部分增量服务 |
| How much | 一件具有最终有效验收的不同原盘 |
| How well | 规定SKU完整且无划痕/缺口；不隐含食品安全认证 |
| How long or cycle | 事先声明池期间及最终截止，并披露寿命/来源后续更正 |
| reference_flow_link | accepted_service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 一件OFTAST白色25 cm钢化乳白玻璃盘的实体店零售部分增量服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 门店及非专门渠道; SKU/批次; 完整BOM及实际供应包装; 收货门及供应合同; 池/截止及验收版本; Q; 失败/未结/转移来源责任; 部分支持排除及补齐; 实际废物状态/接收方 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_count | accepted_service; supplier_return; external_unaccepted; failed_supply | 物品数量 | Item(s) | 一个服务为一个原盘验收；实物交接事件与供应来源当量为不同件数账本；没有实际盘ID不得换算包装/套件数。 |
| electricity_energy | electricity | 净热值, 低位热值 | MJ | 采用实际kWh*3.6；不以额定功率或标称盘质量代替用电。 |
| carrier_mass | intact_plate_waste; plate_fragment_waste; cardboard_waste; pe_film_waste | 质量 | kg | 称量实际完整载体，仅扣一次实测外部收集容器皮重；不使用目录包装质量或纯盘体质量默认值。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际完整盘及运输包装位于门店收货门；保留原来源责任 |
| starting_condition_role | foreground_gate |
| product_classification_scope | CPC 3.0:62145 narrower |
| recursive_input_rule | 不递归零售服务；供应盘生产为不同来源，退货/转售复用原来源ID |
| upstream_dataset_requirement | 精确已验证整件供应或互斥组件加运输来源；失败F纳入，验收S留待补齐 |
| disclosure | 仅部分增量零售；全部必要支持及验收生产排除明确保留 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| route | retail | 仅适用于事先固定的门店/SKU/供应商配置及池期间：收货、无加热的常温陈列与人工搬运、有人值守结账、顾客自提及实际废物交接。本路线不允许门店洗盘、食品演示、维修、零售商新增包装、纸质小票或配送。以收货观察、POS配置、作业规程与计量图证明存在或不存在；路线改变或未知时，须增加具名原子流卡、协议及双语规则后方可使用；供应商运输包装仍纳入。 资格还要求门店/建筑服务有文件证明无热调节、燃烧、制冷剂设备或外购供热/供冷，物流为有证据的非热调节电动道路运输。排除系统存在或未知即不适用此固定PCR路线，不能设零。 |  |
| partial | retail | 纳入小计为：库存/验收记录、归属的陈列/收银使用点电力、失败原货在收货门的供应责任及所列实际废物交接。未纳入建筑与装修制造/安装/终末处置、货架、推车、收银设备、照明和风机资本、清洁作业/工具、场外物流、员工/顾客出行及验收商品生产。这些必要支持不是零。每项实际支持均执行completion_calc和support_calc后方可撤销PARTIAL状态；不得把小计宣传为完整零售或玻璃盘全生命周期。 |  |
| acceptance | accepted_service | 为每个原盘赋予持久ID（供应批次加逐件账本ID）、保管事件ID和验收版本。Q为声明截止时点具有最终有效约定验收的不同原盘ID数量，每个原盘只计一次，并核查SKU、完整且无划痕/缺口及顾客交接记录。重复结账/转售不得为同一原盘新增服务。即使没有实物退回，撤销验收也使有效性消失；仍有效验收下的纯退款/折扣不影响Q。外部保留但未验收者不计入。截止与后续事件政策须由前景事先声明，不套用制造商退货期限。 | ikea-oftast-30258913 |
| custody | retail | 商品件数采用纯商品库存平衡而非验收Q：G_open + N_receipt + N_customer_return = G_close + H_gross + U_supplier + C_condemned + L_missing + T_internal。H_gross包括失败/重复等每次实物顾客交接；实际退回记入N_customer_return。C_condemned为商品转为待运废物的内部转换，仅从商品扣一次；废物发运不得再次扣商品。遗失件与内部展示件关联原ID及终端责任人；T来源责任转移不得虚构物理交换。 |  |
| source_ownership | failed_supply | 在同一实际收货门识别每个来源s：完整原盘包括实际玻璃/添加物、表面处理与附着标签/胶，及其实际原运输包装、入店运输。取得供应商完整型号/BOM、精确服务分母及边界。每个原盘当量来源N_s保持N_s = S_s + F_s + O_s + T_s：最终验收S；不可恢复失败或外部未验收保留且本方负责F；实物/来源责任未结库存O；有文件证明责任已转移T。依据原件身份/历史确定份额，不按任意质量比例拆环境向量。退供应商若无后续责任人文件即未解决，不能自动T或抵扣。碎片仅继承同一个原来源。 |  |
| waste_states | waste | 完整报废盘、盘碎片载体、瓦楞纸板包装及聚乙烯包膜分别作为实测载体。查明实际收货包装成分；PE身份需供应商/实物证据，不凭目测猜测。玻璃载体包括实测附着标签/涂层及具名接收方允许的污染物，不能代换纯二氧化硅。未知材料或不同混合载体须在完整性前增设具体流卡。各待运废物保持W_open + W_generated + W_received = W_close + W_dispatched + W_other_transfer；净联单质量已是发运量，不再按库存平衡修正。 |  |
| external_states | supplier_return; external_unaccepted | supplier_return仅表示完整同SKU盘实际退交具名供应商，不包含破损退货。external_unaccepted仅表示实际交顾客但外部保留且最终验收无效的完整同SKU盘；记录实际接收人、位置、状态及持续背景责任。未退实物的验收撤销改变Q/来源版本，不产生新物理交接。外部破损留存、捐赠或破损退供应商须在完整性前另设状态卡及责任；不可自动成为门店废物。 |  |
| scope_presence | retail | 不默认规定盘质量、损失率、密度、合规限值或回收抵扣。制造商包装质量不是盘净质量；消费者护理不是门店工序。核查门店、建筑支持及物流路线无热调节、燃烧、含制冷剂设备或外购供热/供冷。绘明普通电力、实际非热调节通风风机及完整资本。热/燃烧/制冷剂系统存在或未知即不符合资格，不得将燃料/物质选择推给后续建模者。 | ikea-oftast-30258913 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | 库存/陈列/收银与来源责任 | required | 一个合格路线及事先声明池 | foreground | Q |
| waste | 待运废物实际交接 | conditional | 实际载体存在；逐载体证明不存在或记录未知 | foreground | Q；原始kg独立保留 |

### 过程：零售运行 (`retail`)

#### 输入

##### 产品流

###### 交流电 (`electricity`)

已绘陈列/收银电路的使用点电力；流身份未指定供应方及电压。实际电网/供应背景须另行选择，不得重复支持模块电表。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值, 低位热值 / MJ
- 数量规则：E_target/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_power`
- 来源：

###### 一件完整OFTAST 302.589.13盘从摇篮到收货门的供应服务 (`failed_supply`)

一个精确供应合同服务：包括完整原盘、附着标签/涂层、实际原运输包装及入店运输，按cp_supply固定供应方/BOM/参考分母。仅F，不是全部收货也不是泛称材料集合。合同未验证时不能使用背景。

- 选定流：一件完整OFTAST 302.589.13盘从摇篮到收货门的供应服务
- 流属性/单位：物品数量 / Item(s)
- 数量规则：sum_s F_s/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_supply`
- 来源：

#### 输出

##### 产品流

###### 一件OFTAST白色25 cm钢化乳白玻璃盘的实体店零售部分增量服务 (`accepted_service`)

对一件原始规定完整盘提供的一次最终有效零售验收服务。此服务流不同于玻璃盘制造，UUID仍未绑定。

- 选定流：一件OFTAST白色25 cm钢化乳白玻璃盘的实体店零售部分增量服务
- 流属性/单位：物品数量 / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_goods`
- 来源：`ikea-oftast-30258913`

###### 实际退交供应商的完整OFTAST 302.589.13盘 (`supplier_return`)

实际完整状态的整件原盘，含原附着组件。具名接收人接受该状态；持续来源责任与本实物事件件数独立。

- 选定流：实际退交供应商的完整OFTAST 302.589.13盘
- 流属性/单位：物品数量 / Item(s)
- 数量规则：实际完整盘退供实物交接次数/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_goods`
- 来源：

###### 交接后被外部保留且最终验收无效的完整OFTAST 302.589.13盘 (`external_unaccepted`)

完整实盘交具名顾客但没有合格最终服务。后续撤销验收且不退货者保持外部状态记录，不产生额外交接，也不自动成为门店废物。

- 选定流：交接后被外部保留且最终验收无效的完整OFTAST 302.589.13盘
- 流属性/单位：物品数量 / Item(s)
- 数量规则：匹配实物交接事件/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_goods`
- 来源：

### 过程：实际废物交接 (`waste`)

#### 输出

##### 废物流

###### 完整报废OFTAST乳白玻璃盘载体 (`intact_plate_waste`)

未碎裂报废整盘及实际附着标签/涂层和接收方允许的污染物，独立暂存后交具名废物供应方。商品报废转换不等于实际发运交接。

- 选定流：完整报废OFTAST乳白玻璃盘载体
- 流属性/单位：质量 / kg
- 数量规则：实际完整载体净发运kg/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：

###### 碎裂OFTAST乳白玻璃盘载体 (`plate_fragment_waste`)

规定盘的实际碎片/细屑及实测附着原标签/涂层和允许污染物，为接收方实际接受的一个载体。与完整盘载体区分；不代换纯二氧化硅，不为碎片再次增加制造来源。

- 选定流：碎裂OFTAST乳白玻璃盘载体
- 流属性/单位：质量 / kg
- 数量规则：实际完整碎片载体净发运kg/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：

###### 废弃瓦楞纸板运输包装载体 (`cardboard_waste`)

实际供应商瓦楞纸板运输包装，分拣交具名供应方；称量载体包含实际接收方允许的附着胶带/标签。包装生产归原供应来源，不再列新门店材料输入。

- 选定流：废弃瓦楞纸板运输包装载体
- 流属性/单位：质量 / kg
- 数量规则：实际瓦楞载体净发运kg/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：

###### 废弃聚乙烯运输包膜载体 (`pe_film_waste`)

仅限证实为聚乙烯的供应商包膜，含实际允许污染物，分拣并在供应方交接时称量。其他聚合物/复合包膜不得选本卡。不假定收货包装存在或聚合物纯度。

- 选定流：废弃聚乙烯运输包膜载体
- 流属性/单位：质量 / kg
- 数量规则：实际PE载体净发运kg/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| pool | retail | 观察前声明同配置池，包含闲置、闭店、失败与零销售期间。整池Q=0时保留所有原始分子并标为不可归一；仅可并入事先声明的后续兼容池，或保持未归一披露。不得删除失败时段或只选成功交易。延迟退货/验收/来源修订须替换原池Q、每项受影响分子和去向版本；使用更正账本，不得又向新队列收费。 |  |
| electricity_allocation | electricity | 优先采用独立直接计量。共享总表时按不重叠表/时段ID区分实测的收银活动、陈列照明和闲置分量，并与总MJ核对。收银活动按包括失败尝试的实际服务秒数；陈列按所有货物占用货架面积*h；闲置按所有受益者保留货架面积*h分配。各分量使用自己的同单位驱动，不能把秒与m2*h相加。驱动总量为零/未知时，将完整分量池结转至事先声明的兼容时段或判定归属失败；不能消失。仅在子表位于父表范围内时扣减；独立电表不得重复扣减。 |  |
| source_allocation | failed_supply | F_s是精确整件供应服务合同下的原盘来源当量件数。背景乘N_s前，供应方须证明每原盘完整组件来源向量、实际包装和入店边界。在已验证整件供应包与实际组件供应向量加入店运输之间二选一，互斥。若无独立组件来源向量，不得按玻璃/标签/胶质量拆原盘环境向量。责任转移保留同来源ID及所有历史更正；内部展示件不得新获第二个制造来源。 |  |
| support_allocation | retail | 各排除但必要的支持保留独立完整原始来源池及精确来源ID，优先直接细分，再作因果分配。空间/照明/非热调节风机的各独立占用池使用面积*h；各清洁/收银活动池使用实测任务秒，包含全部受益者、闭店/闲置/失败时段。载货电动道路活动为实际tonnes_btl*segment_km_tl并有文件来源/供应方归属。逐未覆盖空驶段及静止怠速区间，按support_calc固定同段payload_reserved_kg_btl*actual_reserved_h_btl权重分配完整车辆km或实测怠速MJ分子。不得相加不同驱动量纲或载货/空驶/怠速活动。供应方已归属货运量仅用一次，重建仅作QA。各来源池与实测父总量核对；权重零/未知或残余未解决阻止补齐。 |  |
| asset_lifetime | retail | 补齐资本台账包括实际完整建筑/装修、货架、推车、收银设备、安装照明/非热调节风机总成，完整BOM/安装边界、全寿命更换历史及最终载体。每个资产j/来源/版本仅赋值一次：a_jbt=e_jbt/L_j，e与预期全寿命L单位一致（建筑可用m2*h、货架用货架面积*h、设备用运行h）。全部受益者与期间核对累计a<=1；退役时用实际寿命暴露替换每项历史分配并分配最终残余，守恒原来源分子。L修订替换旧版本，不能重新开始制造。制造/安装、运行、实际维护更换及终末处置互斥；已验证整包内组件不得另收费。最终完整载体kg仅乘一次最终责任比例，不再乘制造比例。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | retail | accepted_service; supplier_return; external_unaccepted | 商品及来源版本账本 | pool_id; store_id; SKU; supplier_lot; original_plate_id; complete_BOM; receipt_gate; source_id; supply_contract_id; provider_boundary; source_vector_V_s; N_s; S_s; F_s; O_s; T_s; owner_id; prior_version; event_id; gross_physical_count; state; recipient_id; acceptance_version; final_valid_acceptance; cutoff; gross_handover_event_id; revocation_event_id; G_open; N_receipt; N_customer_return; G_close; H_gross; U_supplier; C_condemned; L_missing; T_internal; Q | 扫描收货并赋持久逐件ID，核对照片、保管签字、验收/退货及供应来源文件；不以付款单独推断验收。 汇总细节：service_calc；source_calc；transfer_calc；保管与来源账本分离 | Item(s); kg component records | 逐事件及截止修订 | 全池及历史来源/事件链接 | 一个非专门门店、一个实际供应配置 | 每参考流 | 事件签字；BOM；责任确认；后续修订日志 |
| cp_supply | retail | failed_supply | 供应合同及背景账本 | source_id; supply_contract_id; complete_BOM; provider_boundary; source_vector_V_s; N_s; S_s; F_s; O_s; T_s; owner_id; prior_version; original_plate_id; Q | 取得每原盘的实际完整盘、标签/涂层、运输包装及入店服务合同；验证背景精确分子/分母，防止组件运输或生产重复。 汇总细节：source_calc；退货/转售/碎裂保持同来源 | source-equivalent Item(s) | 逐来源/版本变化 | 原收货至最终责任 | 实际供应商至门店收货门 | 每参考流 | 供应商模型及签字边界；来源守恒 |
| cp_power | retail | electricity | 电表与受益者驱动账本 | pool_id; E_kWh; meter_id; parent_boundary; E_direct; E_component_c; component_interval_id; d_target_c; d_bc; driver_unit_c; active_seconds; display_m2_h; idle_reserved_m2_h; calibration; uncertainty; Q | 在时段边界读取实际电表，绘制嵌套与全部用户；独立测量实际收银时间和占用/保留货架面积时间；保留闲置/闭店/失败时段。 汇总细节：electricity_calc；分量核对完整父表；仅归一一次 | kWh; MJ; s; m2*h | 逐时段及配置变化 | 全池含Q=0时段 | 仅陈列及收银电路；另绘支持电路 | 每参考流 | 电表校准；时间/面积证据；核对残余 |
| cp_waste | waste | intact_plate_waste; plate_fragment_waste; cardboard_waste; pe_film_waste | 载体联单及待运库存账本 | carrier_id; consignment_id; source_plate_ids; state; provider_id; provider_admission; material_evidence; gross_kg_kv; measured_container_tare_kg_kv; attribution_kv; held_open_kg; generated_kg; received_kg; held_close_kg; other_transfer_kg; measurement_mode; scale_id; calibration; uncertainty; Q | 发运时以独立实测容器皮重称实际完整载体净量；记录完整/碎片及实际附着组件/污染物、包装材质、接收方许可和来源ID；生成/待运移动与商品件数及发运分离。 汇总细节：waste_calc；库存方程仅独立QA；直接称量与重建互斥 | kg | 逐生成/交接/联单及池结尾 | 全池及期初/末待运库存 | 具名实际门店待运及供应方交接 | 每参考流 | 称量/皮重票；照片；签字处理边界；载体账本 |
| cp_support | retail | support_completion | 补齐模块及持久资产账本 | module_id; source_id; source_boundary; all_beneficiary_driver; driver_unit; e_jbt; L_j; historical_versions; actual_replacement_event_id; final_carrier_kg; formulation_kg; formulation_destination_kg; source_parent_id; formulation_previous_state; imported_water_m3; effluent_mode; free_liquid_direct_net_kg; discharge_m3; effluent_density_kg_m3; density_temperature; outside_transport_container_tare_kg; whole_wet_wipe_kg; intrinsic_container_residue_carrier_kg; tool_id; tool_exposure; tool_total_lifetime; actual_component_BOM; complete_module_unit; custody_event_id; recipient_state; no_thermal_equipment_evidence; no_combustion_evidence; no_refrigerant_evidence; no_purchased_heat_cooling_evidence; electric_vehicle_evidence; transport_trip_id; transport_segment_id; transport_beneficiary_id; actual_loaded_tonnes_btl; actual_segment_km_tl; empty_vehicle_km_tl; idle_electricity_MJ_tl; payload_reserved_kg_btl; actual_reserved_h_btl; actual_payload_capacity_kg; unreserved_capacity_kg; provider_inclusions; Q; exchange_identity_r; property_r; unit_r; q_m; x_m; X_included_r; X_target_mr; accepted_source_S_r; attribution_version; source_overlap_map; completeness_status | 按support_calc读实际完整清洁/资本/电动物流合同及直接测量。核查场址/建筑/物流无热调节、燃烧、制冷剂设备及外购供热/供冷。逐事件采集实际载体、配方父来源、同路段容量预留及寿命记录，不采用泛重建。保留全部受益者、历史版本；覆盖未知保持不完整。 | 每项实际交换单位；各池同单位e/L及驱动 | 逐时段、事件、更换、寿命修订及最终退役 | 全部历史版本及整个后续寿命责任 | 实际门店及外部模块供应方并绘边界 | 每参考流 | 已验证合同；校准；历史更正台账；模块重叠审计 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| service_calc | accepted_service | Q = 截止时final_valid_acceptance=true的不同original_plate_id数量；Q>0时服务量=Q/Q=1。毛保管及撤销次数仅核查，不从最终有效ID数再次扣除。 | original_plate_id; acceptance_version; final_valid_acceptance; cutoff; gross_handover_event_id; revocation_event_id | Q及单服务输出 |  |
| electricity_calc | electricity | E_MJ = 3.6*E_kWh；E_target = E_direct + sum_c(E_component_c*d_target_c/sum_b(d_bc))；归一量=E_target/Q。分量表与直接表互斥。原始量→归属量→归一量仅一次。 | E_kWh; meter_id; parent_boundary; E_direct; E_component_c; component_interval_id; d_target_c; d_bc; driver_unit_c; Q | 每服务MJ |  |
| source_calc | failed_supply | 各已验证供应来源s：N_s = S_s+F_s+O_s+T_s；仅在同一服务规格内failed_supply = sum_s F_s/Q。不同供应包保留逐来源交换。实际背景向量F_s*V_s/Q仅在收货门耦合一次；补齐时加S_s*V_s/Q一次；O继续结转；T跟随有文件的接收方且无避免生产抵扣。同一原来源贯穿转售、破损和退回。 | source_id; supply_contract_id; complete_BOM; provider_boundary; source_vector_V_s; N_s; S_s; F_s; O_s; T_s; owner_id; prior_version; Q | 每服务来源当量Item(s)及背景耦合台账 |  |
| transfer_calc | supplier_return; external_unaccepted | 两卡分别按实际唯一event_id与匹配original_plate_id/状态/接收方计实物交接次数，再除Q。退回再发的同盘可有多个实物事件，但至多一个最终有效验收服务。后续仅撤销而无移动时不增交接。 | event_id; original_plate_id; gross_physical_count; state; recipient_id; Q | 各独立交接卡每服务Item(s) |  |
| waste_calc | intact_plate_waste; plate_fragment_waste; cardboard_waste; pe_film_waste | 各实际载体k及联单v：M_kv = gross_kg_kv - measured_container_tare_kg_kv；M_target_k = sum_v M_kv*attribution_kv；量=M_target_k/Q。直接发运称量与原组件重建互斥。直接净载体不得再扣附着组件或待运库存移动。按接收方实际接受的完整碎片载体称量，含污染及附着标签。完整盘与碎片载体互斥。 | carrier_id; consignment_id; gross_kg_kv; measured_container_tare_kg_kv; attribution_kv; source_plate_ids; held_open_kg; generated_kg; received_kg; held_close_kg; other_transfer_kg; measurement_mode; Q | 各载体每服务kg |  |
| support_calc | retail | 仅在固定无热调节路线下补齐支持：证明门店、建筑服务及所纳入物流服务中不存在燃烧、含制冷剂设备或外购供热/供冷。不得按回路损失平衡估算制冷剂排放。热系统存在或未知使本PCR不适用，须另用已审方法。非热调节通风风机仍需实测电力及完整资本并保留全部历史版本。清洁：逐实际完整配方kg和外供水分别测量。已用配方是中间态；后续冲洗带走/保留事件替换同一父来源旧状态，不新增去向。配方来源kg仅在最终未用/退回、自由液体、湿擦布及原清洁容器残留去向之间互斥核对一次；新增冲洗水/污物不属于配方来源。三个实际物理载体账本互斥：自由清洁废液、完整湿擦布、完整原清洁容器及残液。每联单自由液体恰选一个直接模式：经校准实测完整液体净kg（仅扣实测外部可重复收集器皿皮重），或者实际排水体积m3乘记录条件下实测有代表性的完整废液密度kg/m3。不得使用质量平衡重建、从供水推断或重复V*rho。完整湿擦布直接称重，包括布体及附着水/清洁剂/污物；完整原容器残液载体包括实际完整容器/封闭件/标签及剩余液体。仅扣实测外部运输桶皮重，不能再扣原擦布/容器。配方来源账本仅作去向QA，不构成第二实物出口，也不再给完整载体乘份额。逐实际清洁工具/擦布定义完整BOM、购入来源、自身同单位tool_exposure/tool_total_lifetime及完整寿命更换历史；整件寿命服务与独立组件来源互斥。资本包括实际完整建筑/装修、货架、推车、POS、照明/风机和清洁工具，不含热设备。对唯一已验证制造/安装来源赋a=e_jbt/L_j；寿命修订替换每个历史受益者分配；实际维护/更换事件向量另计；实际完整终末载体仅乘一次最终寿命责任。无独立组件清单向量不得按组件质量拆来源向量。运输限定有证据的电动道路车辆服务，无燃烧或制冷剂/货物热系统。逐实际载货行程t/路段l/受益者b：A_btl=实际载货tonnes_btl*实际segment_km_tl。核查供应方是否覆盖实际载货、空返及静止怠速。若供应方已归属的货运量包含这些活动，所供量仅采用一次；重建仅为QA。否则对未覆盖空驶采用互斥实测电动车辆km活动，对未覆盖静止怠速采用实测MJ。逐空驶段按w_btl/sum_b w_btl分配其实际vehicle_km_tl，其中w_btl=同一路段payload_reserved_kg_btl*actual_reserved_h_btl。逐静止怠速区间采用同一比率和实际正的怠速保留小时，分配实测怠速MJ而非零t*km。记录实际有效载荷kg容量、全部预留/受益者及未预留容量；分配全部来源分子，不得删除零驱动池；残余未解决/驱动为零保持不完整。不得把载荷kg与小时相加或以目录容量/质量作为实测活动。载货、空驶及怠速供应边界须互斥，覆盖未知阻止补齐。 | module_id; source_id; source_boundary; all_beneficiary_driver; driver_unit; e_jbt; L_j; historical_versions; actual_replacement_event_id; final_carrier_kg; formulation_kg; formulation_destination_kg; source_parent_id; formulation_previous_state; imported_water_m3; effluent_mode; free_liquid_direct_net_kg; discharge_m3; effluent_density_kg_m3; density_temperature; outside_transport_container_tare_kg; whole_wet_wipe_kg; intrinsic_container_residue_carrier_kg; tool_id; tool_exposure; tool_total_lifetime; actual_component_BOM; complete_module_unit; custody_event_id; recipient_state; no_thermal_equipment_evidence; no_combustion_evidence; no_refrigerant_evidence; no_purchased_heat_cooling_evidence; electric_vehicle_evidence; transport_trip_id; transport_segment_id; transport_beneficiary_id; actual_loaded_tonnes_btl; actual_segment_km_tl; empty_vehicle_km_tl; idle_electricity_MJ_tl; payload_reserved_kg_btl; actual_reserved_h_btl; actual_payload_capacity_kg; unreserved_capacity_kg; provider_inclusions; Q | 按交换/来源区分的支持原始分子及部分状态 |  |
| completion_calc | retail | 各排除模块保留实际单位/BOM/供应方/参考分母q_m、归一版本、source_id及全部受益者原始分子。外部归一交换x_m先按其文件还原X_m=x_m*q_m，再进行兼容目标归属。仅对相同交换身份/属性/单位r加互斥目标原始分子：X_complete_r = X_included_r + sum_m X_target_mr + accepted_source_S_r。边界处按精确来源ID去重公用工程、运输、资本、包装及处理；旧版本须替换不能相加。最后仅归一一次X_complete_r/Q。不得加kg与MJ或Item(s)、不同载体/物质或原始量与归一量。员工/顾客出行须以实际路线及全部方式明确纳入，否则保持具名部分排除。完整业务声明须具备所有实际必要模块的状态原子卡、双语协议及已验证边界，不能仅用此小计。 | module_id; source_id; exchange_identity_r; property_r; unit_r; q_m; x_m; X_included_r; X_target_mr; accepted_source_S_r; attribution_version; source_overlap_map; completeness_status; Q | 补齐的兼容交换量或明确部分小计 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_quality | retail | 记录实际制造商/SKU/批次及供应的完整盘/标签/涂层/包装BOM；供应证据须区分钢化乳白玻璃与陶瓷。不推断纯二氧化硅或未定义套装。OEM页面仅支持身份/护理，不支持场址数量、完整制造清单或包装皮重。 | 收货照片；供应商规格；实际配置比对 |
| measure_quality | retail; waste | 保留校准表/秤ID、不确定性、分辨率、时间戳及皮重记录，核查整个期间及库存闭合。未知不是零；调查有符号差异。每流均有原始总量、归属分子及一次Q归一。 | 校准记录；联单；计量图；核对 |
| closure_quality | retail | 审计全部原ID及来源N=S+F+O+T版本，覆盖后续事件、零产出期间和商品/废物分离。终端供应商/顾客/废物接收方须接受实际状态。拒绝背景、发运或验收重复。 | 版本队列账本；接收方签字；独立事件核查 |
| completion_quality | retail | 全部未补模块保留明确PARTIAL状态及具体证据缺口。各未绑定卡须取得官方流原响应及完整性回执、公开状态、双语名称、类型/状态/介质、属性单位链及匹配背景/处理边界后方可绑定。身份缺失仅可处于候选，不得作为完整二级数据集。 | 官方原件；模块合同；重叠图；独立方法及双语审查 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_check | retail | 拒绝SKU/单件/材质/无热调节门店/电动非热调节物流路线之外适用。热调节、燃烧、制冷剂系统或外购供热/供冷存在或未知即不符合此固定路线，不是推迟选择的可选燃料/物质。其他包装、清洗、小票打印或新增袋未知时为阻断范围缺口；应用改变的路线前须另作受审支持扩展。 |  |
| quantity_check | retail | 归一要求Q>0及最终有效原ID精确审计；分别核对商品毛保管、待运废物及来源责任。确认无退货的验收撤销移除服务但不虚构实物事件。 |  |
| source_check | failed_supply | 要求同收货门完整来源合同及N=S+F+O+T闭合；无独立组件向量不得按质量拆环境来源。保留验收S的上游补齐责任与O/T后续责任。 |  |
| allocation_check | electricity; waste | 核对同单位全部受益者池、直接/共享互斥、计量嵌套、联单皮重及单次归一。驱动零/未知或残余未归属阻止完整归属。 |  |
| completion_check | retail | 所有实际模块与验收来源S按completion_calc还原并完成来源去重、资产全寿命修订、实际维护及终末载体互斥、空驶/怠速运输及固定无热调节/无燃烧/无制冷剂路线证据前，不得声称完整零售。身份未绑定、数量/供应覆盖未知或出行排除保持明确部分/未定结论。本PCR不默认建立标准合规性。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 部分增量前景零售服务 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 候选方法开发；所有身份及支持门槛满足后方可成为补齐的场址模型 |
| excluded_use | 以小计进行完整业务或玻璃盘全生命周期比较；无依据合规或环境排名 |
| required_metadata | 全部参考限定；实际来源/模块版本；原始池/Q；PARTIAL及排除模块表；实物与责任账本 |
| required_quality_disclosure | 未绑定身份；未知数量；校准/不确定性；后续事件；全部支持缺口；不声明合规 |
| update_trigger | SKU/材质/BOM/来源/路线/计量/供应方变化、退货、验收撤销、资产寿命修订或补齐范围变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-62145 | official_guidance | UNSD CPC Version 3.0 subclass62145 explanatory note; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62145 | 分类背景：家用塑料/玻璃/陶瓷/金属货物；不声称覆盖整个叶节点 |
| ikea-oftast-30258913 | standard | IKEA OFTAST plate white25cm article30258913 manufacturer specification; https://www.ikea.com/se/en/p/oftast-plate-white-30258913/ | 具体单盘材质/尺寸身份及损伤/护理区分；不是前景实测质量、量值、完整BOM或生命周期因子 |
