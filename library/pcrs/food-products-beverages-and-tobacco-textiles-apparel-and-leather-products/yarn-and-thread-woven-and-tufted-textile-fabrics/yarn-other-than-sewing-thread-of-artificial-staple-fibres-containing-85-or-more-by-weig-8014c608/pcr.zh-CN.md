---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-other-than-sewing-thread-of-artificial-staple-fibres-containing-85-or-more-by-weig-8014c608
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 人造短纤维含量按重量计不低于85%的非零售包装纱线（缝纫线除外）

## 1. 范围与适用性

本 PCR 覆盖非缝纫线、按质量计人造短纤维含量不低于 85%、且非供零售的纱线门到门二次纺纱。此处人造纤维指源于天然聚合物的人造纤维，包括粘胶、莫代尔、莱赛尔、铜氨和醋酸酯短纤维。代表性路线以外购粘胶短纤维为原料，在纺纱厂门口产出卷绕的未染色工业用纱。

范围不包括合成短纤维纱、人造短纤维含量低于 85% 的纱、零售包装纱、缝纫线、长丝纱、人造纤维自身制造、纺织品湿法预处理、染色、印花、后整理、织物生产、成衣生产、使用和生命终期。其他被覆盖的人造短纤维组成的数据包必须保持参考产品身份，并将每种实际成分输入拆为独立原子流；不得用集合式纤维标签替代成分身份。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-other-than-sewing-thread-of-artificial-staple-fibres-containing-85-or-more-by-weig-8014c608 |
| classification_refs | CPC 3.0:26450 |
| covered_products | 非缝纫线、纤维质量中人造短纤维占比不低于 85%、且非供零售的纱线 |
| excluded_products | 缝纫线；长丝纱；合成短纤维纱；人造短纤维占比低于 85% 的纱；零售包装纱；织物和制成纺织品 |
| representative_product | 卷绕在工业纸板筒管上的未染色粘胶短纤维纱 |
| production_route | 外购粘胶短纤维；开松与清理；梳理；并条；适用路线的精梳与粗纱；纺纱；适用路线的加捻；络筒；工业包装 |
| market_state | 纺纱厂门口的已制成纱线，非供零售 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为下游纺织制造供应的卷绕人造短纤维纱 |
| How much | 1 kg 净纱线 |
| How well | 非缝纫线；按质量计人造短纤维不低于 85%；非供零售；声明组成、纱支或线密度、捻度、纺纱系统、水分基准和染色状态 |
| How long or cycle | 一个已声明生产批次；无服务期限 |
| reference_flow_link | 下表定义的 1 kg 净参考产品流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净纱线 |
| 参考产品流 | Yarn (other than sewing thread) of artificial staple fibres, containing 85% or more by weight of such fibres, not put up for retail sale `b2fccf4f-e4c4-4723-9e9b-ef0956abd0fc` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 成分纤维名称及质量份额；人造纤维质量份额；纱支或线密度；捻向和捻度；纺纱系统；水分基准；染色状态；工业包装类型；生产地域；生产时期 |

构建前景数据包时，每项必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少限定信息会使参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考纱线 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按声明的水分基准测量净纱线质量，并从 1 kg 参考量中排除可移除的锥筒、纸管、包膜和其他运输包装。 |
| `composition_threshold` | 纤维组成 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg 和质量分数 | 所有成分纤维份额必须在同一已声明水分基准上计算；人造短纤维份额之和必须不低于纤维总质量的 0.85。 |
| `inventory_mass` | 纤维、润滑剂、包装、产品和废物流行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 归一化前保留实测质量，并按每 1 kg 净纱线报告归一化值。 |
| `electricity_measurement` | 交付电力 | 由所选电力流声明的能量属性 | kWh | 记录已声明的中国中压电网情景下的交付电表电量，不在前景清单内换算为一次能源。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 代表性前景系统 | 从纺纱厂接收外购粘胶短纤维开始，到纺纱厂门口的卷绕且工业包装的纱线结束；纳入前景运营方执行的开松与清理、梳理、并条、适用的精梳和粗纱、纺纱、适用的加捻、络筒和包装。 | `jrc-textiles-bref-2023` |
| `boundary_upstream_links` | 外购输入 | 将外购纤维、交付电力、纺纱润滑剂、纸板筒管和 LDPE 拉伸膜保留为明确产品输入，并分别链接到地域和技术适当的上游数据集。 |  |
| `boundary_exclusions` | 排除活动 | 除非研究明确扩展边界并单独报告，否则排除人造纤维制造、染色、印花、后整理、织物生产、零售包装、使用和生命终期。 | `eu-textiles-bat-2022` |
| `boundary_direct_outputs` | 前景输出 | 将参考纱线、粘胶纤维飞花废物和粘胶纱线废物作为独立实测输出记录；不得合并废物身份，也不得用其冲减纤维输入。 | `jrc-textiles-bref-2023` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 纺纱厂门口接收的外购人造短纤维，已声明供应商身份、纤维通用名称、批次质量、水分基准和组成证据 |
| starting_condition_role | 二次纺纱的上游链接产品输入及起始条件 |
| product_classification_scope | 仅 CPC 3.0:26450 |
| recursive_input_rule | 已属于 CPC 26450 的外购纱线仍作为明确产品输入并关联自身上游数据集；不得将其重新标记为原生短纤维，也不得在此前景过程内重建其负荷。 |
| upstream_dataset_requirement | 有条件时使用供应商特定数据集；否则使用匹配纤维身份、地域、技术和时间的已披露代理，并在数据质量元数据中保留代理局限。 |
| disclosure | 声明成分纤维份额、纺纱系统、纳入工序、润滑剂产品身份、电力情景、包装配置、废物去向、生产地域、生产时期以及任何边界扩展。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `secondary_staple_spinning` | 人造短纤维二次纺纱与络筒 | required |  | 将外购短纤维前景转化为卷绕工业纱线 | 1 kg 净纱线输出 |

### 过程：人造短纤维二次纺纱与络筒（`secondary_staple_spinning`）

#### 输入

##### 产品流

###### 粘胶短纤维喂料（`viscose_staple_fibre_input`）

外购粘胶短纤维作为代表性路线的纤维喂料跨越工厂边界。

- 选定流：Viscose staple fibre, at spinning mill gate `a64ce209-6dee-404e-a22c-9bbddb1cf295`
- 流属性/单位：Mass / kg
- 数量规则：测量发往纳入纺纱过程的批次级净纤维质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_input_mass`

###### 中国中压电网电力（`cn_grid_medium_voltage_electricity`）

交付电力驱动开松、清理、梳理、并条、适用的精梳与粗纱、纺纱、加捻、络筒、通风以及可直接归属的包装设备。

- 选定流：Electricity, medium voltage, grid mix, China
- 流属性/单位：Energy / kWh
- 数量规则：从专用电表或有文件记录的设备级分配中记录交付电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_meter`

###### 矿物油基纺纱润滑剂（`mineral_oil_spinning_lubricant`）

代表性粘胶路线使用时，将外购矿物油基纺纱润滑剂记录为单一产品输入；不得替换为通用润滑剂 UUID。

- 选定流：Mineral-oil-based spinning lubricant
- 流属性/单位：Mass / kg
- 数量规则：测量发往纳入生产批次的外购产品质量，并扣除有文件记录的期末库存。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lubricant_mass`
- 来源：`jrc-textiles-bref-2023`

###### 纸板纱线锥筒（`paperboard_yarn_cone`）

与工业纱线一同离厂的纸板锥筒与纱线质量分开记录。

- 选定流：Paperboard yarn cone
- 流属性/单位：Mass / kg
- 数量规则：测量随参考生产批次出货的纸板锥筒质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass`

###### 工业纱线包装用 LDPE 拉伸膜（`ldpe_stretch_film`）

用于固定工业纱线包装的低密度聚乙烯拉伸膜作为独立产品输入记录。

- 选定流：Low-density polyethylene stretch film for industrial yarn packaging
- 流属性/单位：Mass / kg
- 数量规则：测量发往参考生产批次的薄膜质量，并扣除退回的未用薄膜。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考人造短纤维纱（`artificial_staple_fibre_yarn_output`）

卷绕工业纱线是纳入过程的实测参考输出。

- 选定流：Yarn (other than sewing thread) of artificial staple fibres, containing 85% or more by weight of such fibres, not put up for retail sale `b2fccf4f-e4c4-4723-9e9b-ef0956abd0fc`
- 流属性/单位：Mass / kg
- 数量规则：测量不含可移除包装的净合格纱线质量，再将数据集归一化至 1 kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 净参考纱线
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_output_mass`
- 来源：`unsd-cpc-3-2025`

##### 废物流

###### 粘胶纤维飞花废物（`viscose_fibre_fly_waste`）

将短纤维纺纱过程中通过收集和清扫移除的松散粘胶纤维飞花记录为单一废物输出。

- 选定流：Viscose fibre fly waste from staple-yarn spinning
- 流属性/单位：Mass / kg
- 数量规则：称量归属于参考生产批次的已收集纤维飞花。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`

###### 粘胶纱线废物（`viscose_yarn_waste`）

将以纱线形态离开过程的不合格粘胶纱、断头和络筒废品与松散纤维飞花分开记录。

- 选定流：Viscose yarn waste from staple-yarn spinning
- 流属性/单位：Mass / kg
- 数量规则：称量归属于参考生产批次的纱线形态废物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `avoid_allocation` | 可单独识别的生产批次与生产线 | 在分配共享输入或输出之前，按纤维组成、纺纱系统和生产批次细分生产。 |  |
| `shared_equipment_allocation` | 共享电力和可直接归属的辅助设备 | 无法单独计量时，按有文件记录的运行时间乘以实测或铭牌设备负荷进行分配，并披露计算及受影响行。 |  |
| `shared_packaging_allocation` | 用于多个纱线产品的锥筒与拉伸膜 | 按各已记录包装配置中出货的净纱线质量分配实测包装质量。 |  |
| `waste_handling` | 粘胶纤维飞花废物与粘胶纱线废物 | 分别报告每种废物质量和去向；不得从前景负荷中扣除废物收入或假定回收信用。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fibre_input_mass` | `secondary_staple_spinning` | `viscose_staple_fibre_input` | 地磅、仓库发料和库存记录 | supplier; fibre generic name; lot id; gross mass; tare mass; moisture basis; opening stock; closing stock | 校准秤及库存核对 | kg | 每批次；每月核对 | 与纱线输出相同期间 | 所有纳入的纤维仓库和生产线 | 发料质量 = 期初库存 + 收货 - 期末库存 - 有记录的调拨 | 校准记录；供应商规格；库存核对 |
| `cp_electricity_meter` | `secondary_staple_spinning` | `cn_grid_medium_voltage_electricity` | 电表和设备运行日志 | meter id; opening reading; closing reading; voltage level; grid geography; production hours; equipment load where allocated | 优先使用专用电表；否则使用有文件记录的设备计算 | kWh | 连续或每班读数 | 与纱线输出相同期间 | 所有纳入过程和可直接归属的辅助设备 | 期末读数减期初读数；移除有记录的排除负荷；按 `shared_equipment_allocation` 分配共享负荷 | 电表校准；账单；运行日志；分配工作表 |
| `cp_lubricant_mass` | `secondary_staple_spinning` | `mineral_oil_spinning_lubricant` | 采购、领用、退回和库存记录 | product trade name; supplier; safety-data-sheet id; opening stock; issued mass; returned mass; closing stock; lot linkage | 校准秤及库存核对 | kg | 每次领用；每月核对 | 与纱线输出相同期间 | 仅纳入的生产线 | 消耗质量 = 期初库存 + 收货 - 退回 - 期末库存 - 有记录的调拨 | 秤校准；采购发票；安全数据表；库存核对 |
| `cp_packaging_mass` | `secondary_staple_spinning` | `paperboard_yarn_cone`; `ldpe_stretch_film` | 物料清单、包装件计数和部件称量 | package configuration; component identity; component count; representative component mass; total yarn mass shipped | 计数部件并用校准秤核验质量 | kg | 每种包装配置；每月汇总 | 与纱线输出相同期间 | 离开纳入工厂边界的包装 | 部件质量 = 数量乘以核验单件质量，并与领用和退回核对 | 物料清单；秤校准；领用记录；发运记录 |
| `cp_yarn_output_mass` | `secondary_staple_spinning` | `artificial_staple_fibre_yarn_output` | 最终称量和质量放行记录 | product id; lot id; gross package mass; cone mass; wrap mass; net yarn mass; moisture basis; composition; yarn count; twist; release status | 校准最终称量及质量放行 | kg | 每个成品批次 | 与所有输入和废物记录相同期间 | 纳入生产线的全部合格输出 | 汇总已放行净纱线质量；排除可移除包装和不合格输出 | 秤校准；放行证书；组成证据；批记录 |
| `cp_waste_mass` | `secondary_staple_spinning` | `viscose_fibre_fly_waste`; `viscose_yarn_waste` | 分类废物容器和转移记录 | waste row id; container id; gross mass; tare mass; lot or line; destination; stock change | 分类收集及校准称量 | kg | 每个容器或每次转移；每月核对 | 与纱线输出相同期间 | 所有纳入生产线及可直接归属的收集点 | 净废物质量 = 毛重 - 皮重，并按期初和期末废物库存调整 | 秤校准；照片或容器标签；转移凭证；去向记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | 归一化交换量 = 报告期交换量 / 报告期净合格纱线输出 | measured period exchange; measured net conforming yarn output | 每 1 kg 净纱线的交换量 |  |
| `calc_artificial_fibre_share` | 参考产品组成 | 人造短纤维份额 = 人造短纤维各成分质量之和 / 全部纤维成分质量之和，采用同一已声明水分基准 | constituent fibre masses; fibre generic names; moisture basis | 人造短纤维质量分数 | `unsd-cpc-3-2025` |
| `calc_fibre_mass_reconciliation` | 含纤维输入与输出 | 将纤维输入与净纱线输出、粘胶纤维飞花废物、粘胶纱线废物、其他单独识别的含纤维输出及实测库存变化进行核对；调查并披露任何残差 | fibre input; yarn output; each fibre-bearing waste; other fibre-bearing outputs; stock change | 质量核对残差及解释 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 所有流行 | 每行仅保留一种物理或化学身份，并保留供应商或废物去向证据；UUID 未解析行必须保持可读，且不得赋予更宽泛的候选 UUID。 | supplier specification; safety data sheet; package bill of materials; waste dispatch record; manifest review metadata |
| `dq_temporal` | 前景清单 | 使用一个共同报告期，并核对纤维、润滑剂、纱线、包装和废物的期初及期末库存。 | dated meter, stock, production, and dispatch records |
| `dq_measurement` | 质量和电力 | 使用校准秤和电表；保留校准状态、原始读数、皮重处理和单位换算。 | calibration certificates; raw readings; calculation workbook |
| `dq_composition` | 参考纱线 | 证明在已声明水分基准上人造短纤维占质量不低于 85%，并识别每种成分纤维。 | supplier composition evidence or full laboratory report; batch formulation; moisture-basis record |
| `dq_completeness` | 纳入前景过程 | 覆盖每个纳入工序，并分别记录所有实际纤维成分、电力情景、外购润滑剂产品、包装部件、废物流及存在时的直接基本流排放。 | process map; purchasing records; meter coverage; waste register; emission monitoring records where applicable |
| `dq_representativeness` | 上游链接 | 匹配纤维身份、电力地域与电压、润滑剂产品、包装材料、技术和时期；披露每个代理。 | upstream dataset metadata and proxy assessment |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 确认参考产品 UUID、Product flow 类型、CPC 26450 身份、Mass 属性、Units of mass 单位组和 kg 参考单位持续与所声明纱线一致。 | `unsd-cpc-3-2025` |
| `validate_scope_threshold` | 产品组成与市场状态 | 若人造短纤维低于纤维总质量的 85%、未识别成分纤维、产品属于缝纫线或长丝纱、或供零售包装，则拒绝数据包。 | `unsd-cpc-3-2025` |
| `validate_atomic_inventory` | 过程清单 | 拒绝集合式、选择式或组合式流标签；每种实际材料、化学产品、电力情景、包装部件、废物和基本流必须各占一行。 |  |
| `validate_bilingual_alignment` | 英文与中文 PCR 表达 | 要求 process_id、row_id、direction、flow_type、value_mode、specificity、basis_kind、evidence_kind、source_id 和 UUID 序列顺序完全一致。 |  |
| `validate_foreground_records` | 清单数量 | 每个清单数量均需原始前景证据和采集协议；不接受 AI 估计值或无支持范围。 |  |
| `validate_mass_reconciliation` | 含纤维清单 | 要求有文件记录的纤维质量核对，并解释每个残差，不得静默配平或冲减废物。 |  |
| `validate_unresolved_identity` | 无 UUID 的清单行 | 发布前必须重新直接检索天工数据库；除非公开记录与行语义精确匹配，否则 UUID 保持空白。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 人造短纤维纱二次纺纱的前景生产数据集 |
| downstream_use | 经方法审查和发布后可作为 `secondary_dataset`；`background_dataset` |
| allowed_use | 为匹配 CPC 26450、已声明纤维组成、纺纱系统、地域、技术和时间的纱线构建 LCA process 或 lifecyclemodel |
| excluded_use | 人造纤维制造；合成短纤维纱；长丝纱；缝纫线；零售包装纱；染色或后整理；织物生产；无条件全球代理使用 |
| required_metadata | PCR id 与版本；参考产品 UUID；成分纤维名称和质量份额；纱支；捻度；纺纱系统；水分基准；染色状态；纳入工序；地域；时期；电力情景；润滑剂身份；包装配置；废物去向；分配方法 |
| required_quality_disclosure | 每行的前景或代理状态；电表和秤覆盖；组成证据；库存核对；分配计算；UUID 缺口；范围证据缺口；质量核对残差；排除活动 |
| update_trigger | 纤维身份或组成、纺纱系统、润滑剂产品、电力供应、包装配置、废物路线、场址、报告期、参考流 UUID 发生变化，或天工身份缺口得到解析 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0 Explanatory Notes, code 26450, pp. 120-121, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 精确产品范围、85% 质量阈值、缝纫线排除、人造短纤维身份及非零售市场状态 |
| `jrc-textiles-bref-2023` | official_guidance | European Commission Joint Research Centre, Best Available Techniques (BAT) Reference Document for the Textiles Industry, JRC131874, Sections 2.4-2.4.3, pp. 33-34, and Section 8.1.2.3, p. 849, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf | 短纤维二次纺纱工序序列、络筒和可选加捻、纺纱润滑剂作用及环境相关性 |
| `eu-textiles-bat-2022` | official_guidance | Commission Implementing Decision (EU) 2022/2508, Textiles Industry BAT Conclusions, Scope, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2508 | 明确披露人造纤维和纱线生产不在 BAT 结论范围内；防止将其误用于本 PCR |
