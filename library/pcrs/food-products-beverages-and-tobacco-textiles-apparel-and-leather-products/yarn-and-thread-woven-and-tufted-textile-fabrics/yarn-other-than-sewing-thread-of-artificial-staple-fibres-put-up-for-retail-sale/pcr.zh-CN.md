---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-other-than-sewing-thread-of-artificial-staple-fibres-put-up-for-retail-sale
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 供零售的人造短纤维纱线（缝纫线除外）

## 1. 范围与适用性

本 PCR 适用于将已粗梳、精梳或以其他方式完成纺前准备的人造短纤维在工厂内加工为非缝纫线纱线，并完成络筒和零售包装后在工厂大门交付的过程。应声明纤维类别、混纺组成、进厂颜色状态、纺纱系统、纱支、捻度、包装形式和生产地理范围。

前景边界从纺纱厂接收已完成纺前准备的短纤维开始。纤维制造、所声明起始条件之前的纤维准备以及任何湿法染色或整理均由单独的上游数据集表示。配送、零售运营、消费者使用和生命末期不在前景边界内。缝纫线、归入本类别之外的合成短纤维纱线、人造长丝纱以及非供零售纱线不适用。越过工厂大门的包装应按单个组件清单化，但包装质量不得计入参考纱线质量。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-other-than-sewing-thread-of-artificial-staple-fibres-put-up-for-retail-sale |
| classification_refs | CPC 3.0: 26462 |
| covered_products | 产品身份为人造短纤维纱线、非缝纫线且以供零售包装形式离开工厂的纱线 |
| excluded_products | 缝纫线；归入 CPC 26462 之外的合成短纤维纱线；长丝纱；非供零售纱线；纤维、织物和纺织制成品 |
| representative_product | 卷绕在纸板芯上、带纸质标签且已做好零售交付准备的人造短纤维纺制纱线 |
| production_route | 已完成纺前准备的人造短纤维的混合与并条；适用时的粗纱；纺纱；需要时的加捻；络筒；检验；零售包装 |
| market_state | 以已声明零售包装形式在纺纱厂大门交付的成品纱线；纱线净质量与包装质量分开报告 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 以已声明供零售包装形式供应的成品人造短纤维纱线（缝纫线除外） |
| How much | 纺纱厂大门处 1,000 kg 纱线净质量，不包括纸芯、标签、包膜、纸箱、托盘和其他包装 |
| How well | 符合已声明的纤维类别与混纺、纱支、捻度、颜色状态、回潮或调湿状态、质量等级和零售包装形式 |
| How long or cycle | 在工厂大门验收的一个完整生产批次；不赋予使用期限 |
| reference_flow_link | `reference_yarn_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg 合格纱线净质量 |
| 参考产品流 | 供零售的人造短纤维纱线（缝纫线除外） `9cb2deeb-5eb3-4128-a175-ccbf63b8a2cc` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 人造短纤维类别；每种纤维组分的质量分数；纱支制度及数值；捻向和捻度；纺纱系统；纤维进厂和产品出厂的颜色状态；回潮或调湿状态；质量等级；零售包装形式；纱线净质量；各包装组件质量；生产地理范围；参考期 |

构建前景数据包时，`必需限定信息` 中每一项都应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失任何限定信息均使该数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考纱线输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按工厂大门验收时测得的 1,000 kg 合格纱线净质量归一化清单；纸芯、标签、包膜、纸箱、托盘及所有其他包装均不得计入纱线净质量。 |
| `package_tare` | 已包装输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 通过直接净重称量，或从包装毛质量中扣除实测纸芯、标签、包膜、纸箱和其他包装皮重，确定纱线净质量；保留皮重记录。 |
| `moisture_state` | 纤维输入和纱线输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按实测调湿状态报告质量并披露含水或回潮基准；不得采用未记录的干基修正。 |
| `energy_meter_unit` | 电力输入 | Energy | kWh | 保留电表单位和报告期；如需换算，应在数据包中记录换算系数和原始电表总量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 纺纱厂接收的已粗梳、精梳或以其他方式完成纺前准备的人造短纤维，并已声明纤维身份、混纺组成、颜色状态、回潮状态、供应商和上游数据集 |
| starting_condition_role | 干法纺纱、络筒、检验和零售包装操作的前景边界锚点 |
| product_classification_scope | CPC 3.0 代码 26462 范围内的成品纱线；分类不能替代已声明的产品限定信息 |
| recursive_input_rule | 若同一产品类别的纱线进入合股、重绕或包装，则仅将其作为带有自身供应商数据集的上游产品输入记录一次，并在该交换处停止递归展开 |
| upstream_dataset_requirement | 对纤维制造与准备、电力供应、纺纱润滑剂和每种包装组件链接单独数据集；任何湿法染色或整理均披露为本前景边界之外的上游过程 |
| disclosure | 声明实际过程顺序、省略步骤、纺纱技术、纤维与混纺身份、湿处理位置（如有）、电力地理范围、润滑剂身份、废物去向、包装形式、净重与毛重的区分、场址和参考期 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_prepared_fibre_start` | 前景纺纱数据集 | 从接收已完成纺前准备的人造短纤维开始，并纳入报告场址实施的并条、适用时的粗纱、纺纱、需要时的加捻、络筒、检验和零售包装。 | `jrc-textiles-bref-2023` |
| `boundary_separate_upstream` | 上游供应 | 纤维制造、纺纱前纤维准备、湿法染色或整理、电力供应和包装生产应保留在链接的上游数据集中；不得无说明地并入前景过程。 | `jrc-textiles-bref-2023` |
| `boundary_inventory_disclosure` | 输入与输出 | 清单化越过已声明边界的纺织材料、过程化学品、能源、产品和每项废物流的数量与身份；经改编的监测规则不得被表述为法律上的 BAT 适用性。 | `eu-textiles-bat-2022` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p1_dry_spinning_retail_packout` | 人造短纤维干法纺纱、络筒与零售包装 | `required` | 从已完成纺前准备的人造短纤维到供零售纱线的已声明前景路径所必需 | 前景转化过程 | 1,000 kg 合格供零售纱线净输出 |

### 过程：人造短纤维干法纺纱、络筒与零售包装（`p1_dry_spinning_retail_packout`）

记录的过程顺序应明确并条、适用时的粗纱、纺纱技术、需要时的加捻、络筒、检验和包装。若使用其他混纺组分，应在所产数据包中将其添加为独立的、化学或物理身份明确的产品流交换；不得把不同纤维合并成集合流。

#### 输入

##### 产品流

###### 已完成纺前准备的人造短纤维输入（`received_artificial_staple_fibre`）

该流是在已声明前景边界接收并用于纱线生产的人造短纤维。

- 选定流：Artificial staple fibres, carded, combed or otherwise processed for spinning
- 流属性/单位：Mass / kg
- 数量规则：计入生产批次的供应商交付质量，与库存变动及已声明回潮或调湿状态核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格供零售纱线净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_reconciliation`
- 来源：`jrc-textiles-bref-2023`

###### 场址低压电力（`site_low_voltage_electricity`）

该交换记录供应至报告场址的低压交流电消费组合；应明确其国家或电网区域。

- 选定流：Low-voltage alternating-current grid consumption mix supplied to the reporting site
- 流属性/单位：Energy / kWh
- 数量规则：报告期内分配给该过程的实测电力，包括纺纱、吸风、络筒、检验、环境控制和包装设备
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格供零售纱线净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_electricity_meter`
- 来源：`jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

###### 纺织用纺纱润滑剂（`textile_spinning_lubricant`）

该交换记录在前景过程中施加到纤维或纱线上的具体可生物降解酯基纺纱润滑剂。

- 选定流：Biodegradable ester-based textile spinning lubricant
- 流属性/单位：Mass / kg
- 数量规则：生产批次领用质量减去退回的未使用润滑剂；明确商业配方并保留安全或技术数据表
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格供零售纱线净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lubricant_issue_record`
- 来源：`jrc-textiles-bref-2023`

###### 纱线纸板芯（`paperboard_yarn_core`）

当已声明包装形式使用纸芯时，记录纳入所售纱线包装的纸板管或纸芯。

- 选定流：圆纸筒 `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- 流属性/单位：Mass / kg
- 数量规则：批次合格零售包装中所纳入纸芯的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格供零售纱线净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass_reconciliation`
- 来源：`eu-textiles-bat-2022`

###### 纸质包装标签（`paper_label`）

记录实际纳入零售包装的纸质标签。

- 选定流：纸质标签 `7b25a54f-baa6-4593-9670-4240a3315eed`
- 流属性/单位：Mass / kg
- 数量规则：批次合格零售包装中所纳入纸质标签的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格供零售纱线净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass_reconciliation`
- 来源：`eu-textiles-bat-2022`

###### LDPE 零售包膜（`ldpe_retail_wrap`）

使用包膜时，记录实际纳入零售纱线包装的低密度聚乙烯薄膜。

- 选定流：Low-density polyethylene film for retail yarn wrapping
- 流属性/单位：Mass / kg
- 数量规则：批次合格零售包装中所纳入 LDPE 包膜的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格供零售纱线净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass_reconciliation`
- 来源：`eu-textiles-bat-2022`

###### 瓦楞纸板运输箱（`corrugated_board_box`）

记录随合格零售纱线批次离开工厂的瓦楞纸板箱。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：合格批次使用的瓦楞纸板箱实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格供零售纱线净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass_reconciliation`
- 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格供零售纱线净输出（`reference_yarn_output`）

这是在纺纱厂大门验收的参考产品；其纱线净质量不含任何包装组件。

- 选定流：供零售的人造短纤维纱线（缝纫线除外） `9cb2deeb-5eb3-4128-a175-ccbf63b8a2cc`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：检验后且加入包装皮重之前的 1,000 kg 合格纱线净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 合格供零售纱线净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_reconciliation`
- 来源：`unsd-cpc-3-0-2025`

##### 废物流

###### 收集的松散人造短纤维废料（`captured_loose_artificial_fibre`）

记录由清扫或吸风系统移除并收集、尚未形成不合格纱线产品的松散人造短纤维。

- 选定流：Captured loose artificial staple-fibre waste
- 流属性/单位：Mass / kg
- 数量规则：批次或报告期内送往已声明再使用、回收、处理或处置去向的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格供零售纱线净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass_records`
- 来源：`jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

###### 不合格人造短纤维纱线废料（`offspec_artificial_yarn`）

记录已经形成纱线、但因不符合已声明纱线规格而不能销售的产品。

- 选定流：Off-spec artificial staple-fibre yarn waste
- 流属性/单位：Mass / kg
- 数量规则：批次或报告期内送往已声明再使用、回收、处理或处置去向的不合格纱线实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格供零售纱线净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass_records`
- 来源：`jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_where_possible` | 前景过程 | 在采用分配之前，应细分电表和物料记录或扩展报告期，使其能够直接归属到已声明纱线输出。 | `iso-14044-2006` |
| `allocation_mass_if_unavoidable` | 多种可销售纱线输出 | 如无法直接归属，则按可销售纱线输出的验收净质量分配共用电力、润滑剂和包装损耗；记录各输出、质量总量和分配系数。 | `iso-14044-2006` |
| `allocation_waste_no_product_credit` | 收集的松散纤维和不合格纱线 | 不得仅因废物流有回收去向就将其视为共产品；应分别报告实测质量和去向。任何替代收益属于下游研究情景，不计入本前景清单。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_reconciliation` | `p1_dry_spinning_retail_packout` | 已完成纺前准备的纤维输入和合格纱线输出 | 地磅、秤、仓库和生产记录 | batch_id; fibre_receipts_kg; opening_inventory_kg; closing_inventory_kg; accepted_net_yarn_kg; moisture_state; product_grade | 采用校准质量计量，并与批次及仓库变动核对 | kg | 每批次，汇总至参考期 | 完整覆盖所声明的参考期 | 报告纺纱场址 | 按产品身份汇总验收数量，并以期初库存 + 收货 - 期末库存核对纱线输出和已记录废物 | 校准记录；批次票据；库存台账；验收记录；核对签字 |
| `cp_site_electricity_meter` | `p1_dry_spinning_retail_packout` | 场址低压电力 | 公用事业电表、分表或账单 | meter_id; grid_region; opening_reading_kwh; closing_reading_kwh; process_share_basis; downtime; reference_period | 优先采用过程分表；否则以有记录的运行数据分配经核对的场址总表读数 | kWh | 至少每月一次并覆盖完整参考期 | 完整覆盖所声明的参考期 | 报告纺纱场址 | 汇总分时耗电，扣除单独计量的边界外负荷，并分配有记录的过程份额 | 电表规格；校准记录或公用事业账单；运行小时记录；核对工作表 |
| `cp_lubricant_issue_record` | `p1_dry_spinning_retail_packout` | 纺织用纺纱润滑剂 | 仓库领退记录和配方记录 | batch_id; formulation_name; supplier; issued_kg; returned_kg; safety_data_sheet_id; application_point | 对过程批次领用和退回的润滑剂进行称量或记录 | kg | 每次领用和退回，按批次汇总 | 完整覆盖所声明的参考期 | 报告纺纱场址 | 汇总合格生产批次领用质量减去退回的未使用质量 | 仓库台账；秤量记录；配方技术数据表；批次操作员签字 |
| `cp_packaging_mass_reconciliation` | `p1_dry_spinning_retail_packout` | 纸板芯、纸质标签、LDPE 薄膜和瓦楞纸箱 | 包装物料清单、领用记录和组件称量 | package_sku; component_flow_id; component_description; component_count; sample_mass_kg; issued_mass_kg; returned_mass_kg; accepted_package_count | 分别称量每种不同包装组件，并核对领用、退回和实际纳入数量 | kg | 每个包装 SKU 和批次 | 完整覆盖所声明的参考期 | 报告包装线 | 分别计算每种组件；不得将不同包装材料合并为一个流 | 包装规格；秤量记录；领退台账；合格包装数量；核对签字 |
| `cp_waste_mass_records` | `p1_dry_spinning_retail_packout` | 收集的松散纤维和不合格纱线 | 废物容器称量和转移记录 | waste_row_id; container_id; gross_kg; tare_kg; net_kg; fibre_identity; destination; transfer_date | 每次转移时分别称量每项废物流；保留去向和处理身份 | kg | 每次转移，按废物 row_id 和参考期汇总 | 完整覆盖所声明的参考期 | 报告纺纱场址 | 按每种废物身份和去向分别汇总净质量 | 秤量记录；废物转移单；去向接收凭证；批次关联 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_to_reference` | 每个非参考清单行 | 归一化数量 = 报告期该行数量 / 报告期合格纱线净质量 × 1,000 kg | 该行数量；合格纱线净质量 | 每 1,000 kg 合格纱线净质量的清单数量 | `eu-textiles-bat-2022` |
| `calc_net_yarn_mass` | 参考纱线输出 | 纱线净质量 = 包装毛质量 - 纸板芯质量 - 纸质标签质量 - LDPE 包膜质量 - 瓦楞纸箱质量 - 其他每项单独实测包装质量 | 包装毛质量；每项包装组件质量 | 合格纱线净质量 |  |
| `calc_material_reconciliation` | 纤维和纱线质量记录 | 期初已准备纤维库存 + 已准备纤维收货 - 期末已准备纤维库存 = 合格纱线净输出 + 收集的松散纤维废料 + 不合格纱线废料 + 有记录的在制品变动 + 有记录的留存或转移物料 | 库存记录；收货；合格输出；废物记录；在制品记录 | 已签字的物料核对结果和未解释差额 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和物料流 | 保留准确的产品与纤维身份、纤维质量分数、纱支、捻度、包装形式；仅在直接读取确认语义相同时保留 Tiangong UUID。 | 产品规格；供应商声明；Tiangong 直接读取记录；manifest 中的身份审查 |
| `dq_temporal` | 前景清单 | 覆盖具有代表性的连续 12 个月，或披露较短但完整的生产活动期及其季节性、停机和产品组合限制。 | 电表日期；批次登记；生产日历；账单 |
| `dq_completeness` | 输入与输出 | 核对纤维、产品、包装、电力、润滑剂和每项废物流；解释每项被排除的场址负荷和每项物料平衡差额。 | 已签字的核对工作表；排除项登记；废物转移记录 |
| `dq_measurement` | 质量与能源记录 | 使用经校准仪表或可追溯账单，并保留原始读数、皮重、单位、换算系数和修正记录。 | 校准证书；公用事业账单；秤量日志；修正日志 |
| `dq_source_scope` | 外部方法证据 | JRC 和 EU BAT 来源仅用作过程描述和清单监测指导；应披露 EU BAT 的法律适用性不会自动延伸至本前景人造纱线过程。 | 数据集元数据中的来源范围声明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 确认 Product flow 类型、准确产品名称、CPC 26462、Mass 属性 UUID、kg 参考单位及全部必需限定信息；拒绝缝纫线、合成短纤维纱线、人造长丝纱和非供零售纱线。 | `unsd-cpc-3-0-2025` |
| `validate_net_mass` | 参考数量 | 确认恰为 1,000 kg 合格纱线净质量，并核验纸芯、标签、薄膜、纸箱、托盘和其他全部包装质量均不计入参考数量且另行报告。 |  |
| `validate_atomic_inventory` | 过程清单 | 每种具体纤维、电力情景、润滑剂配方、包装组件、废物身份和基本流排放均应独立成行；选定流不得采用集合标签或未解决的选择指令。 | `eu-textiles-bat-2022` |
| `validate_uuid_evidence` | 含 UUID 的行 | 通过 hybrid 检索和公开直接读取确认每个 UUID，并确保直接读取的名称、流类型、属性、分类、位置和处理语义支持所编写的交换。 |  |
| `validate_reconciliation` | 前景记录 | 确认电力、包装、润滑剂、废物和物料记录覆盖同一参考期，且已签字的物料核对解释在制品和全部差额。 | `eu-textiles-bat-2022` |
| `validate_boundary_disclosure` | 数据集边界 | 确认披露已完成纺前准备的纤维起始条件、上游纤维数据集、被排除的湿处理、生产地理范围、电网、润滑剂身份、废物去向和包装形式。 | `jrc-textiles-bref-2023` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 人造短纤维纱线干法纺纱、络筒、检验和零售包装的前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 与已声明纤维/混纺、纺纱路径、颜色状态、纱线规格、包装形式、地理范围、期间和纤维纺前准备起始条件相匹配的产品足迹与生命周期模型 |
| excluded_use | 缝纫线；CPC 26462 之外的合成短纤维纱线；人造长丝纱；把湿法染色或整理作为本前景过程组成部分；非供零售纱线；无法区分纱线净质量和包装质量的研究 |
| required_metadata | PCR id；产品和纤维身份；混纺质量分数；纱支和捻度；纺纱系统；颜色和回潮状态；包装形式；净质量与毛质量；包装组件质量；场址与电网地理范围；参考期；上游数据集链接；分配方法；废物去向 |
| required_quality_disclosure | 测量覆盖率；电表和秤的质量；核对结果；缺失 UUID；来源范围限制；排除负荷；在制品处理；产品组合限制；代表性限制 |
| update_trigger | 纤维/混纺身份、纤维纺前准备起始条件、纺纱技术、纱线规格、润滑剂配方、电网、包装形式、场址、分配方法、废物路径发生变化，或获得新验证的 Tiangong 身份 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-12） | CPC 26462 的官方类别身份和相邻排除项 |
| `jrc-textiles-bref-2023` | `official_guidance` | Roth et al., Best Available Techniques (BAT) Reference Document for the Textiles Industry, JRC 131874, DOI 10.2760/355887, https://op.europa.eu/en/publication-detail/-/publication/ad7cea9f-97ab-11ed-b508-01aa75ed71a1/language-en（检索于 2026-08-12） | 纱线制造过程拆解、纺纱润滑剂影响、电力使用、络筒和松散纤维收集控制；当 BREF 法律范围排除人造纱线生产时仅作描述性使用 |
| `eu-textiles-bat-2022` | `standard` | Commission Implementing Decision (EU) 2022/2508, CELEX 32022D2508, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2508（检索于 2026-08-12） | 经改编的输入/输出清单、直接监测、能源、材料、过程化学品和废物记录要求；不表示其在法律上适用于本前景路径 |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html（检索于 2026-08-12） | LCI 分配层级和记录依据 |
