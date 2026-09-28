---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.parts-for-the-goods-of-subclasses-47221-to-47223
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---


# 47221 至 47223 小类货物的部件

## 1. 范围与适用性

本 PCR 规定适用于单独供应、专为 CPC 47221–47223 类电话机或通信设备设计的成品部件的工厂门口生产。具体数据包必须说明部件、适配主设备、技术及生产路线。该类别流用于质量基准报告，不能据此直接比较功能不同的部件。完整电话机、路由器或基站的生产不属于本部件参考流。[un-cpc-3-2025; itu-l1410-2024]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.parts-for-the-goods-of-subclasses-47221-to-47223 |
| classification_refs | CPC 3.0 47401，47221 至 47223 小类货物的部件 |
| covered_products | 单独供应、供上述主设备使用的专用成品部件；以该部件形式销售的已装配电路板及加工机械部件 |
| excluded_products | 完整主设备；作为独立产品销售的未装配印制电路板、集成电路、未成形板材及包装 |
| representative_product | 作为备件供应的通信设备已装配电路板模块；申报后其他专用部件路线也适用 |
| production_route | 申报实际现场路线；仅发生装配电路板或加工板材时适用对应清单行 |
| market_state | 工厂门口经检验验收、可用且单独供应的部件；不包括运输、使用和报废阶段 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为兼容电话机或通信设备提供规定功能的专用部件 |
| How much | 同一已申报规格的验收成品部件净质量 1 kg |
| How well | 满足申报的检验和兼容性规范；说明部件类型、材料及性能指标 |
| How long or cycle | 一个生产批次至工厂门口；不建模服役寿命及使用阶段 |
| reference_flow_link | finished_part |


| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 47221 至 47223 小类货物的部件 `bf7766aa-8f63-4869-bd70-2090483f4437` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 部件类型及料号；适配主设备的小类及型号；验收功能规范；材料组成；制造路线；生产地点及期间；包装不计入净质量 |


仅功能、质量和边界等效的部件才可比较质量基准结果。生产者应对与所有清单采集协议一致的批次称量验收净产出。[itu-l1410-2024]

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 验收后、加运输包装前使用经校准的秤称量成品部件；排除不合格品及瓦楞纸箱。采用 cp_finished_mass 采集。 |
| inventory_basis | all inventory rows | 各选定流的物理流属性 | 清单行单位 | 采用同一验收净产出质量及生产期间，将归属批次数量记录为每 1 kg 参考流；电路板面积保持 m2，材料质量保持 kg，电力保持 kWh。 |


## 5. 系统边界

从摇篮到工厂门口的核算包括采购电路板、集成电路、焊膏、铝板材、电力和包装的上游数据集，以及申报的现场制造、装配、检测及包装。部件离厂后的主设备装配、配送、使用和寿命终止不纳入该部件数据集。外包过程作为上游数据集披露。[itu-l1410-2024]

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采购材料和组件进入部件生产者场址；供应商生产在上游表示 |
| starting_condition_role | 具有上游数据集链接的明确前景投入 |
| product_classification_scope | 适用于 47221、47222 和 47223 主设备、单独供应的专用部件 |
| recursive_input_rule | 采购的同类别部件应作为独立投入并链接其上游数据集，在申报的供应商边界停止追踪；不得并入参考产出 |
| upstream_dataset_requirement | 尽可能使用材料组成及地理位置相匹配的供应商数据集；披露缺失的上游过程及替代数据的局限 |
| disclosure | 报告部件身份、路线、供应商边界、纳入阶段、排除项和所有偏离 |


| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_gate | foreground part production | 包括截至工厂门口验收的适用现场制造、模块装配、检测与包装；披露路线对应的遗漏。 | itu-l1410-2024 |
| boundary_supplier | purchased component inputs | 明确采购组件的上游负荷与过程边界；不得将供应商阶段重复计为现场制造。 | itu-l1410-2024 |


## 6. 过程清单结构

以下清单卡片规定常见电路板模块与铝板材路线的原子交换。仅在相应物理操作实际发生时应用清单行。其他部件技术必须披露自身的原子交换，并在将本表视为完整清单之前接受方法复核。[itu-l1410-2024]

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 作用 | 定量基准 |
| --- | --- | --- | --- | --- | --- |
| part_manufacturing | 部件制造、模块装配、检测和包装 | required | 申报电路板装配、板材加工及包装是否发生；各条件清单行随实际路线纳入 | 一种验收部件的前景生产 | 每 1 kg 验收成品部件 |


### Process: 部件制造 (`part_manufacturing`)

#### 输入

##### 产品流

###### 裸印制电路板投入 (`bare_pcb`)

仅当生产者为所申报通信部件装配裸板时纳入。记录采购电路板面积及供应商技术；上游制板纳入供应商数据集。

- 选定流：已加工裸PCB板 `6f07dbee-0861-42d0-a644-f84a667933a9`

- 流属性/单位：Area / m2

- 数量规则：归属于验收产出的电路板实测面积，每 1 kg 参考流。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_bare_pcb`

- 来源：`itu-l1410-2024`

###### 封装集成电路投入 (`packaged_ic`)

部件装有封装集成电路时纳入；按物料清单核对质量及料号。采购集成电路时不得把裸芯片制造计为现场过程。

- 选定流：封装集成电路 `b6eb5862-9b77-4f3a-8e0d-1eea7f0ac8bb`

- 流属性/单位：Mass / kg

- 数量规则：每 1 kg 参考流消耗的采购集成电路实测质量。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_packaged_ic`

- 来源：`itu-l1410-2024`

###### 焊膏投入 (`solder_paste`)

仅现场使用焊膏印刷工艺时纳入。申报合金及助焊剂配方；数据库流身份并不证明其无铅组成。

- 选定流：焊膏 `13b90193-c692-4fce-a8d6-a20554776710`

- 流属性/单位：Mass / kg

- 数量规则：每 1 kg 参考流消耗的焊膏实测质量。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_solder_paste`

- 来源：`itu-l1410-2024`

###### 铝板材投入 (`aluminium_sheet`)

仅前景场址用铝板材成形或切割部件时纳入。申报牌号、再生含量及实际制造路线；此通用流不证明原铝来源。

- 选定流：铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`

- 流属性/单位：Mass / kg

- 数量规则：每 1 kg 参考流消耗的铝板材实测质量。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_aluminium_sheet`

- 来源：`itu-l1410-2024`

###### 购入交流电 (`electricity`)

记录所申报现场部件制造、装配、检测与包装消耗的电力。公开候选记录不能唯一确认电网供电流身份；发布数据集前须核定。

- 选定流：电网供应的交流电

- 流属性/单位：Energy / kWh

- 数量规则：每 1 kg 参考流对应的归属电表电量。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_electricity`

- 来源：`itu-l1410-2024`

###### 瓦楞纸运输箱投入 (`corrugated_box`)

验收部件以瓦楞纸箱交付时纳入。纸箱是出厂包装的投入，不计入参考产品净质量。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`

- 流属性/单位：Mass / kg

- 数量规则：每 1 kg 参考流对应的验收产出归属纸箱实测质量。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_corrugated_box`

- 来源：`itu-l1410-2024`

##### 废物流

##### 基本流



#### 输出

##### 产品流

###### 验收通信设备成品部件 (`finished_part`)

一个已申报部件类型及适配主设备，经检验验收并到达工厂门口。净质量不含运输箱及不合格品。

- 选定流：47221 至 47223 小类货物的部件 `bf7766aa-8f63-4869-bd70-2090483f4437`

- 流属性/单位：Mass / kg

- 数量规则：1 千克

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_finished_mass`

- 来源：`un-cpc-3-2025`

##### 废物流

###### 报废已装配电路板 (`rejected_pcba`)

仅已装配电路板检验不合格并作为单独收集的装配板废物离开前景时纳入。记录去向，不得计入验收产品。

- 选定流：废弃装配印制线路板 `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`

- 流属性/单位：Mass / kg

- 数量规则：每 1 kg 参考流对应的报废装配板实测质量。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_rejected_pcba`

- 来源：`itu-l1410-2024`

###### 单独收集的铝切割废料 (`aluminium_scrap`)

仅铝板材切割产生单独收集的铝废料时纳入。记录回收或处置去向，前景清单不直接计入抵扣。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`

- 流属性/单位：Mass / kg

- 数量规则：每 1 kg 参考流对应的铝废料实测质量。

- 数值来源模式：前景记录（`foreground_record`）

- 适用范围：场址特定（`site_specific`）

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流（`reference_flow`）

- 证据类型：采集记录（`collected_record`）

- 采集协议：`cp_aluminium_scrap`

- 来源：`itu-l1410-2024`

##### 基本流



## 7. 分配与副产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocate_subdivide | shared lines and co-products | 优先拆分有计量记录的过程，并将直接投入和废物记录归属于所申报部件。 | itu-l1410-2024; eu-pef-2021-2279 |
| allocate_physical | shared facility data | 无法拆分时采用与过程有关且有证据的物理驱动量：电路板操作用面积、集成电路生产用有效芯片面积、其他部件用质量。记录驱动量、总量及敏感性。 | itu-l1410-2024; eu-pef-2021-2279 |
| allocate_economic | shared facility data without a defensible physical driver | 仅物理数据不足时采用经济分配；报告价格基准、期间及敏感性。铝废料不自动获得回收抵扣。 | itu-l1410-2024; eu-pef-2021-2279 |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_bare_pcb | part_manufacturing | bare_pcb | 批次台账及经校准的电表或秤 | 批次号；部件料号；验收净产出 kg；归属的裸印制电路板投入数量 | 对同一验收批次计量或核对裸印制电路板投入；记录路线适用性及供应商或废物去向。 | m2 | 每批次 | 申报生产期间 | 申报场址 | 每 1 kg 参考流 | 电表或秤校准记录；采购与生产台账；验收及质量平衡记录 |
| cp_packaged_ic | part_manufacturing | packaged_ic | 批次台账及经校准的电表或秤 | 批次号；部件料号；验收净产出 kg；归属的封装集成电路投入数量 | 对同一验收批次计量或核对封装集成电路投入；记录路线适用性及供应商或废物去向。 | kg | 每批次 | 申报生产期间 | 申报场址 | 每 1 kg 参考流 | 电表或秤校准记录；采购与生产台账；验收及质量平衡记录 |
| cp_solder_paste | part_manufacturing | solder_paste | 批次台账及经校准的电表或秤 | 批次号；部件料号；验收净产出 kg；归属的焊膏投入数量 | 对同一验收批次计量或核对焊膏投入；记录路线适用性及供应商或废物去向。 | kg | 每批次 | 申报生产期间 | 申报场址 | 每 1 kg 参考流 | 电表或秤校准记录；采购与生产台账；验收及质量平衡记录 |
| cp_aluminium_sheet | part_manufacturing | aluminium_sheet | 批次台账及经校准的电表或秤 | 批次号；部件料号；验收净产出 kg；归属的铝板材投入数量 | 对同一验收批次计量或核对铝板材投入；记录路线适用性及供应商或废物去向。 | kg | 每批次 | 申报生产期间 | 申报场址 | 每 1 kg 参考流 | 电表或秤校准记录；采购与生产台账；验收及质量平衡记录 |
| cp_electricity | part_manufacturing | electricity | 批次台账及经校准的电表或秤 | 批次号；部件料号；验收净产出 kg；归属的购入交流电数量 | 对同一验收批次计量或核对购入交流电；记录路线适用性及供应商或废物去向。 | kWh | 每批次 | 申报生产期间 | 申报场址 | 每 1 kg 参考流 | 电表或秤校准记录；采购与生产台账；验收及质量平衡记录 |
| cp_corrugated_box | part_manufacturing | corrugated_box | 批次台账及经校准的电表或秤 | 批次号；部件料号；验收净产出 kg；归属的瓦楞纸运输箱投入数量 | 对同一验收批次计量或核对瓦楞纸运输箱投入；记录路线适用性及供应商或废物去向。 | kg | 每批次 | 申报生产期间 | 申报场址 | 每 1 kg 参考流 | 电表或秤校准记录；采购与生产台账；验收及质量平衡记录 |
| cp_finished_mass | part_manufacturing | finished_part | 批次台账及经校准的电表或秤 | 批次号；部件料号；验收净产出 kg；归属的验收通信设备成品部件数量 | 对同一验收批次计量或核对验收通信设备成品部件；记录路线适用性及供应商或废物去向。 | kg | 每批次 | 申报生产期间 | 申报场址 | 每 1 kg 参考流 | 电表或秤校准记录；采购与生产台账；验收及质量平衡记录 |
| cp_rejected_pcba | part_manufacturing | rejected_pcba | 批次台账及经校准的电表或秤 | 批次号；部件料号；验收净产出 kg；归属的报废已装配电路板数量 | 对同一验收批次计量或核对报废已装配电路板；记录路线适用性及供应商或废物去向。 | kg | 每批次 | 申报生产期间 | 申报场址 | 每 1 kg 参考流 | 电表或秤校准记录；采购与生产台账；验收及质量平衡记录 |
| cp_aluminium_scrap | part_manufacturing | aluminium_scrap | 批次台账及经校准的电表或秤 | 批次号；部件料号；验收净产出 kg；归属的单独收集的铝切割废料数量 | 对同一验收批次计量或核对单独收集的铝切割废料；记录路线适用性及供应商或废物去向。 | kg | 每批次 | 申报生产期间 | 申报场址 | 每 1 kg 参考流 | 电表或秤校准记录；采购与生产台账；验收及质量平衡记录 |


### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| lot_mass_balance | finished_part and material losses | 检查验收产出与单独收集废料的质量相对于实测材料投入是否合理；解释未回收损失，不得虚构成品率因子。 | 验收产出；材料投入；废料记录 | 质量平衡复核 | itu-l1410-2024 |


### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 投入、产出和参考流须采用同一部件料号、主设备兼容性、路线及批次。 | 物料清单；检验记录 |
| dq_temporal | all collection protocols | 使用一个已披露的生产期间及场址；记录估算或缺失电表份额。 | 带日期台账；电表及分配记录 |
| dq_completeness | applicable route cards | 核算适用的材料、电力及废物；对其他实际交换另加原子记录并解释遗漏。 | 过程图；质量平衡；废物转移记录 |
| dq_electricity | electricity | 发布数据包前应核定唯一公开产品流及与地理位置匹配的电力上游数据集。 | 任务绑定的流审计；电表；供应商数据集 |


## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference flow and finished_part | 要求部件与主设备兼容、准确的 CPC 47401 产品流 UUID、1 kg 验收净质量，并将包装排除在产品净质量外。 | un-cpc-3-2025; itu-l1410-2024 |
| validate_route | all inventory rows | 要求路线对应的纳入条件、原子选定流、批次记录，并核对验收产出、不合格品与材料投入。 | itu-l1410-2024 |
| validate_unresolved | electricity | 核定唯一公开电力流前阻止前景数据包发布；保留实测活动数据，不得选择有歧义的 UUID。 | itu-l1410-2024 |


## 10. 已发布数据集说明

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种已申报部件规格的前景产品生产数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 当规格和边界匹配时，作为主设备 LCA 的专用部件投入建模 |
| excluded_use | 不得替代完整电话机或网络设备、按质量比较不同功能部件，亦不得宣称使用或寿命终止影响 |
| required_metadata | 部件料号；主设备兼容性；生产地点、年份与技术；物料清单；验收净质量；路线及供应商边界；分配驱动量 |
| required_quality_disclosure | 未解决的电力 UUID；缺失的上游数据；条件路线遗漏；电表分配；废料去向；来源局限 |
| update_trigger | 部件设计、材料组成、路线、供应商结构、电力流身份或生产期间发生重大变化 |


## 11. 数据来源

| 来源 ID | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | UNSD，CPC 3.0 版结构，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 身份及主设备小类 |
| itu-l1410-2024 | standard | ITU-T 建议书 L.1410（11/2024），https://www.itu.int/rec/dologin_pub.asp?id=T-REC-L.1410-202411-I%21%21PDF-E&lang=s&type=items | ICT 部件、功能单位、过程图及设施物理分配 |
| eu-pef-2021-2279 | official_guidance | 欧盟委员会建议 (EU) 2021/2279，附件 I 第 4.5 节，https://environment.ec.europa.eu/document/download/680503dc-5a19-4f6a-bb92-84d9bfc8f312_en?filename=Annexes+1+to+2.pdf | 多功能过程分配层级 |
