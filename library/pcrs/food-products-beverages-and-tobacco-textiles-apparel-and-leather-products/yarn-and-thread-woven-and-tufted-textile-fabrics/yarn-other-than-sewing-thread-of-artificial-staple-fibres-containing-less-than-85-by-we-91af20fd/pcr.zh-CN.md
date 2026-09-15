---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-other-than-sewing-thread-of-artificial-staple-fibres-containing-less-than-85-by-we-91af20fd
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 非供零售的人造短纤维纱线（缝纫线除外），按重量计人造短纤维含量低于 85%

## 1. 范围与适用性

本 PCR 适用于非供零售且不属于缝纫线的纱线前景生产；该纱线由已声明的短纤维混合物制成，其中含有人造短纤维，但其质量占全部纤维质量的比例低于 85%。产品在纺纱厂大门处按已声明调湿或含水状态下的净纱质量核算。

核心前景边界始于可直接并条的混合短纤维条，终止于纺纱和络筒后的合格纱线。纤维制造、入厂混合纤维条的制备、染色、湿法整理、织物制造、零售包装、使用和生命末期均处于核心边界之外；纳入研究时须链接相应数据集。对于一体化场址，须单独披露并建模新增工序。

本 PCR 不包括缝纫线、人造短纤维质量占比达到或超过 85% 的纱线、供零售的纱线、长丝纱线，以及人造纤维占比或各组成纤维成分无记录的产品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-other-than-sewing-thread-of-artificial-staple-fibres-containing-less-than-85-by-we-91af20fd |
| classification_refs | CPC 3.0: 26461 (exact) |
| covered_products | 人造短纤维占全部纤维质量低于 85%、非供零售且不属于缝纫线的纱线 |
| excluded_products | 缝纫线；人造短纤维质量占比达到或超过 85% 的纱线；供零售的纱线；长丝纱线；缺少经核实纤维成分记录的纱线 |
| representative_product | 环锭纺混纺纱，其中已声明的人造短纤维质量占比低于 85%，在纺纱厂大门交付且非供零售 |
| production_route | 混合纤维条并条、粗纱、短纤维纺纱、产品规格要求时的加捻，以及络筒 |
| market_state | 纺纱厂大门处的非零售成品纱；净纱质量与任何载体或包装分开报告 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 由已声明短纤维混合物生产、其中人造短纤维质量占比低于 85% 的合格非零售纱线（缝纫线除外） |
| How much | 1 kg 净纱 |
| How well | 满足已声明的纱支、纤维成分、纺纱系统、捻度、调湿或含水状态及商业质量规格 |
| How long or cycle | 纺纱厂大门处一个已声明的生产批次 |
| reference_flow_link | `reference_yarn_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 非供零售的人造短纤维纱线（缝纫线除外），按重量计，此类纤维的含量低于 85 `2fde586f-9999-4f3e-8022-fe0d8a19e270` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 人造短纤维类型及质量占比；每一种其他组成纤维及质量占比；纱支；纺纱系统；捻度规格；染色或未染色状态；调湿或含水状态；生产地理范围；生产批次期间；非零售市场状态；载体和包装的净质量处理方式 |

构建前景数据包时，每项必需限定信息都须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺少成分、含水状态或市场状态限定信息时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按已声明调湿或含水状态报告 1 kg 合格净纱；排除纱管、可复用载体和包装的质量。 |
| `constituent_mass` | 入厂纤维条和纱线组成纤维 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在同一调湿或含水基准下确定每种组成纤维质量，并随批次记录保留计量基准。 |
| `electricity_energy` | 外购交流电 | Energy | kWh | 记录生产期间的电表电量，并披露电压等级、电网地理范围，以及现场发电是否单独计量。 |
| `waste_mass` | 纤维飞花和不合格纱 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别称量每种废物流，并保留其去向及回收或处理状态。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 记录了各组成纤维质量且人造短纤维质量占比低于 85%、入厂时可直接并条的混合短纤维条 |
| starting_condition_role | 前景纺纱过程的上游产品输入 |
| product_classification_scope | 仅限 CPC 3.0 代码 26461 的成品纱；入厂纤维条仍属于上游中间产品 |
| recursive_input_rule | 同类别纱线输入须保持为可见产品输入并链接其自身上游数据集，不得折入参考产品输出 |
| upstream_dataset_requirement | 将每个入厂混合纤维条批次链接至供应商特定或有代表性的上游数据集，该数据集须披露组成纤维、配比、调湿或含水基准、地理范围和制备边界 |
| disclosure | 声明在纤维条并条之前或纱线络筒之后新增的所有一体化工序，包括染色、湿法整理、载体生产或包装 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_core_route` | 前景纺纱系统 | 从接收混合纤维条至纺纱厂大门处合格纱线，纳入并条、粗纱、纺纱、产品要求的加捻、络筒、直接消耗的电力、直接施用的纺纱润滑剂及单独计量的过程废物。 | `jrc-textiles-bref-2023` |
| `boundary_upstream_sliver` | 入厂混合短纤维条 | 将组成纤维制造和入厂混合纤维条制备保留在核心前景过程之外，但要求链接上游数据集并披露成分。 | `jrc-textiles-bref-2023` |
| `boundary_product_scope` | 参考产品 | 仅当产品不是缝纫线、不是供零售纱线，且人造短纤维占全部纤维质量低于 85% 时应用本类别。 | `unsd-cpc-3-0-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `staple_spinning_winding` | 短纤维纺纱和络筒 | `required` | 入厂混合纤维条满足已声明起始条件 | 将混合纤维条转化为非零售成品纱的前景单元过程 | 1 kg 合格净纱输出 |

### 过程：短纤维纺纱和络筒（`staple_spinning_winding`）

本过程包括入厂混合纤维条的并条和粗纱、短纤维纺纱、产品要求的加捻以及络筒。须声明所代表生产批次的路线细节和设备技术。

#### 输入

##### 产品流

###### 混合短纤维条输入（`mixed_staple_fibre_sliver_input`）

一种已声明的混合纤维条产品进入本过程。各组成纤维质量占比是批次属性；选定流是纺纱厂实际接收的物理混合物，而不是可选纤维清单或选择器。

- 选定流：人造短纤维质量占比已声明且低于 85% 的混合短纤维条
- 流属性/单位：Mass / kg
- 数量规则：在与纱线质量平衡一致的调湿或含水基准下，计量分配至所代表生产批次的质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净纱输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mixed_sliver_receipts`
- 来源：`jrc-textiles-bref-2023`

###### 外购交流电输入（`purchased_ac_electricity_input`）

一个场址电表计量的电力场景为纺纱和络筒设备供电。电压等级和电网地理范围是必需场景属性，不得用未指定的电力流替代。

- 选定流：场址电表处的外购交流电，已声明电压等级和电网地理范围
- 流属性/单位：Energy / kWh
- 数量规则：记录可归属于所代表生产批次的计量电量；共享电表时使用已记录的因果生产驱动量进行分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净纱输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_meter`
- 来源：`jrc-textiles-bref-2023`

###### 短纤维纺纱润滑剂输入（`staple_spinning_lubricant_input`）

仅当润滑剂在前景过程内直接施用时，记录一种已声明的润滑剂产品。须保留产品或配方身份；用于其他纤维或长丝路线的油剂不可互换。

- 选定流：所声明生产批次使用的短纤维纺纱润滑剂
- 流属性/单位：Mass / kg
- 数量规则：计量所代表生产批次的润滑剂领用量减去有记录的退回量；只有运行记录证明本过程未施用润滑剂时才记录零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净纱输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spinning_lubricant`
- 来源：`jrc-textiles-bref-2023`

###### 纸板纱管输入（`paperboard_yarn_cone_input`）

仅当特定纸板纱管随非零售纱线交付，且并非在产品大门之前退回的可复用厂内载体时记录该流。

- 选定流：随非零售纱线交付的纸板纱管
- 流属性/单位：Mass / kg
- 数量规则：计量交付纱管总质量，或用交付纱管数量和经核实的供应商单个纱管质量计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 合格净纱输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_paperboard_yarn_cones`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考纱线输出（`reference_yarn_output`）

这是纺纱厂大门处的合格净纱输出。载体和包装质量不计入 1 kg 参考数量；随产品交付时另行记录。

- 选定流：非供零售的人造短纤维纱线（缝纫线除外），按重量计，此类纤维的含量低于 85 `2fde586f-9999-4f3e-8022-fe0d8a19e270`
- 流属性/单位：Mass / kg
- 数量规则：在已声明调湿或含水状态下，按实测合格净纱质量归一化后精确设为 1 kg。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_yarn_output`
- 来源：`unsd-cpc-3-0-2025`

##### 废物流

###### 松散短纤维飞花输出（`loose_staple_fibre_fly_output`）

将纺纱和络筒收集的松散飞花作为一种物理上独立的废物流记录，不与不合格纱合并。

- 选定流：纺纱和络筒产生的松散人造混纺短纤维飞花
- 流属性/单位：Mass / kg
- 数量规则：称量所代表生产批次期间单独收集的飞花。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净纱输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_loose_fibre_fly`
- 来源：`jrc-textiles-bref-2023`

###### 不合格混纺纱输出（`offspec_blended_yarn_output`）

纺纱、加捻或络筒期间剔除的纱线须与松散纤维飞花及合格产品分别记录。

- 选定流：纺纱和络筒产生的不合格人造混纺纱
- 流属性/单位：Mass / kg
- 数量规则：称量从所代表生产批次剔除的不合格纱，并记录其回用、回收或处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净纱输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_offspec_yarn`
- 来源：`jrc-textiles-bref-2023`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 可分别计量的生产批次和工序 | 优先采用物理细分以及专用电表或领用记录，使所代表纱线批次承担其直接计量的输入和输出。 |  |
| `allocation_shared_records` | 共享的电力、润滑剂或载体记录 | 无法直接细分时，使用前景记录中的已记录因果生产驱动量；披露驱动量、公式、期间和受影响产品。 |  |
| `allocation_recovered_material` | 具有有益用途的纤维飞花或不合格纱 | 除非前景记录证明该流是独立预期的共产品，否则按废物处理；若属于共产品，则单独建模并披露分配方法，不给予无记录的抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mixed_sliver_receipts` | `staple_spinning_winding` | `mixed_staple_fibre_sliver_input` | 批次接收和领用记录 | 纤维条产品身份；供应商；批次 id；每种组成纤维；每种组成纤维质量；人造纤维类型；调湿或含水状态；领用质量 | 用经校准秤的领用记录核对供应商交付记录 | kg 和质量占比 | 每个接收和领用批次 | 所代表生产期间全覆盖 | 所代表场址和产品批次使用的全部纤维条 | 在一个已声明调湿或含水基准下按批次汇总领用质量 | 供应商规格；接收记录；秤具标识和校准状态；成分试验或证书 |
| `cp_electricity_meter` | `staple_spinning_winding` | `purchased_ac_electricity_input` | 电表记录 | 电表 id；起止读数；读数时间；电压等级；电网地理范围；现场发电输出和输入；生产线归属 | 读取经校准结算表或分表，并将读数期间与生产时间核对 | kWh | 至少每个生产批次或可核对的最短电表期间 | 所代表生产期间全覆盖 | 前景过程包括的全部设备 | 电表差值减去单独计量的外送电量，按直接分表或已记录因果驱动量归属 | 电表标识；校准或公用事业账单；读数日志；分配记录 |
| `cp_spinning_lubricant` | `staple_spinning_winding` | `staple_spinning_lubricant_input` | 物料领用记录 | 产品或商品名；配方或安全数据表引用；批次 id；期初库存；入库；期末库存；有记录的退回量 | 对所代表生产期间开展库存平衡 | kg | 每个生产批次或库存期间 | 所代表生产期间全覆盖 | 前景过程内施用的全部润滑剂 | 期初库存加入库，减期末库存和有记录退回量，并归属至所代表批次 | 采购记录；库存台账；安全数据表；秤具或加注记录 |
| `cp_paperboard_yarn_cones` | `staple_spinning_winding` | `paperboard_yarn_cone_input` | 载体领用和交付记录 | 纱管产品身份；交付数量；退回数量；经核实单个质量或总质量；复用状态 | 用供应商质量规格或称量结果核对包装和发运记录 | kg | 每个发运批次 | 所代表生产期间全覆盖 | 跨越已声明产品大门的纱管 | 只计入已交付且未退回的纱管质量 | 发运记录；供应商规格或称量记录；退回日志 |
| `cp_yarn_output` | `staple_spinning_winding` | `reference_yarn_output` | 成品批次质量和质量检验记录 | 产品 id；批次 id；毛质量；纱管和包装质量；净纱质量；纱支；捻度；纺纱系统；每种纤维占比；染色状态；调湿或含水状态 | 称量成品批次并扣除单独核实的载体和包装质量 | kg | 每个成品批次 | 所代表生产期间全覆盖 | 数据集代表的全部合格纱线 | 在已声明调湿或含水基准下汇总合格净纱质量 | 经校准称量记录；质量证书；成分结果；装箱单 |
| `cp_loose_fibre_fly` | `staple_spinning_winding` | `loose_staple_fibre_fly_output` | 废物称量和去向记录 | 废物身份；收集点；质量；批次或期间；回用、回收或处理去向 | 单独收集和称量 | kg | 每次收集或每个生产批次 | 所代表生产期间全覆盖 | 所有纳入的纺纱和络筒收集点 | 汇总单独称量的飞花质量；不得与不合格纱合并 | 称量记录；废物日志；去向接收凭证 |
| `cp_offspec_yarn` | `staple_spinning_winding` | `offspec_blended_yarn_output` | 剔除品称量和去向记录 | 剔除品身份；原因；质量；批次；内部回用、回收或处理去向 | 单独记录剔除并称量 | kg | 每次剔除或每个生产批次 | 所代表生产期间全覆盖 | 所有纳入的纺纱、加捻和络筒工序 | 汇总单独称量的不合格纱质量；不得与松散纤维飞花合并 | 质量剔除记录；称量记录；去向接收凭证 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_artificial_fibre_fraction` | 参考产品和入厂混合纤维条 | 人造短纤维占比 = 人造短纤维质量 / 全部组成纤维质量；记录占比须低于 85%，且所有组成纤维占比须按已记录的计量和舍入约定与声明总量相符 | 组成纤维质量；人造纤维身份 | 人造短纤维质量占比 | `unsd-cpc-3-0-2025` |
| `calc_reference_normalization` | 每个定量清单行 | 归一化数量 = 实测或核对后的该行数量 / 实测合格净纱输出质量 | 该行数量；合格净纱输出质量 | 每 1 kg 合格净纱的数量 |  |
| `calc_electricity_use` | 外购交流电 | 用电量 = 归属至前景过程的核对后电表输入量 / 实测合格净纱输出质量 | 电表读数；外送电量；批次归属；输出质量 | 每 1 kg 合格净纱的 kWh |  |
| `calc_delivered_cone_mass` | 纸板纱管 | 交付纱管质量 = 未退回的交付纱管数量乘以经核实的供应商单个纱管质量；有直接总称量结果时使用总称量 | 交付数量；退回数量；经核实单个质量或总质量 | 每 1 kg 合格净纱的纱管质量 kg |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考纱线 | 保留精确产品 UUID 和已声明的 CPC 26461 范围限定信息，包括非零售市场状态及排除缝纫线。 | 产品流身份；批次质量规格 |
| `dq_composition` | 纤维条和纱线 | 识别每种组成纤维，并在共同调湿或含水基准下保留质量或质量占比；不得推断无记录的混纺成分。 | 供应商规格；成分试验或证书；批次质量记录 |
| `dq_temporal_alignment` | 全部前景记录 | 覆盖相同的所代表生产期间；使用不同电表或库存期间时须记录核对方法。 | 带时间戳的电表、物料、生产和废物记录 |
| `dq_completeness` | 过程清单 | 将每种直接消耗产品、交付载体、合格产品、单独收集的废物和任何直接基本流分别作为原子交换纳入。 | 清单核对和过程巡查 |
| `dq_identity_gaps` | 未解析的清单流 UUID | 保留具体交换名称和审查状态；不得替换为更宽泛、相邻或分类不同的 Tiangong 流。 | manifest 身份审查以及后续 hybrid search 与 direct read 证据 |
| `dq_mass_balance` | 所代表生产批次 | 在场址已记录计量不确定度内，将入厂纤维条质量与合格纱线、松散纤维飞花、不合格纱及任何其他单独记录的质量输出核对。 | 称量记录；批次核对；不确定度披露 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 确认精确产品 UUID `2fde586f-9999-4f3e-8022-fe0d8a19e270`、Product flow 类型、CPC 26461 语义、Mass 属性 UUID、Units of mass UUID 和 kg 参考单位。 | `unsd-cpc-3-0-2025` |
| `validate_category_scope` | 参考纱线 | 确认产品不是缝纫线、不是供零售纱线、含有人造短纤维，且人造短纤维占全部纤维质量低于 85%。 | `unsd-cpc-3-0-2025` |
| `validate_composition_reconciliation` | 参考纱线和入厂纤维条 | 要求命名每种组成纤维，且各成分占比按已记录的计量和舍入约定与声明总量相符。 |  |
| `validate_reference_mass` | 参考数量 | 确认在已声明调湿或含水状态下精确为 1 kg 合格净纱，并排除纱管和包装质量。 |  |
| `validate_atomic_inventory` | 每个清单卡 | 确认每张卡描述一种物理产品、废物或基本流，且不含集合标签、选择指令或合并选项。 |  |
| `validate_electricity_context` | 外购交流电 | 要求计量数量、电压等级、电网地理范围、读数期间和现场发电处理方式；拒绝未指定的电力候选。 | `jrc-textiles-bref-2023` |
| `validate_mass_balance` | 所代表生产批次 | 在已记录场址计量不确定度内，将入厂纤维条质量与合格纱线及全部单独记录的质量输出核对。 |  |
| `validate_unresolved_identities` | 清单 UUID 引用 | 要求每个 UUID 具有精确的 hybrid search 和 direct read 证据；未解析行保持 UUID 为空并予以披露，不得使用已拒绝候选。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 短纤维纺纱和络筒前景单元过程数据集 |
| downstream_use | 可作为需要匹配 CPC 26461 非零售混纺纱输入的研究中的次级数据集或背景数据集 |
| allowed_use | 与已声明的人造纤维占比、组成纤维、纱线规格、起始条件、生产路线、地理范围、技术和调湿或含水状态相匹配的产品 |
| excluded_use | 缝纫线；供零售纱线；长丝纱线；人造短纤维质量占比达到或超过 85% 的纱线；缺少成分证据的纱线；未通过链接数据集表示的湿法加工或纤维制造 |
| required_metadata | 精确参考 UUID；组成纤维成分；纱支；纺纱系统；捻度；染色状态；调湿或含水状态；地理范围；技术；生产期间；电力场景；载体和包装处理；上游纤维条数据集 |
| required_quality_disclosure | 前景记录覆盖率；电表和称量基准；分配或细分方法；成分证据；质量平衡结果；废物去向；未解析 UUID 身份；偏离核心边界之处 |
| update_trigger | 产品分类范围、参考流身份、纤维成分规则、起始条件、纺纱路线、精确清单 UUID 解析或重要前景证据发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | official_guidance | 联合国统计司，*Central Product Classification (CPC) Version 3.0 Explanatory Notes*，代码 26461，2025 年 6 月 30 日。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 精确产品类别边界、排除项、人造纤维质量占比条件及分类校验 |
| `jrc-textiles-bref-2023` | official_guidance | 欧盟委员会联合研究中心，*Best Available Techniques (BAT) Reference Document for the Textiles Industry*，2023 年 1 月，第 2.4.2-2.4.3 节和第 4.7.2 节。https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf | 短纤维纺纱工序分解；纺纱润滑剂相关性；电力作为纺纱主要能源；松散纤维与纱线剔除物的单独收集 |
