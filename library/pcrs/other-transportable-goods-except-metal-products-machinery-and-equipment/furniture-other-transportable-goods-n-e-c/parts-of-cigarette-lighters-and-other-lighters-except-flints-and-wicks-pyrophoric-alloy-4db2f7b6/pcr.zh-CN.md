---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.parts-of-cigarette-lighters-and-other-lighters-except-flints-and-wicks-pyrophoric-alloy-4db2f7b6
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 被动塑料替换端盖：外包制造至首次单独放行

## 1. 范围与适用性

本 PCR 仅覆盖单独供应、适配一个确定型号多用途打火机的被动塑料替换端盖：受托外部制造采用上游黑箱，随后进行非操作性检查、包装及实际首次单独放行。不推断树脂身份、成型技术、配方、质量、寿命或实测生产结果。具体产品依据为 CBP N334329 的单独替换端盖，而不是同一裁定讨论的空的完整多用途打火机。适用前须具备部件图、供方批次、材料声明及首次放行记录。`cbp-n334329`

冻结的 2025 年 6 月 CPC 3.0 坐标为 38995（PDF 第 198 页）。2026 年 10 月说明表 CPC3!A1853:D1853 将其关联至 HS 2022 3606.90 和 9613.90；本 PCR 仅采用 9613.90 的被动部件分支。相邻 38994 覆盖完整打火机，包括相应的空完整商品；38998 为火柴。排除火石、灯芯、发火合金、可燃制品、点火机构、储料容器及全部操作性工作。完整打火机的装饰套（CBP M82869）和包装盒（CBP I88260）即使为空，也属于不同商品。本塑料端盖单一范围亦排除金属铰接壳及多用途附件。`unsd-cpc3-2025` `unsd-cpc3-2026` `cbp-m82869` `cbp-i88260`

所有条件卡片均须有实际发生证据。只有实际存在对应材料时才适用纸箱及 LDPE 袋卡片；端盖裁定不证明其存在、组成或重复使用。完成数据集前，须将实际缺少的每种包装组件、公用事业、服务、废物和基本排放物种各设一张原子卡片。缺少数量和供方链接是未决，不是零。核心模块引用仅提供结构，其保留占位文件不证明方法已审。候选 PEF 模块为声明单位、边界、完整性及分配推理提供参考；本有限的摇篮至首次放行清单不确立完整 PEF 符合性或避免影响声明。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.parts-of-cigarette-lighters-and-other-lighters-except-flints-and-wicks-pyrophoric-alloy-4db2f7b6 |
| classification_refs | CPC 3.0 38995，单独首次放行的被动塑料替换端盖与该代码的较窄映射已获接受，见 docs/adr/2026-11-22-accept-cpc-38995-standalone-passive-plastic-replacement-end-cap.md |
| covered_products | 多用途打火机被动塑料替换端盖 |
| excluded_products | 完整打火机（即使为空）、金属铰接壳、装饰套、作为参考产品的包装盒、多用途护罩及与点火有关的制品和过程。 |
| representative_product | 与 N334329 所述部件身份相符、单独供应的被动塑料替换端盖；须声明实际型号、材料和批次。 |
| production_route | 受托外部制造（黑箱）→实物接收→非操作性尺寸与外观检查→包装→首次单独放行。不声称采用注塑或某种聚合物。 |
| market_state | 实际负责生产者首次放行门处的新制、散件、被动替换部件，不是完整器具或零售套装。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 作为单独放行部件供应的型号特定被动塑料替换端盖；采用中间部件声明单位。 |
| How much | 同一配置首次新放行端盖裸品净质量 1 kg。 |
| How well | 图样版本、材料声明、尺寸、完整性及非操作性验收标准可追溯；不推断安全认证或工作性能。 |
| How long or cycle | 一个生产队列至首次放行；不声明量化使用寿命或使用循环。 |
| reference_flow_link | reference_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 多用途打火机被动塑料替换端盖 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 专用替换部件及实际图样与型号；不虚构组成的聚合物及材料声明；制造供方及黑箱清单覆盖；供方与负责生产者实体门；首次单独放行事件及批次谱系；校准净质量 Q；包装不计入 Q；放行前后存量及原件退回；实际检查标准；观察期与场址；每种包装材料及购入与退回通道；供方已发生负担覆盖；运输及公用事业原生单位绑定；分配与未决数据。 |

每项必需限定信息均须在消费者可见元数据、参考流备注或等效过程文件中声明。质量不代表不同端盖配置具有等效功能。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q 为按 cp_release 校准计量的本队列新制首次放行端盖裸品净质量之和。排除包装、期初已放行库存、退回及重复发运。所有适用卡片统一采用每 1 kg 参考流基准。 |
| mass_conversion | 所有质量清单行 | Mass | kg | 采用实际批次称量并扣皮；g 乘 0.001 转为 kg。件数仅支持追溯，按件取得的数量须有实际配置特定裸品实测质量，并与批次总量核对，不采用通用端盖重量。 |
| customs_count | 参考产品 | Mass | kg | USITC 2023 HTS Revision 10 的 9613.90.80.00 统计单位为 No.（件），不是 kg，且该行不限于本端盖。海关数量既不是端盖净 kg，也不是厂家首次放行量。同期单据须匹配同一批合格端盖；无法直接总量称重时，按配置、材料及批次分层，结合件数与代表性校准裸品质量抽样，记录抽样选择、不确定性及批次核对。N334329 描述拟进口商品，不是已观测报关票或厂内计量。`usitc-hts-2023-rev10` `cbp-n334329` |
| meter_energy | release_electricity; post_electricity | Energy `f6811440-ee37-11de-8a39-0800200c9a66` | kWh | 电表电能是计量能量，不是供方流原生属性声明。已核实 Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` 以 MJ 为参考，kWh 系数为 3.6；仅当实际供方要求 MJ 时转换。另核供方流及原生属性，不得因单位组相同便推定为净热值。 |
| transport_units | road_freight | Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` | t*km | 已核实货物运输（质量×距离）单位组 `838aaa21-0117-11db-92e3-0800200c9a66` 以 t*km 为参考，kg*km 系数为 0.001。这仅支持数量转换；实际承运人、车型、服务流身份、装载及已含空返约定仍须独立核实。 |
| zero_output | 所有清单行 | 原始广延数量 | 原单位 | Q=0 时，以原单位保留失败、待机使用、库存及返工和队列负担。不生成归一化数据集，不删除这些记录，也不改以发运质量为分母。 |
| service_denominator | post_gate; packaging | Mass | kg | 后续期间可在当期新放行 Q=0 时仍发生真实服务。以原单位保留其广延数量。仅当原队列具有可追溯且为正的原始放行质量 Q_original 时，才可单列后续服务强度。不得以 Q_original 替换当期实物账 Q、将旧商品归于新生产队列或创造另一个制造参考。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 首次单独放行前接收的指定受托制造被动塑料端盖；实际上游制造和交付关联至黑箱。 |
| starting_condition_role | 前景采集边界，不是无环境负担的生命周期起点。 |
| product_classification_scope | 仅限 CPC 3.0 38995 / HS 9613.90 的专用被动替换端盖子集。 |
| recursive_input_rule | 已放行端盖是承接原有负担的商品或退回件，不是新生产。保留原身份，不递归声称另一次首次放行；未放行供方端盖须有一个有界上游清单。 |
| upstream_dataset_requirement | 每个实际供方批次关联相容清单，覆盖端盖制造负担、废料处理及声明的上游材料和能量。要求确认供方包装和运输覆盖，未覆盖部分补计一次；不要求配方或操作性拆解。 |
| disclosure | 声明供方、实体门、首次放行、承接库存负担、排除的下游功能及每项未决覆盖信息；分别呈现制造及放行后服务。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_first_release | first_release | 以受托生产及验收记录核实原生产者与实际首次单独放行。如果供方已将端盖作为可销售独立部件放行，应采用原始门及数据集；后续接收、换标、检查、调拨或转售均不创造 Q。实际发生的中间活动另列服务层披露，不得遗漏。 | `cbp-n334329` |
| boundary_upstream | unreleased_cap | 制造保持黑箱但承接负担：供方清单须识别相同端盖、材料与批次及实际纳入门。不得从分类来源推断树脂加工、数值收率或内部排放；缺失上游活动保持未决，不是空的零清单。 | `eu-pef-2021` |
| boundary_perimeter | all processes | 库存采用一个明确场址实体周界。已在周界外的物品属于外发，不得仅因生产者保留产权而同时列入边内期末存量。外地产权另设备查记录，实际运输及服务计入一次；内部转移合并抵销。 |  |
| boundary_completeness | all processes | 首次放行前实际检查、搬运、包装、损失及废物处理与上游供方清单均纳入。调查其他公用事业及直接排放，将实际物种与介质分别设卡。操作试验、点火工作及下游器具、使用和寿命终结不属于本部件数据集。不暗示完整生命周期 PEF 或部件性能等效。 | `eu-pef-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| first_release | 接收、检查及首次单独放行 | required | 实际新生产队列，不是转售 | foreground | reference_product |
| packaging | 独立包装实物与负担账 | conditional | 逐项实际材料；首次放行生产份额与后续服务份额分开 | foreground | 同一队列 Q；不以包装输出为参考 |
| post_gate | 已放行库存核对及独立服务 | conditional | 实际已放行留库、退回或后续发运；不假设流转 | foreground | 仅以原队列 Q 为报告基准，不新增放行 |

首次放行产品输出与 released_stock 是相邻实物账中同一次内部交接，合并实物平衡时抵销。制造参考仍是声明的首次放行事件；post_gate 服务报告不能重复叠加其中已发生的生产负担。包装转移承接实物及其剩余负担，不构成第二个参考功能。

### 过程：接收及首次放行（`first_release`）

#### 输入

##### 产品流

###### 尚未放行的多用途打火机被动塑料替换端盖 （`unreleased_cap`）

受托制造商供应的一个指定端盖，尚未首次作为独立产品放行。供应商制造采用上游黑箱清单，不提供配方。核实并非已放行商品，也非完整打火机。

- 选定流：尚未放行的多用途打火机被动塑料替换端盖
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算得到的 a_i 结果；以 cp_supplier 采集原始数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_supplier`
- 来源：`cbp-n334329`; `eu-pef-2021`

###### 交流电 （`release_electricity`）

仅记录放行前检查、包装及相关搬运实际用电，识别场址、电表、供电和电压；不重复上游制造商用电。

- 选定流：交流电
- 流属性/单位：计量能量 / kWh；供方原生属性未定
- 数量规则：采用本行一次计算得到的 a_i 结果；以 cp_energy 采集原始数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：`eu-pef-2021`

###### 公路货车货运 （`road_freight`）

仅当首次放行门之前实际存在且未被供应商清单覆盖的公路路段时适用。记录载货质量、距离、装载率和空返；其他实际运输方式须另设卡片。

- 选定流：公路货车货运
- 流属性/单位：货物运输（质量×距离）`838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- 数量规则：采用本行一次计算得到的 a_i 结果；以 cp_transport 采集原始数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_transport`
- 来源：`eu-pef-2021`

##### 废物流

不预设交换；数据完成前调查实际发生情况，并逐项添加已识别的流。

##### 基本流

不预设交换；数据完成前调查实际发生情况，并逐项添加已识别的流。

#### 输出

##### 产品流

###### 尚未放行的多用途打火机被动塑料替换端盖 （`unreleased_cap_transfer`）

仅适用于放行前实际退供或其他对外转移，即实物账 Tu。与废物和内部返工区分；保留接收方、原批次及互斥剩余负担转移。

- 选定流：尚未放行的多用途打火机被动塑料替换端盖
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算得到的 a_i 结果；以 cp_supplier 采集原始数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_supplier`

###### 多用途打火机被动塑料替换端盖 （`reference_product`）

唯一参考输出为完成实际非操作性检查及所需包装后，首次作为独立替换部件放行的端盖裸品净质量；不含包装质量。

- 选定流：多用途打火机被动塑料替换端盖
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_release`
- 来源：`cbp-n334329`; `eu-pef-2021`

##### 废物流

###### 不合格被动塑料替换端盖 （`cap_reject`）

仅记录首次放行前实际交付废物处置的端盖，分别记录去向与处理；待判库存、退供件及可返工件不默认是废物。

- 选定流：不合格被动塑料替换端盖
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算得到的 a_i 结果；以 cp_supplier 采集原始数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_supplier`
- 来源：`eu-pef-2021`

##### 基本流

不预设交换；数据完成前调查实际发生情况，并逐项添加已识别的流。

### 过程：包装账（`packaging`）

#### 输入

##### 产品流

###### 瓦楞运输纸箱 （`carton_purchase`）

仅记录进入声明场址实体周界的实际购买件。即使制造负担已由供应商数据集覆盖，仍记录实物。

- 选定流：瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算得到的 a_i 结果；以 cp_packaging 采集原始数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`eu-pef-2021`

###### 瓦楞运输纸箱 （`carton_first_external`）

首次非购买外部接收，包括随端盖来料、借入及无偿调拨，无论供应商清单是否覆盖。没有同一件先前外发凭证，不得当作退回。

- 选定流：瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算得到的 a_i 结果；以 cp_packaging 采集原始数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`eu-pef-2021`

###### 瓦楞运输纸箱 （`carton_true_return`）

仅记录能证明是本站先前外发的同一实物的真实退回。承接剩余已发生负担，不新增购置或第二次制造负担。

- 选定流：瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算得到的 a_i 结果；以 cp_packaging 采集原始数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`eu-pef-2021`

###### 低密度聚乙烯包装袋 （`bag_purchase`）

仅记录进入声明场址实体周界的实际购买件。即使制造负担已由供应商数据集覆盖，仍记录实物。

- 选定流：低密度聚乙烯包装袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算得到的 a_i 结果；以 cp_packaging 采集原始数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`eu-pef-2021`

###### 低密度聚乙烯包装袋 （`bag_first_external`）

首次非购买外部接收，包括随端盖来料、借入及无偿调拨，无论供应商清单是否覆盖。没有同一件先前外发凭证，不得当作退回。

- 选定流：低密度聚乙烯包装袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算得到的 a_i 结果；以 cp_packaging 采集原始数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`eu-pef-2021`

###### 低密度聚乙烯包装袋 （`bag_true_return`）

仅记录能证明是本站先前外发的同一实物的真实退回。承接剩余已发生负担，不新增购置或第二次制造负担。

- 选定流：低密度聚乙烯包装袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算得到的 a_i 结果；以 cp_packaging 采集原始数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`eu-pef-2021`

##### 废物流

不预设交换；数据完成前调查实际发生情况，并逐项添加已识别的流。

##### 基本流

不预设交换；数据完成前调查实际发生情况，并逐项添加已识别的流。

#### 输出

##### 产品流

###### 瓦楞运输纸箱 （`carton_out`）

实际外发包装，分别标记为随货、退还所有人或其他转出。各数量及剩余负担去向互斥。

- 选定流：瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算得到的 a_i 结果；以 cp_packaging 采集原始数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`eu-pef-2021`

###### 低密度聚乙烯包装袋 （`bag_out`）

实际外发包装，分别标记为随货、退还所有人或其他转出。各数量及剩余负担去向互斥。

- 选定流：低密度聚乙烯包装袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算得到的 a_i 结果；以 cp_packaging 采集原始数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`eu-pef-2021`

##### 废物流

###### 废弃瓦楞运输纸箱 （`carton_waste`）

仅记录实际废弃材料，计量净质量及处理去向；不得仅因回收商接收便抵扣原生生产。

- 选定流：废弃瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算得到的 a_i 结果；以 cp_packaging 采集原始数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`eu-pef-2021`

###### 废弃低密度聚乙烯包装袋 （`bag_waste`）

仅记录实际废弃材料，计量净质量及处理去向；不得仅因回收商接收便抵扣原生生产。

- 选定流：废弃低密度聚乙烯包装袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算得到的 a_i 结果；以 cp_packaging 采集原始数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`eu-pef-2021`

##### 基本流

不预设交换；数据完成前调查实际发生情况，并逐项添加已识别的流。

### 过程：已放行库存账（`post_gate`）

#### 输入

##### 产品流

###### 多用途打火机被动塑料替换端盖 （`released_stock`）

本队列 Q 从放行前账转入已放行库存账的内部转移。合并实物账时与 reference_product 抵销，不形成第二次上游购入。

- 选定流：多用途打火机被动塑料替换端盖
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_stock`
- 来源：`eu-pef-2021`

###### 多用途打火机被动塑料替换端盖 （`old_cap_return`）

仅适用于实际退回的已放行端盖，匹配原始放行队列及先前发运。复检或重新包装均不创造新的 Q。

- 选定流：多用途打火机被动塑料替换端盖
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算得到的 a_i 结果；以 cp_stock 采集原始数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_stock`

###### 多用途打火机被动塑料替换端盖 （`external_released_cap`）

仅适用于已放行端盖首次从外部接收，即 If，包括购入商品或无偿、借入调拨，且没有同件先前从本站外发的凭证。既非新 Q 也非 Rold；分别保留原队列及已发生历史与剩余负担记录。

- 选定流：多用途打火机被动塑料替换端盖
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算得到的 a_i 结果；以 cp_stock 采集原始数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_stock`

###### 交流电 （`post_electricity`）

仅记录首次放行后存储、退回检查或重新包装的实际用电。作为独立服务层报告，不得悄然并入仅制造参考结果。

- 选定流：交流电
- 流属性/单位：计量能量 / kWh；供方原生属性未定
- 数量规则：采用本行一次计算得到的 a_i 结果；以 cp_energy 采集原始数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：`eu-pef-2021`

##### 废物流

不预设交换；数据完成前调查实际发生情况，并逐项添加已识别的流。

##### 基本流

不预设交换；数据完成前调查实际发生情况，并逐项添加已识别的流。

#### 输出

##### 产品流

###### 多用途打火机被动塑料替换端盖 （`gross_dispatch`）

已放行端盖实际实物总外发 Dgross，互斥分为销售或发运、再次发运及其他转移（含退还外部所有人）。全部已放行产品对外转移均纳入此处，不另设 Tf。原有环境负担按队列账一次归属，不按发票重复计算。

- 选定流：多用途打火机被动塑料替换端盖
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算得到的 a_i 结果；以 cp_stock 采集原始数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_stock`

##### 废物流

###### 废弃的已放行被动塑料替换端盖 （`post_cap_waste`）

仅记录实际放行后报废。保留原队列，区分剩余已发生负担与新增废物处理负担。

- 选定流：废弃的已放行被动塑料替换端盖
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算得到的 a_i 结果；以 cp_stock 采集原始数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_stock`

##### 基本流

不预设交换；数据完成前调查实际发生情况，并逐项添加已识别的流。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_direct | all processes | 分配前按实际批次及活动细分。不虚构共产品或避免生产完整打火机的效益。共享负担先评估细分及系统扩展；不可行时采用有依据的底层物理关系，其后才是其他有依据的关系。记录因果依据、全部接收方、和为一的分配因子及敏感性。计量运行时间或活动量可支持检查用电分配，但端盖质量本身不证明因果关系。 | `eu-pef-2021` |
| allocation_inherited | all processes | 对每个原件、队列及交换 i，保持 B_open,i + B_external,i + B_new,i = B_current,i + B_close,i + B_transfer,i + B_other,i。B_external 仅为从外部进入的剩余已发生份额，不是第二次原始生产。期末、外转及其他去向互斥，每份负担只销账一次。生产及后续服务层分开，零产出负担凭证承接。 |  |
| allocation_release_bridge | first_release; post_gate; packaging | 负担恒等式分别用于未归属放行前负担账和后续已放行原件保管与服务账。生产结果为归于整个首次放行队列的负担除以 Q，包含有依据的不合格件与搬运份额；新放行但期末仍在库的商品已包含在该 Q 内。同一已归属向量作为内部交接带入已放行原件历史，不再计费一次。实物期末存量可含已归属的已发生负担：将其保留为不可叠加历史，与尚未归属的 B_close 份额区分。后账发运把已发生历史交至原队列接收方，不归于新 Q。包装同理，不得首次使用已计全额制造，期末存量或退回时再计。实物废物外发不意味着移除不合格件负担；实际损失及处理归原生产队列，Q=0 时保留有据可查的待归属份额。 |  |
| allocation_packaging | packaging | 实物接收不等于新增环境负担。对每个纸箱或袋，包括无偿或借入接收，记录供方是否已覆盖制造、交付或服务。实际承担但未覆盖的各负担仅补计一次；供方覆盖未知是待查，不是免费。真实退回承接原剩余份额，仅新增实际运输及服务。不假设重复使用循环、折耗比例或回收抵扣，以实际服务和队列记录论证分配。 | `eu-pef-2021` |
| allocation_returns | post_gate | 期初已放行商品、退回件及再发运商品的原生产负担属于原队列，不加入当期 Q，也不随每次发运重计。实际新增存储、检查、重新包装及废物处理是独立计量的服务负担，归于相应队列或接收方，不得消失或重复计入。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | first_release | 放行质量 | 现场及供方原始记录 | 批次；图样版本；材料声明；首次放行标记、时间、场址；端盖净质量；皮重；件数；拒收；校准 | 以校准秤称量验收裸端盖，将唯一放行编号与原生产者记录核对；不需要点火或操作试验。 汇总唯一新放行裸品质量 Q；全部适用数量按每 1 kg 参考流取得。 | kg | 每次放行 | 声明的完整观察期及承接历史 | 实际制造商及声明实体周界 | 每 1 kg 参考流 | 原始单据；校准；覆盖核对；残差说明 |
| cp_supplier | first_release | 端盖接收、拒收及上游覆盖 | 现场及供方原始记录 | 供方批次；受托订单；先前放行状态；实际材料声明；来料裸品 kg；拒收；退供；在制存量；供方门与覆盖；承接负担向量 | 以实际制造商记录核对收货及验收单，取得与批次匹配的供方黑箱清单；不推断内部成分或制法。保留全部损失和去向。 存量与负担闭合后，以 calc_reference 将实际上游与拒收数量归于放行队列，按每 1 kg 参考流表达。 | kg；交换原生单位 | 每次接收或处置 | 声明的完整观察期及承接历史 | 实际制造商及声明实体周界 | 每 1 kg 参考流 | 原始单据；校准；覆盖核对；残差说明 |
| cp_energy | first_release; post_gate | 电力 | 现场及供方原始记录 | 电表期初期末；倍率；日期；待机用量；实际任务工时；分配接收方；供电身份；电压；原生属性与单位；供方覆盖 | 读取可追溯电表并核对账单及任务与场址范围。放行前和后续服务分开，绑定供方流前核实完整原生属性与单位记录。 实际计量能量先归于队列与服务层，再按每 1 kg 参考流表达；不得再除以产出件数或观察时间。 | kWh | 每个观察区间与任务 | 声明的完整观察期及承接历史 | 实际制造商及声明实体周界 | 每 1 kg 参考流 | 原始单据；校准；覆盖核对；残差说明 |
| cp_transport | first_release | 实际公路货运 | 现场及供方原始记录 | 路段；起止实体门；载货质量；距离；实际货车与装载；空返；承担方；上游纳入情况 | 对未覆盖的实际公路路段使用运单和路线凭证，其他实际方式逐项识别。 采用相容供方装载及返程约定计算载货吨公里，归属一次，再按每 1 kg 参考流表达。 | t；km；tkm | 每个实际路段 | 声明的完整观察期及承接历史 | 实际制造商及声明实体周界 | 每 1 kg 参考流 | 原始单据；校准；覆盖核对；残差说明 |
| cp_packaging | packaging | 逐种材料 | 现场及供方原始记录 | 材料与等级；原件编号或同质批次；件数及实测皮重；购买；首次非购买外部接收；同件真实退回；期初期末存量；外发类别；废物；供方负担覆盖；剩余负担向量 | 逐种实际材料称重计数。匹配接收、借入及无偿调拨单据和先前外发与退回编号，随供方来料包装也须记录。检查实体周界与处置，独立于付款情况审计覆盖。 闭合每种材料的实物与负担账，区分制造、后续服务及其他队列，再按每 1 kg 参考流归属。 | kg 与件数分开 | 每次事件及区间边界盘点 | 声明的完整观察期及承接历史 | 实际制造商及声明实体周界 | 每 1 kg 参考流 | 原始单据；校准；覆盖核对；残差说明 |
| cp_stock | post_gate | 相邻实物账 | 现场及供方原始记录 | 队列；原放行编号；期初期末未放行 kg；接收未放行 kg；Q；未放行废物与转出；期初期末已放行 kg；原件退回 kg；外部已放行接收 kg；总发运 kg；已放行废物与转出；承接及新增负担向量 | 使用校准裸品质量记录、队列放行历史及实物盘点。逐件将旧货退回关联原发运，识别全部互斥流转，包括周界外物品。 以同一 Q 闭合两账；仅对其所属队列与服务层按每 1 kg 参考流汇总归属数量。 | kg；交换原单位 | 每次流转及期间边界 | 声明的完整观察期及承接历史 | 实际制造商及声明实体周界 | 每 1 kg 参考流 | 原始单据；校准；覆盖核对；残差说明 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_reference | all inventory rows | Q>0 时，a_i = A_i / Q；A_i 为实物存量和负担核对后归于本队列的广延交换数量。全部数量使用卡片单位，生产与服务层分开，只除一次。唯一参考输出为 1 kg；内部转移抵销，不得将采购、接收、耗用及发运均叠作独立新增负担。 | A_i; Q; cp_release; applicable collection protocol | a_i | eu-pef-2021 |
| calc_later_service | post_gate; packaging | 实际后续服务仅在同一原队列 Q_original>0 且有独立记录时，采用 s_i = S_i / Q_original；否则保留未归一化 S_i 并待决。这是明确的仅服务报告分支，不是对当期 Q 第二次应用 calc_reference，也不是新生产结果。关联制造已发生历史，不重复加算。当期实物 Q 仍是实际新放行质量，可以为零。 | S_i; Q_original; cp_stock; cp_packaging; cp_energy | s_i |  |
| calc_cap_books | first_release; post_gate | 放行前：U0 + Iu = Q + U1 + Wu + Tu。放行后：F0 + Q + Rold + If = Dgross + F1 + Wf。全部符号为同一期间与周界内裸品 kg，类别互斥：U 为未放行存量，Iu 为接收未放行端盖，W 为废物，T 为其他外转；F 为已放行存量，Rold 为真实旧货退回，If 为其他外部已放行接收，Dgross 为全部已放行产品总外发，包含互斥的其他转出分项，不另设 Tf。内部返工留在 U 内，不二次接收。两账相加时 Q 抵销。Q 为实测首次放行量，不是净发运量；期初已放行商品和旧货退回不增加 Q。 | cp_release; cp_supplier; cp_stock | 两账残差及唯一 Q |  |
| calc_packaging_books | packaging | 每种实际材料 j 独立保持：S0,j + Pj + Ej + Rj = S1,j + Oj + Wj + Tj。P 为购买实物接收；E 为首次非购买外部接收，包括来料包装、借入及无偿调拨；R 为同一件在有据可查的本站先前外发后的真实退回。O 为随货包装，W 为实际废物，T 为其他外发（含退还所有人）。件数与实测 kg 分开，退回不再计作 P 或 E。内部包装或拆包改变保管与状态，不改变外部存量。按 allocation_packaging 另核供方已覆盖负担。 | cp_packaging | 逐材料实物闭合 |  |
| calc_burden_books | all processes | 按 allocation_inherited 逐交换记账，保留原件编号及期初、外部剩余、新增、当期、期末、互斥外转和其他份额。如果同一件在本期转出后又退回，保留实物总流转，但重新归属前以同一编号冲回先前剩余负担转出，不再将其作为新的 B_external 引入。期初已在周界外物品退回时承接剩余负担一次。核实供方包装、交付及电力覆盖，避免重复整包清单。 | cp_supplier; cp_packaging; cp_stock; cp_energy | 逐交换负担残差及归属 |  |
| calc_energy | release_electricity; post_electricity | 记录 kWh = (电表期末 - 电表期初) × 实际倍率。按 allocation_direct 归于实际任务与队列。若相容供方使用 MJ，MJ = 3.6 × kWh；不得将两单位作为两个独立电力投入。转换不证明供方原生属性。 | cp_energy | 归属电能 |  |
| calc_transport | road_freight | 路段载货吨公里 = 实测载货 kg / 1000 × 实际 km。匹配供方装载与空返约定，每条实际路段计一次；费用不是距离或运输质量。 | cp_transport | t*km | eu-pef-2021 |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_identity | reference_product | 确认专用散件被动端盖及实际供方、型号、材料与批次。历史裁定仅证明其所述产品，不证明当前工厂路线、聚合物、质量或认证。 | cp_release; cp_supplier; cbp-n334329 |
| quality_customs | reference_product | 保留同期同批合格件数及校准净质量，或有依据且含不确定性的分层抽样方案。HTS 的 No. 件数可能含其他部件，不得由裁定或税则行推断 kg、实际发生进口或首次放行。 | cp_release; usitc-hts-2023-rev10; cbp-n334329 |
| quality_closure | all processes | 以校准计量不确定度及可追溯修正解释每项实物与负担残差，不设通用容差或无解释配平项。记录实际服务及负担接收方，包括零产出期间。 | cp_stock; cp_packaging; cp_release |
| quality_provider | all inventory rows | 完成数据集使用前解决选定 UUID、原生属性、单位组与单位、流类型、状态、介质及供方相容性。Mass/kg 支持本身不是端盖或废物身份。搜索候选不证明材料适用性或上游覆盖。 | cp_supplier; cp_energy; cp_transport |
| quality_representativeness | all processes | 报告观察期、地域与技术范围、抽样选择、计量不确定度、排除或未测活动及来源限制。无实际证据不提供数值范围、收率或影响。 | cp_release; eu-pef-2021 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_scope | reference_product | 拒绝将空完整打火机、装饰套、多用途壳、包装盒或金属壳作为本参考产品。核实散件专用塑料端盖及实际首次放行证据；仅有海关编码或供方目录不确立数据集适用性。 | `cbp-n334329`; `cbp-m82869`; `cbp-i88260` |
| validation_reference | all inventory rows | 要求唯一 reference_product 输出、Q>0、扣除包装的裸品质量以及统一的每 1 kg 参考流分母。解释放行前后存量残差，两相邻账的 Q 抵销。旧货退回、期初已放行库存及发运不创造 Q。 |  |
| validation_packaging | packaging | 对每种实际包装材料，独立核实购买、首次非购买外部接收及同件真实退回，不受供方清单覆盖与否影响。闭合全部实物去向与存量。缺供方负担声明是数据缺口，实际承担的运输、购置及服务负担计一次。 |  |
| validation_burdens | all processes | 核实逐交换承接及新增负担闭合与互斥接收方，本期转出后退回仅冲回一次，保留原队列。没有明确边界及去除重复原生产负担，不得合并制造和后续服务层。 |  |
| validation_identity | all inventory rows | 有名称的未决候选不是已核实供方。明确保留未决 UUID 及支持信息，保持双语原子名称，供方原生电力属性须独立于计量能量核实。实际清单不完整时不得表示完整或已获批准。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 作为有据可查的下游装配模型部件投入；独立服务层仅在明确原队列绑定时使用。 |
| allowed_use | 核实后的型号、材料、批次路线及门，关联相容上游清单并解决流身份；质量清单比较须声明功能与质量限制。 |
| excluded_use | 整片 CPC 叶级覆盖、完整打火机 LCA、操作或点火指导、假定寿命、PEF 资格、避免完整商品生产或未核实聚合物替换。 |
| required_metadata | 全部参考限定信息；供方及原始门；Q 及唯一队列；观察期；原生流与供方绑定；分离的制造与服务层；包装、实物及负担账。 |
| required_quality_disclosure | 实测与未决交换；上游黑箱覆盖；代表性；不确定度；分配依据；实际缺少的流；实物与负担残差及供方覆盖缺口。 |
| update_trigger | 端盖设计、材料或供方、实际路线或首次放行门、包装、电力供方或属性、清单覆盖、观察期或适用分类说明发生变化。 |

## 11. 数据源

| 来源 id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD, CPC 3.0 explanatory notes, 30 June 2025, pp.197–198. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅为冻结分类坐标及相邻混合叶级标题；不提供端盖生产数据。 |
| unsd-cpc3-2026 | official_guidance | UNSD, CPC 3.0 explanatory table, 23 October 2026, CPC3!A1852:D1856, especially row 1853. https://unsdsna.azure-api.net/files/pages/cpc/CPC_Ver3_Exp_Notes_2026-10-23_for_Website.xlsx | 当前分类补充：38995 包含 HS 3606.90 及 9613.90；仅采用后者被动部件分支，不替换冻结分母。 |
| cbp-n334329 | official_guidance | CBP NY N334329, 9 August 2023, separate plastic end-cap product paragraph and classification at 9613.90.8000. https://rulings.cbp.gov/api/ruling/N334329 | 单独被动塑料替换端盖的原始文件身份依据；区分同裁定的空完整打火机。不证明聚合物等级、工艺、质量或当前工厂。 |
| cbp-m82869 | official_guidance | CBP NY M82869, 24 April 2006, decorative lighter cases at 7907.00.6000. https://rulings.cbp.gov/api/ruling/M82869 | 反例：空装饰套不确立打火机部件身份；不移用其中组成或质量。 |
| cbp-i88260 | official_guidance | CBP NY I88260, 14 November 2002, plastic lighter gift boxes at 3923.10.0000. https://rulings.cbp.gov/api/ruling/I88260 | 区分包装与参考部件的反例，不推断端盖包装材料或路线。 |
| usitc-hts-2023-rev10 | official_guidance | USITC, 2023 Harmonized Tariff Schedule Revision 10 CSV, HTS Number 9613.90.80.00, Unit of Quantity field. https://www.usitc.gov/sites/default/files/tata/hts/hts_2023_revision_10_csv.csv | 同期统计单位为 No.（件）而非 kg；须将同批端盖件数与实测净质量核对，不推断税率或实际报关票。 |
| eu-pef-2021 | official_guidance | European Commission Recommendation (EU) 2021/2279, corrected consolidated Annex I, §§3.2.1–3.2.2,4,4.2,4.4.2–4.4.3,4.5,4.6.1. https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:02021H2279-20211230 | 仅参考声明单位、生命周期完整性、原始数据、电力与运输及分配通用推理。明确的库存与队列方程属于本 PCR 采集协议，不是引述欧委会公式或完整 PEF 认证。 |
