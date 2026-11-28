---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.other-insecticides-fungicides-herbicides-and-disinfectants
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 包装液态有蹄动物啃食驱避成品：原始首放行环境核算

## 1. 范围与适用性

本方法限定于已登记、用于非杀灭型有蹄动物啃食驱避的液态完整成品，在实际生产者完成最终商品包装和标签至原始首放行的门开展非操作性环境核算，外包装及外包交接按实际发生的时间位置归属。TRICO（EPA 71637-2，含相应 TRICO PRO 品牌）是公开成品身份的代表，不代表已取得工厂记录。仅在实际记录证明同一放行边界含外包交接且此前未首放行时，才采用此采集路线。供方制造及主包装作为完整、有明确覆盖的黑箱；不以未披露组成推导生产库存。

不包括产品配方、内部制法、施用、效果、田间排放、毒理评价、已经放行商品的调拨转售、杀灭型产品及邻近分类产品。净质量声明单位仅用于此生产门比较，不是按保护面积或持续时间定义的效果功能单位。2025 冻结分类与 2026 官方补充共同用于邻界核对；历史不同产品的 CBP 裁定仅支持驱避功能邻界，不构成 TRICO 归类裁定。

美国代表成品须按适用日期的 40 CFR §152.3 识别放行事件：完成拟销售形态的包装及标签，或进入通常的待运成品区，即可触发；不要求实际装运或外部签收。待运区内未放行货须实物隔离并标记。后续换标或换装有时又构成监管 production 事件。本方法对同一净内装物仅首次计入 Q0；另存全部监管事件，后续实际新增包装、运输、维修、废物及其他环境负担按原队列续记。此规则不能把已经在生产者处触发的首事件推迟到品牌所有者的收货或外包装。其他国家需采用其实际适用门及记录，不能仅移植美国定义。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.other-insecticides-fungicides-herbicides-and-disinfectants |
| classification_refs | CPC 3.0 34669，包装有蹄动物驱避成品的较窄映射已获接受，见 docs/adr/2026-11-22-accept-cpc-34669-packaged-nonlethal-ungulate-browsing-repellent.md |
| covered_products | 有实际国家登记及批次身份的液态有蹄动物啃食驱避完整成品 |
| excluded_products | 杀虫剂、杀菌剂、除草/生长调节剂、消毒剂、特定危险农药；配方原料；使用服务；已放行商品再销售 |
| representative_product | 有实际相应标签的 TRICO / TRICO PRO 成品；各版本不得自动等同 |
| production_route | 有据供方成品制造及最终商品包装标签 → 最早原始放行事件；外包交接和外包装按实际时点归属，不推迟已触发的门 |
| market_state | 密封、可销售液态完整成品，包装另记；不能假定净含量、密度或包装材料 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 交付指定完整有蹄动物驱避成品；生产门声明单位 |
| How much | 原始首放行净内装物 1 kg |
| How well | 实际相应标签、批次、密封状态、净重及签署放行身份；不假定效果或默认组成 |
| How long or cycle | 一次原始首放行队列；不声明田间作用持续时间 |
| reference_flow_link | reference_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 液态有蹄动物啃食驱避成品 |
| 参考流属性 | 质量（Mass） `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 国家和登记号；实际品牌及标签版本；非杀灭型有蹄动物驱避目的；34666 特定组排除依据；实际生产者与外包者及交接；原始首放行签署门、批次和 Q0；包装净皮重及 BOM；上游黑箱覆盖和继承负担；场址时段；各包装 P/F/R 与前次外发链接；原生流和属性单位；残余接收方、分配及覆盖缺口 |

构建前景数据包时，必需限定信息须在元数据、过程说明或参考流备注中明确声明。缺失者参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| net_contents | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q0 为同一队列首次签署放行的完整成品净质量总和；使用经校准称量的毛重减逐组件实测皮重，扣除未放行、退回重复及转售。包装及有效成分质量均不能替代分母。 |
| same_basis | 所有清单行 | Mass / Energy / transport service | kg; kWh; t·km | 各行保留本身分子单位，每 1 kg 参考流；同一队列实际归属量除 Q0。件数须乘同规格实测皮重，体积须有同批实测密度；不得从标签容积或成分声明推导密度。 |
| meter_energy | electricity | Energy `f6811440-ee37-11de-8a39-0800200c9a66` | kWh | 技术 Energy 指向能量单位组 93a60a57-a3c8-11da-a746-0800200c9a66，千瓦时因子 3.6 对 MJ。此为电表换算，不是未定供方流的原生属性声明；供方净热值或其他属性须另核。 |

## 5. 系统边界

数据包须先列出本次核算的明确实物周界（具名生产者、外包方场址及具体区域）并对内装物、每种包装和交接使用同一周界。只有明确纳入周界的场外地点才进入 S0/S1；本站所有但已越出周界的实物仅在所有权备查账追踪，不同时计作 S1。D/U 为越出此周界的外发，R 为跨回同一周界且链接前次外发的同件退回；周界内部移动不产生 D/U/R。放行可发生在周界内部，故其状态转换与跨周界实物移动分别记录。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际供方完成的未首放行完整成品及实际包装，在已证明的生产者/外包放行边界内交接 |
| starting_condition_role | 前景采集接口，非零负担起点；实际制造及主包装上游聚合仍纳入 |
| product_classification_scope | CPC 3.0 34669 的限定非杀灭型有蹄动物驱避成品；已接受限定的 narrower 映射 |
| recursive_input_rule | 按身份、门、时间及负担覆盖绑定同类上游成品；内部调拨抵销，不无止境递归或重复创造产量 |
| upstream_dataset_requirement | 实际供方制造、主包装、公用事业、损失和处理的兼容完整聚合；实际外包装和物流服务仅补供方未覆盖部分 |
| disclosure | 各生产者场址、交接、原门、时段、存量、实物与负担归属、未覆盖项和数据质量；未合格上游不得声称完整摇篮到门 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| b_first_release | 完整成品 | 将唯一原始首放行门绑定到实际生产者和全部外包包装方：保留签署批次处置、标签版本、净重及所有者或保管者；实际发生交接时另保留交接及接收方。主标签、行政过渡期或品牌不证明实际放行、共同工厂或版本等同性。上游已经首放行的商品不得在此计作新生产。 | `epa-trico-2026`; `epa-trico-2025`; `ecfr-release-152-3` |
| b_supplier | 上游接口 | 以合格聚合纳入实际供方生产者，按实测内装物净千克包含完整制造、主包装、公用事业、损失及废物处理覆盖。不重构保密组成或操作。核实供方门、实物覆盖、负担基准及地域时段。缺失供方库存是覆盖缺口，不能视作零影响。合并内部交接及继承存量，避免递归重复生产。 | `pef-accounting-2021` |
| b_pack_ledger | 各包装实物池 | 每种容器、封盖、标签、纸箱和托盘均按一致皮重千克及件数保持 S0 + P + F + R = D + U + W + S1。S0/S1 包含明确周界内空置、已装配、载货及扣留实物；周界外所有权资产另设备查账。P 为购买接收；F 为随货或另行借入、无偿调拨的首次非购买外部接收，不受供方负担覆盖影响；R 须追溯到同一件先前跨同一明确周界外发的实物。D 为随内装物外发，U 为其他产品实物外发，W 为废弃。内部装配不是外部接收。来源不明不能归 R。存量及每次外部移动都须有队列和所有者归属。 | `pef-accounting-2021` |
| b_burden_once | 包装及服务负担 | 为每笔实际购置、运输、清洁、维修及处理负担另设覆盖账，明确所有者及队列。实物 P/F/R 不能替代该账。纳入期初及首次非购买接收实物的继承负担；仅扣除供方确已覆盖的精确组件，不假定完整 BOM。真退回继承原有历史并承接实际新增服务，不生成新的制造负担。覆盖未知须保留待决。后续队列服务归其固定原始 Q0，不增加新期间产量。 | `pef-accounting-2021` |
| b_complete | 前景完整性 | 在每个生产者接口调查全部实际公用事业、实物、设备服务、残余物及排放。原子卡片是按发生采集的位置，不是工厂使用这些实物的证据。研究资格确认前，对实际发现的遗漏交换逐项补充物理或化学具体的卡片及协议。独立识别排放物质、环境介质和处理覆盖；未知残余不能当作通用基本流。覆盖或平衡残差未决时不得声称数据集完整。 | `pef-accounting-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| first_release | 供方接口、实际外包装及原始首放行 | required | 只纳入证明此前未首放行的相同队列；上游生产者合格聚合 | 前景及上游接口 | 1 kg reference_product |

下列包装、公用事业和物流卡片仅在实际发生时适用，不预设材质、电压、运输方式或净含量。已随供方聚合进入的组件仍保留实物卡片，但制造需求不再添加。实际 BOM 中的其他组件（如内衬、密封片、捆扎膜）须逐一补卡；不能用现有卡代替。所有废物须绑定具体接收处理；现场排放须另有具体物质和介质卡片。无此数据时覆盖保持不完整，不填写零排放。

### 过程：原始首放行（`first_release`）

#### 输入

##### 产品流

###### 未放行的液态有蹄动物驱避成品 （`unreleased_contents`）

跨越有凭据的放行前接口的完整成品内装物，排除包装皮重。供方生产聚合覆盖实际未披露的制造及主包装，不把内装物当作原料或羊脂代理。合并边界内调拨抵销。已经放行的商品不得形成新的生产产出。

- 选定流：未放行的液态有蹄动物驱避成品
- 流属性/单位：质量 / 千克
- 数量规则：归属于原始放行队列的记录量 / Q0，每 1 kg 参考流；另保留完整实物账。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_lot`
- 来源：`epa-trico-2026`; `pef-accounting-2021`

###### 驱避成品主容器 （`container_in`）

仅在存在时记录一种实际驱避成品主容器实物，排除内装物。分别记录购买 P、首次非购买外部接收 F（含随货、借入、无偿调拨，无论供方负担是否覆盖）和同一件实物的真实退回 R。保留材质、等级、皮重、所有权、前次外发及供方负担覆盖。主包装可随未放行内装物装配到货：这是实物接收，不是第二次购买。

- 选定流：驱避成品主容器
- 流属性/单位：质量 / 千克
- 数量规则：归属于原始放行队列的记录量 / Q0，每 1 kg 参考流；另保留完整实物账。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`pef-accounting-2021`

###### 驱避成品容器封盖 （`closure_in`）

仅在存在时记录一种实际驱避成品容器封盖实物，排除内装物。分别记录购买 P、首次非购买外部接收 F（含随货、借入、无偿调拨，无论供方负担是否覆盖）和同一件实物的真实退回 R。保留材质、等级、皮重、所有权、前次外发及供方负担覆盖。主包装可随未放行内装物装配到货：这是实物接收，不是第二次购买。

- 选定流：驱避成品容器封盖
- 流属性/单位：质量 / 千克
- 数量规则：归属于原始放行队列的记录量 / Q0，每 1 kg 参考流；另保留完整实物账。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`pef-accounting-2021`

###### 驱避成品印制标签 （`label_in`）

仅在存在时记录一种实际驱避成品印制标签实物，排除内装物。分别记录购买 P、首次非购买外部接收 F（含随货、借入、无偿调拨，无论供方负担是否覆盖）和同一件实物的真实退回 R。保留材质、等级、皮重、所有权、前次外发及供方负担覆盖。主包装可随未放行内装物装配到货：这是实物接收，不是第二次购买。

- 选定流：驱避成品印制标签
- 流属性/单位：质量 / 千克
- 数量规则：归属于原始放行队列的记录量 / Q0，每 1 kg 参考流；另保留完整实物账。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`pef-accounting-2021`

###### 驱避成品运输纸箱 （`carton_in`）

仅在存在时记录一种实际驱避成品运输纸箱实物，排除内装物。分别记录购买 P、首次非购买外部接收 F（含随货、借入、无偿调拨，无论供方负担是否覆盖）和同一件实物的真实退回 R。保留材质、等级、皮重、所有权、前次外发及供方负担覆盖。主包装可随未放行内装物装配到货：这是实物接收，不是第二次购买。

- 选定流：驱避成品运输纸箱
- 流属性/单位：质量 / 千克
- 数量规则：归属于原始放行队列的记录量 / Q0，每 1 kg 参考流；另保留完整实物账。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`pef-accounting-2021`

###### 驱避成品运输托盘 （`pallet_in`）

仅在存在时记录一种实际驱避成品运输托盘实物，排除内装物。分别记录购买 P、首次非购买外部接收 F（含随货、借入、无偿调拨，无论供方负担是否覆盖）和同一件实物的真实退回 R。保留材质、等级、皮重、所有权、前次外发及供方负担覆盖。主包装可随未放行内装物装配到货：这是实物接收，不是第二次购买。

- 选定流：驱避成品运输托盘
- 流属性/单位：质量 / 千克
- 数量规则：归属于原始放行队列的记录量 / Q0，每 1 kg 参考流；另保留完整实物账。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`pef-accounting-2021`

###### 外购交流电 （`electricity`）

记录有据的放行边界内实际归属电量。技术属性 Energy 及 MJ/千瓦时链仅支持计量换算；实际供方流、电压、地域、技术及原生属性必须独立核实。同一能量单位组不证明净热值属性。

- 选定流：外购交流电
- 流属性/单位：能量 / 千瓦时（电表计量基准；供方原生属性未决）
- 数量规则：归属于原始放行队列的记录量 / Q0，每 1 kg 参考流；另保留完整实物账。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility`
- 来源：`pef-accounting-2021`

###### 供应清洁用水 （`cleaning_water`）

按实际发生纳入清洁用水，记录水质与供方；排除已经包含在成品中的水。体积转质量须保留体积计量和实测密度，不提供默认密度或配方。

- 选定流：供应清洁用水
- 流属性/单位：质量 / 千克
- 数量规则：归属于原始放行队列的记录量 / Q0，每 1 kg 参考流；另保留完整实物账。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility`
- 来源：`pef-accounting-2021`

###### 公路货运服务 （`road_freight`）

按实际发生纳入首放行前公路路段及归属包装返程；区分载货、空载及载荷基准。运输吨位含实际运输包装质量，Q0 则不含皮重。空载路段使用兼容供方模型，不编造载荷；其他运输方式必须另建原子卡片。

- 选定流：公路货运服务
- 流属性/单位：运输服务 / 吨千米
- 数量规则：归属于原始放行队列的记录量 / Q0，每 1 kg 参考流；另保留完整实物账。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_transport`
- 来源：`pef-accounting-2021`

###### 真实退回的已放行液态有蹄动物驱避成品 （`returned_released_contents`）

仅记录跨明确实物周界的旧货真实退回 Rg，链接前次外发批次及原队列。即使后来换标或换装，仍在已放行 G 账保留继承负担及实际新增服务，不进入未放行 U，也不产生新 Q0。

- 选定流：真实退回的已放行液态有蹄动物驱避成品
- 流属性/单位：质量 / 千克
- 数量规则：原队列归属的实际保管转移量 / 固定原始 Q0；不形成新生产净量，缺少正原始 Q0 则不生成单位结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_released_custody`
- 来源：`ecfr-release-152-3`; `pef-accounting-2021`

###### 外部首次接收的已放行液态有蹄动物驱避成品 （`received_released_contents`）

仅记录已首放行商品的首次外部接收 Ig，保留实际原生产者、放行记录和继承库存。进口、所有权调拨及移库不产生新生产。原队列无法识别时，保留独立待决保管账，不将其归入新生产队列。

- 选定流：外部首次接收的已放行液态有蹄动物驱避成品
- 流属性/单位：质量 / 千克
- 数量规则：原队列归属的实际保管转移量 / 固定原始 Q0；不形成新生产净量，缺少正原始 Q0 则不生成单位结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_released_custody`
- 来源：`ecfr-release-152-3`; `pef-accounting-2021`

#### 输出

##### 产品流

###### 液态有蹄动物啃食驱避成品 （`reference_product`）

唯一参考产出。按原始放行批次在生产者、外包方及所有者之间去重。后续销售、调拨、换标、退货或转售不得再次生成此产出。

- 选定流：液态有蹄动物啃食驱避成品
- 流属性/单位：质量 / 千克
- 数量规则：1 千克
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_release`
- 来源：`epa-trico-2026`; `epa-trico-2025`

###### 未放行的液态有蹄动物驱避成品 （`unreleased_transfer`）

仅记录越出所选边界的实际放行前外发调拨。质量及继承负担归接收方或期末在制队列，不计入 Q0。实际生产者与外包方合并时抵销内部调拨。

- 选定流：未放行的液态有蹄动物驱避成品
- 流属性/单位：质量 / 千克
- 数量规则：归属于原始放行队列的记录量 / Q0，每 1 kg 参考流；另保留完整实物账。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_lot`
- 来源：`pef-accounting-2021`

###### 驱避成品主容器 （`container_out`）

外发驱避成品主容器实物，仅记皮重：分别标记随放行成品交付、随未放行品调拨、未用外退及其他外发，各计一次。后续真实退回必须指向该件前次外发记录。实物质量不是额外参考产品，也不自动等于制造需求。

- 选定流：驱避成品主容器
- 流属性/单位：质量 / 千克
- 数量规则：归属于原始放行队列的记录量 / Q0，每 1 kg 参考流；另保留完整实物账。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`pef-accounting-2021`

###### 驱避成品容器封盖 （`closure_out`）

外发驱避成品容器封盖实物，仅记皮重：分别标记随放行成品交付、随未放行品调拨、未用外退及其他外发，各计一次。后续真实退回必须指向该件前次外发记录。实物质量不是额外参考产品，也不自动等于制造需求。

- 选定流：驱避成品容器封盖
- 流属性/单位：质量 / 千克
- 数量规则：归属于原始放行队列的记录量 / Q0，每 1 kg 参考流；另保留完整实物账。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`pef-accounting-2021`

###### 驱避成品印制标签 （`label_out`）

外发驱避成品印制标签实物，仅记皮重：分别标记随放行成品交付、随未放行品调拨、未用外退及其他外发，各计一次。后续真实退回必须指向该件前次外发记录。实物质量不是额外参考产品，也不自动等于制造需求。

- 选定流：驱避成品印制标签
- 流属性/单位：质量 / 千克
- 数量规则：归属于原始放行队列的记录量 / Q0，每 1 kg 参考流；另保留完整实物账。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`pef-accounting-2021`

###### 驱避成品运输纸箱 （`carton_out`）

外发驱避成品运输纸箱实物，仅记皮重：分别标记随放行成品交付、随未放行品调拨、未用外退及其他外发，各计一次。后续真实退回必须指向该件前次外发记录。实物质量不是额外参考产品，也不自动等于制造需求。

- 选定流：驱避成品运输纸箱
- 流属性/单位：质量 / 千克
- 数量规则：归属于原始放行队列的记录量 / Q0，每 1 kg 参考流；另保留完整实物账。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`pef-accounting-2021`

###### 驱避成品运输托盘 （`pallet_out`）

外发驱避成品运输托盘实物，仅记皮重：分别标记随放行成品交付、随未放行品调拨、未用外退及其他外发，各计一次。后续真实退回必须指向该件前次外发记录。实物质量不是额外参考产品，也不自动等于制造需求。

- 选定流：驱避成品运输托盘
- 流属性/单位：质量 / 千克
- 数量规则：归属于原始放行队列的记录量 / Q0，每 1 kg 参考流；另保留完整实物账。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`pef-accounting-2021`

###### 外发的已放行液态有蹄动物驱避成品 （`released_dispatch`）

已放行账中实际跨周界外发的内装物 Dg，排除包装并链接原队列。这是保管调出，不是第二次生产或参考产出。reference_product 入 G 的门转换与后续实物外发绝不能加作两份制造数量；已含区域间内部移动抵销。

- 选定流：外发的已放行液态有蹄动物驱避成品
- 流属性/单位：质量 / 千克
- 数量规则：原队列归属的实际保管转移量 / 固定原始 Q0；不形成新生产净量，缺少正原始 Q0 则不生成单位结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_released_custody`
- 来源：`ecfr-release-152-3`; `pef-accounting-2021`

##### 废物流

###### 废弃液态有蹄动物驱避成品 （`waste_contents`）

实际单独收集的废弃内装物，不含容器和清洁水。记录废物分类、接收方、处理范围及继承生产负担；废物接收方不是基本排放环境介质。

- 选定流：废弃液态有蹄动物驱避成品
- 流属性/单位：质量 / 千克
- 数量规则：归属于原始放行队列的记录量 / Q0，每 1 kg 参考流；另保留完整实物账。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：`pef-accounting-2021`

###### 含驱避成品的清洁废水 （`cleaning_effluent`）

按实际发生记录交付处理供方的收集废水。记录总质量及有据组成；其中成品含量是内部平衡组分，不再作为 waste_contents 重复交换。供方已含处理排放不得在此再次排放。

- 选定流：含驱避成品的清洁废水
- 流属性/单位：质量 / 千克
- 数量规则：归属于原始放行队列的记录量 / Q0，每 1 kg 参考流；另保留完整实物账。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：`pef-accounting-2021`

###### 废弃驱避成品主容器 （`container_waste`）

按实际发生记录一种废弃驱避成品主容器流，保留实际材质、污染类别、接收方及处理。排除附着内装物，后者保留独立组分账。不同材质或污染等级必须拆成独立原子行。

- 选定流：废弃驱避成品主容器
- 流属性/单位：质量 / 千克
- 数量规则：归属于原始放行队列的记录量 / Q0，每 1 kg 参考流；另保留完整实物账。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：`pef-accounting-2021`

###### 废弃驱避成品容器封盖 （`closure_waste`）

按实际发生记录一种废弃驱避成品容器封盖流，保留实际材质、污染类别、接收方及处理。排除附着内装物，后者保留独立组分账。不同材质或污染等级必须拆成独立原子行。

- 选定流：废弃驱避成品容器封盖
- 流属性/单位：质量 / 千克
- 数量规则：归属于原始放行队列的记录量 / Q0，每 1 kg 参考流；另保留完整实物账。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：`pef-accounting-2021`

###### 废弃驱避成品印制标签 （`label_waste`）

按实际发生记录一种废弃驱避成品印制标签流，保留实际材质、污染类别、接收方及处理。排除附着内装物，后者保留独立组分账。不同材质或污染等级必须拆成独立原子行。

- 选定流：废弃驱避成品印制标签
- 流属性/单位：质量 / 千克
- 数量规则：归属于原始放行队列的记录量 / Q0，每 1 kg 参考流；另保留完整实物账。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：`pef-accounting-2021`

###### 废弃驱避成品运输纸箱 （`carton_waste`）

按实际发生记录一种废弃驱避成品运输纸箱流，保留实际材质、污染类别、接收方及处理。排除附着内装物，后者保留独立组分账。不同材质或污染等级必须拆成独立原子行。

- 选定流：废弃驱避成品运输纸箱
- 流属性/单位：质量 / 千克
- 数量规则：归属于原始放行队列的记录量 / Q0，每 1 kg 参考流；另保留完整实物账。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：`pef-accounting-2021`

###### 废弃驱避成品运输托盘 （`pallet_waste`）

按实际发生记录一种废弃驱避成品运输托盘流，保留实际材质、污染类别、接收方及处理。排除附着内装物，后者保留独立组分账。不同材质或污染等级必须拆成独立原子行。

- 选定流：废弃驱避成品运输托盘
- 流属性/单位：质量 / 千克
- 数量规则：归属于原始放行队列的记录量 / Q0，每 1 kg 参考流；另保留完整实物账。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：`pef-accounting-2021`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| a_subdivide | 共用前景需求 | 先按批次、电表和外包服务细分。无法细分时说明原因，并对精确资源池和期间采用有据的因果物理驱动 h_i / sum(h_j)，份额和为一。不得假定成品净质量驱动全部清洁、储存或运输。无合理驱动则保留分配未决，不任意均分。 | `pef-accounting-2021` |
| a_reuse | 可重复使用实物 | 实际重复使用时，将有据的实物制造和首次交付负担分摊到有据的全寿命总使用次数，含首次使用，并保留寿命未完结的不确定性。实际返程运输、清洁、维修及寿命终结仅计一次并归相关使用或队列。R/(P+F+R) 和存量周转都不是寿命使用次数。缺乏可靠寿命数据时保留未摊销历史及未决分配，不编造周转次数或回收抵扣。 | `pef-accounting-2021` |
| a_outputs | 非参考产出 | 包装皮重是交付附属实物，不是自动取得抵扣的共产品。保留承载负担的不合格、未放行调拨及期末存量队列；正常不合格品承接实际生产需求和处理。可销售共产品须另有有据功能及合理分配。不得计入避免啃食损害、农药替代或田间效果抵扣。 | `pef-accounting-2021` |

## 8. 前景数据采集、计算与质量规则

所有协议保留原始绝对读数及完整实物账，再按相同原始队列汇总实际归属量并除原始 Q0，形成每 1 kg 参考流。数据包必须另列实际分子、单位、覆盖、分配和原始队列。后续期间没有新增首放行时，新生产 Q0 为零：保留其存量、实际服务和原始负担，不生成该期间的新生产单位结果。后续服务若补入原始队列，须引用其固定原始正 Q0 及原数据版本，不将旧货退回或监管再生产事件添加为新 Q0。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | first_release | reference_product | 签署放行与净重记录 | 登记、国家、标签版、批号、原放行日期、生产者、交接、毛重、逐组件皮重、唯一净重、扣留量 | 以校准称量及签署批次台账核对原始首放行，跨外包方去重 | kg | 每批或每次移动 | 同一原始放行队列及完整期初期末 | 具名生产者及外包区域的明确实物周界；周界外所有权存量另设备查账 | 每 1 kg 参考流 | 校准证书、签署放行、标签及交接原件 |
| cp_lot | first_release | unreleased_contents; unreleased_transfer | 供方接口和成品存量记录 | 批号、供方门、未放行身份、期初、到货、退回、首放行、外调、扣留、废弃、废水内成品组分、期末、继承负担 | 独立称量和交接对账，外包供方原始负担覆盖表绑定同批同门 | kg | 每批或每次移动 | 同一原始放行队列及完整期初期末 | 具名生产者及外包区域的明确实物周界；周界外所有权存量另设备查账 | 每 1 kg 参考流 | 净重台账、供方范围及存量原件 |
| cp_pack | first_release | container_in; container_out; closure_in; closure_out; label_in; label_out; carton_in; carton_out; pallet_in; pallet_out | 逐实物池收发存与负担覆盖 | 组件规格、件码、实测皮重、件数、所有者、地点、S0/S1、P/F/R、同件前次外发链接、D/U/W、供方覆盖、实际采购运输服务、寿命使用及未摊余额 | 秤量同规格实物并对账收发存；无购买的首次外收也必记 F，真退回独立核件码及前次外发；供方负担逐组件另核 | kg | 每批或每次移动 | 同一原始放行队列及完整期初期末 | 具名生产者及外包区域的明确实物周界；周界外所有权存量另设备查账 | 每 1 kg 参考流 | 实物收据、场外确认、称量、前次外发、供方覆盖和服务原件 |
| cp_utility | first_release | electricity; cleaning_water | 实际分表及供方记录 | 表码、起止读数、期间、电压/水质、供方、扣除重复、分配驱动、体积密度及原生属性单位 | 核对校准分表与账单；电表能量和原生供方属性另审，水体积转质量须同批测量 | kWh; kg | 每批或每次移动 | 同一原始放行队列及完整期初期末 | 具名生产者及外包区域的明确实物周界；周界外所有权存量另设备查账 | 每 1 kg 参考流 | 分表校准、账单、供方属性单位链、密度原件 |
| cp_transport | first_release | road_freight | 逐路段承运交接 | 路段、日期、起终点、承运者、模式、载荷吨位及包装、千米、空返、供方覆盖、队列 | 核对运单与实际距离并排除已覆盖路段，空返用兼容服务基准 | t·km | 每批或每次移动 | 同一原始放行队列及完整期初期末 | 具名生产者及外包区域的明确实物周界；周界外所有权存量另设备查账 | 每 1 kg 参考流 | 运单、里程及覆盖证据 |
| cp_residual | first_release | waste_contents; cleaning_effluent; container_waste; closure_waste; label_waste; carton_waste; pallet_waste | 逐废物流及排放覆盖调查 | 批号、原始队列、U/G 状态、物质或实物、质量、污染等级、废水中成品组分、接收者、处理门、现场排放物质介质、原生单位、覆盖、不确定性 | 称量及转移联单核对，调查现场各介质；残差单列，不把差额当空气排放或漏报即零 | kg | 每批或每次移动 | 同一原始放行队列及完整期初期末 | 具名生产者及外包区域的明确实物周界；周界外所有权存量另设备查账 | 每 1 kg 参考流 | 称量、接收联单、处理范围、监测及物质平衡 |
| cp_released_custody | first_release | returned_released_contents; received_released_contents; released_dispatch | 已放行保管及原队列记录 | 原始批次、原生产者及首放行 Q0、前次外发、Rg/Ig/Dg、实物周界、G0/G1、监管再生产事件、继承负担、实际新增服务 | 独立核实实物退回/首次外收/后续外发及原首放行，不以重新贴标或所有权移动创造 Q0；缺失原队列独立扣留 | kg | 每次移动 | 原队列生命周期及实际期间 | 明确实物周界；外部所有权另设备查账 | 每 1 kg 参考流 | 前次外发及退回联单、原首放行、实测净重、继承负担及新增服务原件 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| release_denominator | reference_product | Q0 = sum(各唯一原始首放行批次毛重 - 同批逐组件实测皮重)。不含未放行调拨、转售或重复退货放行；Q0 必须大于零。 | cp_release; cp_pack | Q0 kg | `epa-trico-2026`; `pef-accounting-2021` |
| cohort_normalization | 所有清单行 | x_norm = x_attributed / Q0；x_attributed 为该行归原始队列的实测或有据分配数量，x_norm 为每 1 kg 参考流数量。保留实际各单位及负担覆盖。 | cp_release; cp_lot; cp_pack; cp_utility; cp_transport; cp_residual | x_norm | `pef-accounting-2021` |
| contents_balance | unreleased_contents; reference_product; unreleased_transfer; returned_released_contents; received_released_contents; released_dispatch; waste_contents; cleaning_effluent | 按同一明确实物周界分两状态账：U0 + Iu = Q0 + Du + Wu + Cu + Eu + U1；G0 + Q0 + Ig + Rg = Dg + Wg + Cg + Eg + G1。U 为从未首放行内装物（含扣留），G 为已首放行内装物；0/1 为期初期末。Iu 仅含有据从未放行外收及其退回；Ig 为首次外收的已放行商品；Rg 为已放行旧货的真实退回，独立绑定原队列，绝不转入 U。Du/Dg 为各状态的产品外发，不含互斥的 W、C、E 去向。W 为单独废弃内装物，C 为废水内成品组分，E 为已测逐物质排放。Q0 在两账间内转，对合并实物边界相消；内部调拨抵销，废水组分不重复交换。差额保持未决。 | cp_lot; cp_release; cp_released_custody; cp_residual | contents closure in kg | `pef-accounting-2021` |
| article_balance | 每种包装实物池 | 逐种核对 S0 + P + F + R = D + U + W + S1；件数乘同规格实测皮重得千克。实物量不自动作为新增制造需求；另核继承负担、覆盖及寿命使用。 | cp_pack; cp_residual | article closure and burden coverage | `pef-accounting-2021` |
| electricity_conversion | electricity | E_MJ = 3.6 * E_kWh；仅换算电表能量，不能以单位组替代供方原生属性核查。 | cp_utility | MJ; kWh | `pef-accounting-2021` |
| freight_basis | road_freight | 载货路段服务 = 实际运输总吨位 * 实际公里；含包装吨位，剔除供方已含路段。空返另按兼容供方基准；不以 Q0 净千克替代实际载荷。 | cp_transport | t·km | `pef-accounting-2021` |

状态账算例（仅为恒等式检查，不是工厂数据）：U0=10、Q0=6、U1=4；G0=3、Rg=1、Dg=5、G1=5，其余项为零。U 账 10=6+4，G 账 3+6+1=5+5，合并 13+1=5+9；当期首次净量只有 6。已放行进口/移库、同件换标和后日出库均不产生新 Q0。

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_identity | reference_product | 生产者、登记版本、实际包装和批次净重一致；品牌同名不能跨版本合并 | 标签原件、签署首放行和交接 |
| dq_complete | 全系统 | 逐生产者审供方黑箱、BOM、原生属性单位、残余及服务覆盖；缺失保持未决 | 供方覆盖矩阵、逐行实物及负担账 |
| dq_uncertainty | 测量与分配 | 披露测量分辨率、校准、采集时段及实物池分配不确定性；不虚设数值范围 | 原始读数、不确定性和驱动证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| v_identity | 参考产品及分类 | 要求实际国家、登记、版本、批次、生产者及非杀灭型有蹄动物驱避目的，不能仅凭农药标签。排除 CPC 34661 杀虫剂、34662 杀菌剂、34663 除草/抑芽/生长调节剂、34664 消毒剂及 34666 危险农药。后者是特定 HS 组，不是警示图标判断：须以权威归类依据或有能力供方声明确认实际产品不属 HS 3808.52/.59，不从未披露成分推断。未决情形须扣留。本限定范围与 34669 的关系为 narrower 推断，不是 TRICO 官方海关裁定。 | `unsd-cpc3-2025`; `unsd-cpc3-2026`; `cbp-repellent-2009`; `epa-trico-2026` |
| v_measure | 所有清单行 | 要求 Q0 > 0、首放行批次唯一归属、校准净重计量、双语同一队列分母、可追溯活动分子及兼容供方原生单位。拒绝包装毛重或有效成分分母、调拨重复产出、默认密度及无依据的能量属性替代。 | `pef-accounting-2021` |
| v_balance | 各批次及实物池 | 闭合内装物及每种包装账，包含明确周界内各地点的期初期末存量（周界外所有权资产另设备查账）、所有购买及首次非购买接收、真退回、载货及未用外发、废弃和扣留量。独立于负担覆盖核对同件退回链接。按测量单位保留不确定性及来源特定容差，不编造通用容差，也不以差额当排放强行闭合。 | `pef-accounting-2021` |
| v_coverage | 数据集就绪性 | 完整环境用途前须具备合格上游生产、实际包装 BOM、全部适用原子流及属性单位、服务、排放、残余接收处理、分配及继承负担。声明参考产品 UUID 未决仅允许候选编写，不证明生产者等同或研究资格。报告已执行和跳过检查及每个覆盖未决项。 | `pef-accounting-2021` |
| v_release_event | 原始放行状态及场址实物 | 独立核对最早适用放行事件与实物出厂：未发运但已完成商品包装标签或进入待运区的合格质量可纳 Q0；隔离标记的未放行货保留扣留状态。期末已放行待运质量保留实物存量，不再在实物平衡中加 Q0。后续监管 production 事件不得抹去，亦不得把同一内装物当新净产量；全部真实新增环境负担须继续归原队列。 | `ecfr-release-152-3`; `epa-trico-2026` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 仅在实际数据、上游及原生身份合格后作为原首放行成品生产门背景 |
| allowed_use | 同登记版本、状态、边界和供方覆盖的环境核算；明确不确定性 |
| excluded_use | 配方及制造指导、施用效果、毒理、监管归类裁定、完整 PEF 合规、默认田间影响或未合格数据替代 |
| required_metadata | 版本、净质量、原放行门、生产者和外包场址时段、BOM、上游接口、队列、各行原生属性单位及分配 |
| required_quality_disclosure | 上游黑箱覆盖、全部未决身份及残余、实物和负担闭合、测量和寿命不确定性、执行及跳过检查 |
| update_trigger | 登记标签、批次身份、生产者交接、包装、供方覆盖、门、单位属性或分配变化 |

CAES 原件对 TRICO Pro 的商业对照身份提供独立机构佐证，厂家页面补充液态鹿驱避商品身份；两者不提供实际放行批次、生产者路线或工厂数量，研究中的其他产品及使用效果不纳入。Mass/kg 和技术 Energy/MJ/千瓦时换算来自独立核对的原生属性单位链，非本表外部文献中的产品用量因子。

## 11. 数据源

| Source id | 类型 | 参考资料 | 用途与边界 |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 explanatory notes, 30 June 2025, PDF p.167. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 冻结叶及邻界标题；该页不含具体产品归类或工厂数据 |
| unsd-cpc3-2026 | official_guidance | UNSD, 23 October 2026 explanatory-note workbook, CPC3!A1500:D1500 and rows1495–1499. https://unsdsna.azure-api.net/files/pages/cpc/CPC_Ver3_Exp_Notes_2026-10-23_for_Website.xlsx | 34669 对应 HS2022 3808.99 及邻界具体子目；不改变冻结坐标，不证明具体产品有资格 |
| epa-trico-2026 | official_guidance | US EPA, TRICO 71637-2 authority letter 21 January 2026, PDF pp.1–2; master-label identity/net-contents/lot fields p.3. https://www3.epa.gov/pesticides/chem_search/ppls/071637-00002-20260121.pdf | 成品及品牌身份、标签版与首装运放行门；不是实际批次、数量、供方或历史版本等同性证据 |
| epa-trico-2025 | official_guidance | US EPA, TRICO 71637-2 authority letter 21 February 2025, PDF pp.1–2 and identity fields p.3. https://www3.epa.gov/pesticides/chem_search/ppls/071637-00002-20250221.pdf | 较早独立标签版本及批次/包装身份字段；已被后续函件取代并有过渡条件，不能默认用于当前实际批次 |
| caes-commercial-2024 | literature | Connecticut Agricultural Experiment Station, Final Report 23-02-CAES, title and identification of TRICO Pro as comparison product, PDF p.1. https://www.realchristmastreeboard.org/wp-content/uploads/2024/10/23-02-CAES-Final-Report.pdf | 不同机构对实体商业对照成品的存在性佐证；不采用试验操作、效果、剂量、制法、工厂库存或具体放行批次 |
| kwizda-commercial | literature | Kwizda Agro, TRICO product identity page. https://trico-repellent.eu/en/products/trico-sup-r-sup-~mp19218 | 厂家对鹿驱避液态商品身份的补充；各国登记及实际包装须另核，不搬用浓度、施用、效果、密度或工厂数据 |
| cbp-repellent-2009 | official_guidance | US CBP, HQ W968435, 15 June 2009, Customs Bulletin Vol43 No27 (10 July 2009), PDF pp.15–17. https://rulings.cbp.gov/ruling/W968435 ; https://www.cbp.gov/bulletins/43genno27.pdf | 不同驱避成品 Dog and Cat Get Away 历史归 3808.99.95，驱避不等于杀灭；只作功能邻界，不是 TRICO 或当前 CPC 官方裁定 |
| pef-accounting-2021 | official_guidance | European Commission Recommendation (EU) 2021/2279, corrected consolidated Annex I, sections3.2.1–3.2.2 (p.33), 4.4.9 (p.79), 4.5 (pp.87–88). https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:02021H2279-20211230 | 声明单位、边界披露、全寿命重复使用及细分/因果物理分配原则。本文队列/实物闭合是环境核算采集约定，不是法规规定的工厂事实、生产范围、默认周转率或完整 PEF 符合声明 |
| ecfr-release-152-3 | official_guidance | 40 CFR §152.3, definitions of Released for shipment and pesticide product; eCFR displayed Title40 current through 19 November 2026, read 22 November 2026. https://www.ecfr.gov/current/title-40/chapter-I/subchapter-E/part-152/subpart-A/section-152.3 | 美国成品放行事件、未放行隔离及后续监管事件；须核实际事件日期版本。不是实际工厂证据，不要求首事件已发运；环境首次净量与监管事件分别记账。 |
